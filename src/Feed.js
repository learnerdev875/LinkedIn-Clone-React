import React,{useEffect, useState} from 'react'
import './Feed.css'
import Avatar from '@mui/material/Avatar';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import FeedOptions from './FeedOptions';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase/compat/app';
import {useGetUser} from './useGetUser';
import FlipMove from 'react-flip-move';
import UploadImage from './UploadImage';
function Feed() {
    const[postInput, setPostInput] = useState('');
    const [posts,setPosts] = useState([]);
    const user = useGetUser()

   useEffect(()=>{

    db.collection('status').orderBy('timestamp','desc').onSnapshot(snapshot => 
        setPosts(snapshot.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))))
   },[])
    const submitPost = e =>{
        e.preventDefault();
       db.collection('status').add({
        name:user.displayName,
        message:postInput,
        imageUrl:user.photoURL || '',
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        description:user.email
       })
       setPostInput('')
    }
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input"> 
                <Avatar className='feed__inputIcon' src={user.photoURL}>{user?.email[0]}</Avatar>
                <form onSubmit={submitPost}>
                    <input type='text' value={postInput} placeholder='Start a post'
                    onChange={e => setPostInput(e.target.value)}/>
                </form>
            </div>
            <div className="feed__inputOptions">
                {/* <FeedOptions Icon = {InsertPhotoIcon} title='Photo' color='rgb(140, 206, 228)'/> */}
                <UploadImage/>
                <FeedOptions Icon = {SmartDisplayIcon} title='Video' color='rgb(140, 228, 155)'/>
                <FeedOptions Icon = {EventIcon} title='Event' color='rgb(208, 157, 94)'/>
                <FeedOptions Icon = {ArticleIcon} title='Write post' color='rgb(239, 119, 119)'/>
            </div>

        </div>
            <FlipMove>
            {posts.map(({id,data:{name,description,message,imageUrl}}) => <Post  key={id}  message={message} name={name} description={description} imageUrl={imageUrl}/>)}
            </FlipMove>
    </div>
  )
}

export default Feed