import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import { numFormatter } from '../trending/Trending.utils';

function numberWithSpace(x) {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
export const VideoFrame = ({ FrameData }) => {
    const { title, date, month, year, id, statistics } = FrameData
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
    const { likeCount, dislikeCount, viewCount } = statistics
    const videoSrc = `https://www.youtube.com/embed/${id}/?autoplay=1`

    const monthName = months[month]
    return (
        <>
            <div className='video'>
                <iframe frameBorder="0" height='100%' width='100%' title={title} src={videoSrc} />
            </div>
            <span className="VideoTitle">{title}</span>
            <div className="VideoDescription">
                <p>{numberWithSpace(viewCount)} vues . {date} {monthName} {year}</p>
                <span className="likes">
                    <ThumbUpAltIcon style={{ marginRight: '0.5rem' }} />
                    <p>{numFormatter(likeCount)}</p>
                </span>
                <span className="dislikes">
                    <ThumbDownIcon style={{ marginRight: '0.5rem' }} />
                    <p>{numFormatter(dislikeCount)}</p>
                </span>
                <span className='share'>
                    <ReplyIcon />
                    <p>Share</p>
                </span>
                <span className="save">
                    <SaveAltIcon style={{ marginRight: '0.5rem' }} />
                    <p>Save</p>
                </span>
                <span>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </span>

            </div>
            <hr />
        </>
    )
}

