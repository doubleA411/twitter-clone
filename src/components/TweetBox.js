import { Avatar, Button } from '@mui/material';
import React from 'react'
import './TweetBox.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar />
                    <input type={"text"} placeholder="What's happening?" />
                </div>
                <div className='tweetOptions'>
                    <div className='tweetOptionsL'>
                        <InsertPhotoOutlinedIcon />
                        <GifBoxOutlinedIcon />
                        <SentimentSatisfiedOutlinedIcon />
                        <CalendarTodayOutlinedIcon />
                    </div>
                    <div className='tweetOptionsR'>
                        <Button className='tweetButton'>Tweet</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TweetBox