import React,{useState} from 'react'
import './Login.css'
import {auth,db} from './firebase'
import { useDispatch } from 'react-redux'
import {login} from './features/userSlice'

function Login() {
    const [userInfo,setUserInfo] = useState({
        fullName:'',
        email:'',
        password:'',
        imageUrl:''
    })
    const dispatch = useDispatch();
    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(userInfo.email,userInfo.password)
        .then(userAuth =>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL
            }))
        })
        .catch(error => alert(error.message))

    }
    const register = () =>{
        if(!userInfo.fullName){
            return alert('Please provide  your full name')
        }

        auth.createUserWithEmailAndPassword(userInfo.email,userInfo.password)
        .then(userAuth => {
            userAuth.user.updateProfile({
                displayName:userInfo.fullName,
                photoURL:userInfo.imageUrl
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: userInfo.fullName,
                    photoURL:userInfo.imageUrl
                }))
                db.collection('users').add({
                    name:userInfo.fullName,
                    photoURL:userInfo.imageUrl,
                    email:userInfo.email
                })
            })
        })
        .catch(error => alert(error.message))

    }
    const inputUserInfo = (e) =>{
        setUserInfo(prev =>(
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }

  return (
    <div className='login'>
        <img src="https://www.onrec.com/sites/onrec/directory/files/Linkedin-Logo.png" alt="" />
        <form className='login__form' onSubmit={loginToApp}>
            <input type="text" placeholder='Full Name (required if registering)'name='fullName' value={userInfo.fullName} onChange={inputUserInfo}/>
            <input type="text" placeholder='Profile pic URL (optional)' name='imageUrl' value={userInfo.imageUrl} onChange={inputUserInfo}/>
            <input type="email" placeholder='Email' name='email' value={userInfo.emai} onChange={inputUserInfo}/>
            <input type="password" placeholder='Password' name='password' value={userInfo.password} onChange={inputUserInfo}/>
            <input type="submit" value="Sign In" />
        </form>
        <div className="login__registration">
            <p>Not a member? <span className='registration__link' onClick={register}>Register Now</span></p>
        </div>
    </div>
  )
}

export default Login