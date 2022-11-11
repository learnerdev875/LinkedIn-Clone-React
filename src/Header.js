import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from './linkedin.png'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import {useDispatch} from 'react-redux';
import {logout} from './features/userSlice'
import {auth} from './firebase'

function Header() {

  const dispatch = useDispatch()
  const logOut = () =>{
    dispatch(logout())
    auth.signOut()

  }
  return (
    <div className='header'>
        <div className="header__left">
           <img src={logo} alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" name="" id=""  placeholder='Search'/>
            </div>

        </div>
        <div className="header__right">
            <HeaderOption name='home' Icon= {HomeIcon}/>
            <HeaderOption name='my networks' Icon= {PeopleIcon}/>
            <HeaderOption name='jobs' Icon= {WorkIcon}/>
            <HeaderOption name='messaging' Icon= {LocalPostOfficeIcon}/>
            <HeaderOption name='notifications' Icon= {NotificationsIcon}/>
            <HeaderOption avatar = {true} name='me' click={logOut}/>
        </div>
    </div>
  )
}

export default Header