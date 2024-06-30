import { Grid } from "@mui/material";
import MediaItem from "./MediaItem";

const MediaGrid = ({ medias, mediaType, isSearched }) => {
  return (
    <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
      {medias.map((media, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <MediaItem media={media} mediaType={mediaType} isSearched={isSearched}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaGrid;