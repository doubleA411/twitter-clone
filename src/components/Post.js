import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';


function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}<span className='post_headerTag'> {verified && <VerifiedIcon className='badge'/>}   @{username}</span>
                        </h3>
                    </div>
                    <div className="post_description">
                        <p>{text}</p>
                    </div>
                </div>
                {image.length > 0 && <img src={image} alt="" />}
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <IosShareIcon fontSize='small'/>
                </div>
            </div>
        </div>
    )
}

export default Post