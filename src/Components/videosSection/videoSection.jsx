import React from "react";
import "./videoSection.css";
import VideoCard from "./videoCard";
const VideoSection = () => {
  return (
    <div className="videoSection">
      <h1>here is the videoSection</h1>
      <VideoCard title views timeStamp ChannelImage channel image />
    </div>
  );
};
export default VideoSection;
