import React, { useEffect, useState } from 'react'
import axios from "axios";
import VideoCard from '../../Components/videoCard/videoCard';
const API_KEY = "AIzaSyAmUsE9HYKwh5dpqTo3xkjJ3yKPC0qFFiU"
export const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        document.title = '(2) YouTube';
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=12&key=${API_KEY}`
            ).then(res => setData(res.data.items))
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "Grid", gridRowGap: "20px", gridColumnGap: "5px", gridTemplateColumns: "1fr 1fr 1fr 1fr", justifyItems: "end" }}>
                {
                    data && data.map((item) => <VideoCard data={item} />)
                }
            </div>
        </div>

    )
}
