import React, { useEffect, useState } from "react";
import "./trending.css";
import axios from "axios";
import VideoCard from "../../Components/videoCard/videoCard";
const API_KEY = "AIzaSyAmUsE9HYKwh5dpqTo3xkjJ3yKPC0qFFiU"
// const API_KEY2 = "AIzaSyBe1VQSCIy9ABdy1jOI_fGAQ5N7SuwzeiU";

export const Trending = () => {
  const [data, setData] = useState([])
  console.log("dataTrending", data)
  useEffect(() => {

    document.title = "(2) Trending - YouTube";
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=TN&key=${API_KEY}`
      ).then(res => setData(res.data.items))
  }, [])
  return (
    <div className='trending'>
      {data && data.map(item => (
        <VideoCard data={item} hor />
      ))
      }
    </div>
  )

}
