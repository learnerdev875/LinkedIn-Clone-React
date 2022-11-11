import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react'
import './Post.css'
import FeedOptions from './FeedOptions'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import {db} from './firebase';

const Post = forwardRef(({name,imageUrl,description,message},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={imageUrl}>{name[0]}</Avatar>
            <div className="post__author">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <FeedOptions Icon={ThumbUpOffAltIcon} title='Like' color='grey'/>
            <FeedOptions Icon={ChatBubbleOutlineIcon} title='Comment' color='grey'/>
            <FeedOptions Icon={ShareIcon} title='Repost' color='grey'/>
            <FeedOptions Icon={SendIcon} title='Send' color='grey'/>
        </div>
    </div>
  )
})

export default Post