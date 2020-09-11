import React,{useState} from 'react'
import  MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import Notifications from '@material-ui/icons/Notifications'
import './header.css'
import { Avatar } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Header = ({history}) => {
    const [searchTerm , setSearchTerm] = useState("")
    const hundleSubmit = () => {
        history.push(`/search/${searchTerm}`)
    }
    const hundleChange =(e) => {
        setSearchTerm(e.target.value)
    }
    const goHome = () => {
        history.push('/')
    }
    return(
    <div className = 'header'>
        <div className = 'header-right'>
            <MenuIcon/>
            <img onClick={goHome} src='https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg' alt="youtube Icon"/>
        </div>
        <div className="header-input">
            <input placeholder='Search' value={searchTerm} type="text" name='search' onChange={hundleChange}/>
            <button onClick={hundleSubmit} className='header-input-button' type='submit'><SearchIcon className="search-icon"/></button>
            
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
export default withRouter(Header);