import React from 'react'
import  MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import Notifications from '@material-ui/icons/Notifications'
import './header.css'
import { Avatar } from '@material-ui/core';

const Header = () => {
    return(
    <div className = 'header'>
        <div className = 'header-right'>
            <MenuIcon/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg' alt="youtube Icon"/>
        </div>
        <div className="header-input">
            <input placeHolder='Search' type="text" name='search'/>
            <button className='header-input-button' type='submit'><SearchIcon className="search-icon"/></button>
            
        </div>
        <div className="header-left">
            <VideoCallIcon className='right-icons'/>
            <AppsIcon className='right-icons'/>
            <Notifications className='right-icons'/>
            <Avatar alt="" src=""/>
        </div>
    </div>
    )
}
export default Header;