import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { numFormatter } from "../../Pages/trending/Trending.utils";
import { since } from "../../Pages/Search/Search.utils";
import { withRouter } from "react-router-dom";
import "./videoCardStyle.css";

const API_KEY = "AIzaSyAmUsE9HYKwh5dpqTo3xkjJ3yKPC0qFFiU"
const VideoCard = ({ data, history, hor }) => {
  const { snippet } = data
  const id = data.id.videoId ? data.id.videoId : data.id
  const {
    title,
    thumbnails,
    channelTitle,
    description,
    publishedAt, } = snippet
  const [statistics, setstatistics] = useState([])
  useEffect(() => {
    axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=statistics`
    )
      .then((res) => {
        if (typeof (res.data.items[0]) != 'undefined') {
          setstatistics(res.data.items[0].statistics)
        }
      })
  }, [id])
  const { viewCount } = statistics
  const hundleCardClick = () => {
    if (statistics) {
      history.push({
        pathname: `/watch/${id}`,
        state: {
          data: {
            id,
            title,
            publishedAt,
            statistics

          }
        }
      })
    }

  }
  return (
    statistics && data && <div
      className={hor ? "videoContainer_H" : "videoContainer"}
      onClick={hundleCardClick}
    >
      <img className="thumbnail" src={thumbnails.standard ? thumbnails.standard.url : thumbnails.medium.url} alt={title} />
      <div className={hor ? "videoFooter_H" : "videoFooter"}>
        <p className="videoTitle">{title}</p>
        <div className="channelName">
          <p>{channelTitle}</p>
          <CheckCircleIcon style={{ fontSize: 13, marginLeft: "7px" }} />
        </div>
        <p className="views">{numFormatter(viewCount)} views . il y a {since(publishedAt)}</p>
        {
          hor ? <p className="description">{description}</p> : null
        }
      </div>
    </div>
  );
};
export default withRouter(VideoCard);
