import React from 'react'
import './sidebar.css'
import SidebarRow from './sidebarRow'
import { Home, ExpandMore, History, OndemandVideo, Subscriptions, ThumbUp, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={Home} title='Home' link='/' />
            <SidebarRow Icon={Whatshot} title='Trending' link='/trending' />
            <SidebarRow Icon={Subscriptions} title='Subscription' link='/subscription' />
            <hr />
            <SidebarRow Icon={VideoLibrary} title='Library' link='/library' />
            <SidebarRow Icon={History} title='History' link='/history' />
            <SidebarRow Icon={OndemandVideo} title='Your videos' link='/yourVideos' />
            <SidebarRow Icon={WatchLater} title='Watch later' link='/watchLater' />
            <SidebarRow Icon={ThumbUp} title='Liked videos' link='/likedVideos' />
            <SidebarRow Icon={ExpandMore} title='Show more' link='/showMore' />
            <hr />
        </div>
    )
}

