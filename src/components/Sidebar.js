import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import '../components/Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from '@mui/material/Button';
function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='twitter'/>
      <SidebarOption active text={"Home"} Icon={HomeIcon} />
      <SidebarOption text={"Explore"} Icon={TagOutlinedIcon} />
      <SidebarOption text={"Notifications"} Icon={NotificationsNoneOutlinedIcon} />
      <SidebarOption text={"Messages"} Icon={MailOutlinedIcon} />
      <SidebarOption text={"Bookmark"} Icon={BookmarkBorderOutlinedIcon} />
      <SidebarOption text={"Profile"} Icon={PersonOutlineOutlinedIcon} />
      <SidebarOption text={"More"} Icon={MoreHorizOutlinedIcon} />
      <Button className='sidebarTweet' variant='contained' fullWidth>Tweet</Button>


    </div>
  )
}

export default Sidebar