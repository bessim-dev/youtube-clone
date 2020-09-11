import React from 'react'
import './sidebar.css'
import SidebarRow from './sidebarRow'
import { Home,ExpandMore, History, OndemandVideo, Subscriptions, ThumbUp, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons'
const Sidebar = () =>  {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={Home} title='Home'/>
            <SidebarRow Icon={Whatshot} title='Trending'/>
            <SidebarRow Icon={Subscriptions} title='Subscription'/>
            <hr/>
            <SidebarRow Icon={VideoLibrary} title='Library'/>
            <SidebarRow Icon={History} title='History'/>
            <SidebarRow Icon={OndemandVideo} title='Your videos'/>
            <SidebarRow Icon={WatchLater} title='Watch later'/>
            <SidebarRow Icon={ThumbUp}title='Liked videos'/>
            <SidebarRow Icon={ExpandMore} title='Show more'/>
            <hr/>
        </div>
    )
}
export default Sidebar;
