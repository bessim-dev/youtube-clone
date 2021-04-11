import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './watch.css'
import { RelatedVideos } from './RelatedVideos';
import { VideoFrame } from "./VideoFrame"


const Watch = ({ location }) => {
    const { id, title, publishedAt, statistics } = location.state.data
    const pubDate = new Date(publishedAt)

    const date = pubDate.getDate();
    const month = pubDate.getMonth();
    const year = pubDate.getFullYear();
    const FrameData = {
        title, date, month, year, id, statistics
    }
    useEffect(() => {
        document.title = title;
    })
    return (
        <div className="watchPageContainer">
            {id && <>
                <div className="videoFrameContainer" >
                    <VideoFrame FrameData={FrameData} />
                </div>
                <div className="trendingVideosContainer">
                    <RelatedVideos id={id} />
                </div></>}
        </div >
    )
}
export default withRouter(Watch)