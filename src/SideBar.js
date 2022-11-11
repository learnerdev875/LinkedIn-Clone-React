import React from 'react'
import './SideBar.css'
import Avatar from '@mui/material/Avatar'
import background from './Images/background.jpg'
import {useGetUser} from './useGetUser'
function SideBar() {

    const user = useGetUser()
    const recentItem = (topic) =>{
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={background} alt="sorry" />
            <Avatar src={user.photoURL} className='sidebar__avatar'>{user?.email[0]}</Avatar>
            <h3>{user.displayName}</h3>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">1,365</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('programming')}
            {recentItem('reactjs')}
            {recentItem('nodejs')}
            {recentItem('redux')}
            {recentItem('webdevelopment')}
        </div>
    </div>
  )
}

export default SideBar