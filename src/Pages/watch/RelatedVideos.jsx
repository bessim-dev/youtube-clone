import React, { useEffect, useState } from 'react'
import axios from "axios";
import VideoCard from '../../Components/videoCard/videoCard';
const API_KEY = "AIzaSyAmUsE9HYKwh5dpqTo3xkjJ3yKPC0qFFiU"
export const RelatedVideos = ({ id }) => {
    const [relatedVideosData, setRelatedVideosData] = useState([])
    useEffect(() => {
        axios
            .get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: "snippet",
                    maxResults: 8,
                    relatedToVideoId: id,

                    type: "video",
                    key: API_KEY,
                },
            })
            .then((res) => setRelatedVideosData(res.data.items));
    }, [id])
    return (
        <>
            {relatedVideosData.length && relatedVideosData.map(item => {
                return (
                    <>
                        {
                            item.snippet && <VideoCard data={item} />
                        }
                    </>
                )
            })
            }
        </>
    )
}
