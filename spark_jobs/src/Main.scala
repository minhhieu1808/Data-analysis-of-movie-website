import org.apache.spark.sql.functions._
import org.apache.spark.sql.SparkSession

object Main {
  def main(args: Array[String]): Unit = {
    val spark = SparkSession
      .builder
      .master("yarn")
      .appName("StructuredNetworkWordCount")
      .getOrCreate()

    spark.sparkContext.setLogLevel("ERROR")
    import spark.implicits._
//    System.setProperty("hadoop.home.dir", "C:\\Users\\Admin\\bigdata\\winutils\\hadoop-3.0.1")
    println("start!!")
    val df = spark
      .readStream
      .format("kafka")
      .option("kafka.bootstrap.servers", "192.168.233.209:9092,192.168.233.209:9093")
      .option("startingOffsets", "earliest")
      .option("subscribe", "enriched")
      .load()
    .selectExpr("CAST(key AS STRING)", "CAST(value AS STRING)","topic","partition","offset","timestamp","timestampType")
      .writeStream
      .outputMode("append")
      .format("parquet")
      .option("path", "/raw_zone/d_event")
        .option("compression", "snappy")
      .option("checkpointLocation", "/raw_zone/d_event/checkpoint")
      .start()
    df.awaitTermination()
  }
}