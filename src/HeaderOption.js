import React from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';
import {useGetUser} from './useGetUser'
function HeaderOption({avatar,name,Icon,click}) {
  const user = useGetUser()
  return (
    <div  className='headerOption' onClick={click}>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <Avatar src={user?.photoURL} className='headerOption__avatar'>{user?.email[0]}</Avatar>}
        <h3 className='headerOption__title'>{name}</h3>
    </div>
  )
}

export default HeaderOption