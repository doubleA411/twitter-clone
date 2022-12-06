import React from 'react'
import './Trending.css'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function Trending({
    title,
    place,
    tweets
}) {
  return (
    <div className='trending'>
        <div className="trendingL">
            <p>Trending in {place}</p>
            <h3>#{title}</h3>
            <p>{tweets} Tweets</p>
        </div>
        <div className="trendingR">
            <MoreHorizOutlinedIcon />
        </div>
    </div>
  )
}

export default Trending