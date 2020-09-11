import React from 'react'

const SidebarRow = ({selected, title,Icon}) => {
    return(
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className={`sidebarIcon`}/>
            <h2 className='sidebartitle'>{title}</h2>
        </div>
    )
}
export default SidebarRow