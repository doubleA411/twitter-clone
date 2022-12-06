import React from 'react'
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Trending from './Trending';
import Follow from './Follow';
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon />
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widget_container">
                <h2>What's happening</h2>
                <div className="embed">
                    <TwitterTweetEmbed tweetId='1599840937298968576' />
                </div>
                <Trending title={"Thalapathy67"} place={"Tamilnadu"} tweets="54.8K" />
                <Trending title={"StocksToBuy"} place="India" tweets={"1,811"} />
                <Trending title={"WorldCup"} place="Sports" tweets={"68K"} />
                <p>Show more</p>
            </div>
            <div className="follow_container">
                <h2>Who to follow</h2>
                <Follow />
                <Follow />
                <Follow />
                <p>Show more</p>
            </div>
        </div>
    )
}

export default Widgets