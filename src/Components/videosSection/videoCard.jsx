import { Grid } from "@material-ui/core";
import React from "react";
import "./videoSection";
const VideoCard = ({
  title,
  views,
  timeStamp,
  channel,
  image,
  description,
}) => {
  return (
    <Grid
      container
      justify="flex-start"
      direction="row"
      alignItems="flex-start"
    >
      <Grid item sm={3}>
        <img className="videoCard__thumbnail" src={image} alt={title} />
      </Grid>
      <Grid sm={9}>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
        >
          <div className="videoCard__info">
            <h4 className="title">{title}</h4>
            
            <p className="channels"></p>
            <p> 
            {channel} . {views} vues . il y a {timeStamp}
            </p>
            <p className="description">{description}</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default VideoCard;
