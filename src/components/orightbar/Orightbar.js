import React from 'react'
import { User } from '../../data'
import Oonlinefriends from '../oonlinefriends/Oonlinefriends'

const Orightbar = () => {
  return (
    <div className='rightbar'>
    <h4 className='online'>Online friends</h4>
    <div className='onlinegroups'>
    {
      User.map((user)=>(
<Oonlinefriends user={user} key={user.id}/>
      ))
    }
    </div>
  </div>
  )
}

export default Orightbar