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
                <Follow displayName={"Marques Brownlee"} username={"MKBHD"} avatar={"https://pbs.twimg.com/profile_images/1468001914302390278/B_Xv_8gu_400x400.jpg"} />
                <Follow displayName={"Carl Pei"} username={"getpeid"} avatar={"https://pbs.twimg.com/profile_images/1536984993947328512/WVxyDsH6_400x400.jpg"} />
                <Follow displayName={"Tim Cook"} username={'tim_cook'} avatar={"https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"} />
                <p>Show more</p>
            </div>
        </div>
    )
}

export default Widgets