import React from 'react'

const Oonlinefriends = ({user}) => {
  return (
    <div className='onlinegroup'>
    <div className='onlinegroupsleft'>
        <img src={`../${user.profileimg}`} className='onlineuserimg' alt={user.username} />
        <div className='onlinebadge'></div>
    </div>
    <div className='onlinegroupright'>
        <span className='onlineusername'>{user.username}</span>
    </div>
</div>
  )
}

export default Oonlinefriends