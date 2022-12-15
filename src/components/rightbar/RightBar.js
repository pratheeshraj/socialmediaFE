import React from 'react'
import { User } from '../../data'
import Onlinefriends from '../onlinefriends/Onlinefriends'
import '../rightbar/rightBar.css'
const RightBar = () => {
  return (
    <div className='rightbar'>
      <h4 className='online'>Online friends</h4>
      <div className='onlinegroups'>
      {
        User.map((user)=>(
<Onlinefriends user={user} key={user.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default RightBar