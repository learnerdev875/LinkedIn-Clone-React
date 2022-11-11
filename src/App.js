import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import {useDispatch, useSelector} from 'react-redux'
import Login from './Login';
import {selectUser} from './features/userSlice'
import { auth } from './firebase';
import {login,logout} from './features/userSlice'
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoURL:userAuth.photoURL
        }))
      }
      else{
        //user is logged out
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>
      {user? (

      <div className="app__body">
        <SideBar/>
        <Feed/>
        <Widgets/>
      </div>
      ):<Login/>}
    </div>
  );
}

export default App;
