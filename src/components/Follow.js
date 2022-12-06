import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar, Button } from '@mui/material'
import React from 'react'
import './Follow.css'

function Follow() {
    return (
        <div className='follow_widget'>
            <div className="followBody">
                <Avatar className='avatar'/>
                <div className="followL">
                    <h3>AWS Nonprofits<span className='icon'> <VerifiedIcon/></span></h3>
                    <p>@AWS_Nonprofit</p>
                </div>
            </div>
            <div className="followR">
                <Button className='follow_btn'>Follow</Button>
            </div>

        </div>


    )
}

export default Follow