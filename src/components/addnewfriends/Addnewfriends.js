import React from 'react'
import { Link } from 'react-router-dom'

const Addnewfriends = ({user}) => {
  return (
    <Link to='/user/:id'>
    <div className='friendsgroup'>
     <img src={user.profileimg} alt="" className='friendsimg' />
    <p className='friends Name'>{user.username}</p> 
    <button>Add Friend</button>
    </div>
  
  </Link>
  )
}

export default Addnewfriends