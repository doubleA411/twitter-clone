import React from 'react'
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Trending from './Trending';
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon />
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widget_container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed className="embed" tweetId='1599840937298968576' />
                <Trending title={"Thalapathy67"} place={"Tamilnadu"} tweets="54.8K"/>
                <Trending title={"StocksToBuy"} place="India" tweets={"1,811"}/>
                <Trending title={"WorldCup"} place="Sports" tweets={"68K"}/>
            </div>
            <div className="follow_container">
                <h2>Who to follow</h2>
            </div>
        </div>
    )
}

export default Widgets