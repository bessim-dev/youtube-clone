import { Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./videoSection";
const VideoCard = ({
  history,
  id,
  title,
  views,
  timeStamp,
  channel,
  image,
  description,
  publishedAt,
  orgViews,
  dislikeCount,
  likeCount
}) => {
  const videoData = {
    id : {id},
    title: {title},
    views: {orgViews},
    publishedAt:{publishedAt},
    dislikeCount : {dislikeCount},
    likeCount : {likeCount},
  }
  return (
    <Grid
      container
      justify="flex-start"
      direction="row"
      alignItems="flex-start"
      style={{cursor: "pointer"}}
      onClick = {() => history.push({
        pathname: `/watch/${id}`,
        state: {
          data : videoData
        }
      })}
    >
      <Grid item sm={3}>
        <div className="videoCardThumnail__container">
          <img className="videoCard__thumbnail" src={image} alt={title} />
        </div> 
      </Grid>
      <Grid item sm={6}>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
        >
          <h4 className="title">{title}</h4>
          <div className="videoCard__info">
            <p> {channel} </p>
            <CheckCircleIcon style={{fontSize: '13px'}}/>
            <p className='views'>{views} vues . il y a {timeStamp}</p>
          </div>
          <p className="description">{description}</p>
        </Grid>
      </Grid>
      <Grid item sm={3}/>
    </Grid>
  );
};
export default withRouter(VideoCard);
