import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { User } from '../../data'
import Addnewfriends from '../addnewfriends/Addnewfriends'
import Footer from '../footer/Footer'
import Myfriends from '../myfriends/Myfriends'
import '../newfriends/newfriends.css'
import Top from '../top/Top'
const Newfriends = () => {
  return (
    <>
    <Top />
    <div className='mainDiv'>
      <div className='friends'>
        <div className='friendstop'>
          <h3 className='friendstitle'>People may you know</h3>
          <div className='topSearch'>
            <input type="search" placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className='friendmiddle'>
          <div className='friendsgroups'>
          {
            User.map((user)=>(
<Addnewfriends key={user.id} user={user}/>
            ))
          }
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Newfriends