import React from 'react'
import prettyMilliseconds from 'pretty-ms'
import VideoCard from "../../Components/videoCard/videoCard";


export const since = (date) => {
    const difference_ms = Date.now() - new Date(date);
    return prettyMilliseconds(difference_ms, { compact: true, verbose: true })
};

export const SearchBody = ({ searchResults }) => {
    return (
        <div style={{ width: '80%', float: 'left' }} >
            {
                searchResults.map(item => (
                    < VideoCard
                        key={item.id.videoId}
                        data={item}
                    />
                ))
            }
        </div >
    )
}
