import React from "react";
import VideoCard from "../videosSection/videoCard";
import "./trending.css";
import prettyMilliseconds from 'pretty-ms'
const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};
const since = (date) => {
  const difference_ms = Date.now() - new Date(date);
  return prettyMilliseconds(difference_ms,{compact: true,verbose: true})
};
export default function trending({data}) {
  console.log(data)
  return (
    <div className='trending'>
    {data.map(item => (
    <VideoCard
    dislikeCount = {item.statistics.dislikeCount}
    likeCount = {item.statistics.likeCount}
    key = {item.id}
    id = {item.id}
    publishedAt={item.snippet.publishedAt}
    orgViews = {item.statistics.viewCount}
    title = {item.snippet.title}
    views = {numFormatter(item.statistics.viewCount)}
    channel = {item.snippet.channelTitle}
    image = {item.snippet.thumbnails.standard.url}
    description = {item.snippet.description}
    timeStamp = {since(item.snippet.publishedAt)}
    />
    ))
  }
  </div>
    )

}
