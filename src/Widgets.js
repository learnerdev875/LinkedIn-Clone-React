import React,{useState,useEffect} from 'react'
import './Widgets.css'
import { InfoSharp } from '@mui/icons-material'
import {db} from './firebase';
import { Avatar } from '@mui/material';
import { useGetUser } from './useGetUser';
function Widgets() {

  const [users,setUsers] = useState([])
  const loggedInUser = useGetUser();

 useEffect(()=>{

  db.collection('users').limit(3).onSnapshot(snapshot => 
    setUsers(snapshot.docs.map(doc =>(
        {
            id:doc.id,
            data:doc.data()
        }
    ))))
 },[])
  return (
    <div className='widgets'>
        <div className="widgets__header">
          <h2>Add to your feed</h2>
          <InfoSharp/>
        </div>
        <div className="widgets__people">
          {users.map(user =>{
            if(user.data.email !== loggedInUser.email) {
              
              return (
                <div className='peopleInfo' key={user.id}>
                    <div className="peopleInfo__header">
                      <Avatar src={user.data.photoURL} className='peopleInfo__avatar'/>
                        <div className="peopleInfo__headerRight">
                          <h3>{user.data.name}</h3>
                          <h4>{user.data.email}</h4>
                        </div>
                    </div>
                    <button> + Follow</button>
                </div>
              )
            }
          })}
          <span>View all recommendations &rarr;</span>
        </div>
    </div>
  )
}

export default Widgets