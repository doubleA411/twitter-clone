import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react'
import './TweetBox.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { db } from '../firebase';
function TweetBox() {
    const [tweetText, setTweetText] = useState("");
    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Aakash",
            username: "doublea.in",
            verified: true,
            avatar: "https://pbs.twimg.com/profile_images/1489633281368674307/ea30DSAr_400x400.jpg",
            text: tweetText,
            image: "",
        })

        setTweetText("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1489633281368674307/ea30DSAr_400x400.jpg' />
                    <input
                        type={"text"}
                        placeholder="What's happening?"
                        value={tweetText}
                        onChange={(e) => setTweetText(e.target.value)}
                    />
                </div>
                <div className='tweetOptions'>
                    <div className='tweetOptionsL'>
                        <InsertPhotoOutlinedIcon />
                        <GifBoxOutlinedIcon />
                        <SentimentSatisfiedOutlinedIcon />
                        <CalendarTodayOutlinedIcon />
                    </div>
                    <div className='tweetOptionsR'>

                        <Button type='submit' onClick={sendTweet} className='tweetButton'>Tweet</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TweetBox