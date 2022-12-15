import React from 'react'
import '../onlinefriends/Onlinefriends.css'

const Onlinefriends = ({user}) => {
    return (
        <div className='onlinegroup'>
            <div className='onlinegroupsleft'>
                <img src={user.profileimg} className='onlineuserimg' alt={user.username} />
                <div className='onlinebadge'></div>
            </div>
            <div className='onlinegroupright'>
                <span className='onlineusername'>{user.username}</span>
            </div>
        </div>
    )
}

export default Onlinefriends