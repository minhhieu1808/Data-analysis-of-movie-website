# Use the official PostgreSQL image as the base image
FROM postgres:latest

# Set the PostgreSQL environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=snowplow
ENV POSTGRES_DB=igludb

# Copy custom initialization scripts to the container
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
