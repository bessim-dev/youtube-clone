import { Grid } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import './watch.css'
import VideoCard from '../videosSection/videoCard';
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
const relatedVid = () => {

}
const Watch = ({ location, videoData }) => {
    const { id, title, publishedAt, views, likeCount, dislikeCount } = location.state.data
    const pubDate = new Date(publishedAt.publishedAt)
    console.log(videoData)
    const date = pubDate.getDate();
    const month = pubDate.getMonth();
    const year = pubDate.getFullYear();
    if (!id.id) return <div>Loading</div>
    const videoSrc = `https://www.youtube.com/embed/${id.id}`
    return (
        <Grid container direction='row' style={{ backgroundColor: '#F9F9F9' }}>
            <Grid item xs={6}>
                <div className='video'>
                    <iframe frameBorder="0" height='100%' width='100%' title={title.title} src={videoSrc} />
                </div>
                <span className="VideoTitle">{title.title}</span>
                <div className="VideoDescription">
                    <p>{views.orgViews} vues . {date} {month} {year}</p>
                    <span className="likes">
                        <ThumbUpAltIcon style={{ marginRight: '0.5rem' }} />
                        <p>{numFormatter(likeCount.likeCount)}</p>
                    </span>
                    <span className="dislikes">
                        <ThumbDownIcon style={{ marginRight: '0.5rem' }} />
                        <p>{numFormatter(dislikeCount.dislikeCount)}</p>
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
            </Grid>
            <Grid item xs={6}>
                <div>
                    {videoData.map(item => (
                        <VideoCard
                            dislikeCount={item.statistics.dislikeCount}
                            likeCount={item.statistics.likeCount}
                            key={item.id}
                            id={item.id}
                            publishedAt={item.snippet.publishedAt}
                            orgViews={item.statistics.viewCount}
                            title={item.snippet.title}
                            views={numFormatter(item.statistics.viewCount)}
                            channel={item.snippet.channelTitle}
                            image={item.snippet.thumbnails.standard.url}
                            description={item.snippet.description}
                            timeStamp={since(item.snippet.publishedAt)}
                        />
                    ))
                    }
                </div>
            </Grid>
        </Grid >
    )
}
export default withRouter(Watch)