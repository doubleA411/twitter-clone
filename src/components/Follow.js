import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar, Button } from '@mui/material'
import React from 'react'
import './Follow.css'

function Follow({
    displayName,
    username,
    avatar
}) {
    return (
        <div className='follow_widget'>
            <div className="followBody">
                <Avatar className='avatar' src={avatar}/>
                <div className="followL">
                    <h3>{displayName}<span className='icon'> <VerifiedIcon/></span></h3>
                    <p>@{username}</p>
                </div>
            </div>
            <div className="followR">
                <Button className='follow_btn'>Follow</Button>
            </div>

        </div>


    )
}

export default Follow