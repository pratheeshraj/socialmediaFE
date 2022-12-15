import React from 'react'
import '../friends/Friends.css'
import Footer from '../../../components/footer/Footer'
import Top from '../../../components/top/Top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { User } from '../../../data'
import Myfriends from '../../../components/myfriends/Myfriends'
const Friends = () => {
  return (
    <>
      <Top />
      <div className='mainDiv'>
        <div className='friends'>
          <div className='friendstop'>
            <h3 className='friendstitle'>All Friends</h3>
            <div className='topSearch'>
              <input type="search" placeholder='Search' />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className='friendmiddle'>
            <div className='friendsgroups'>
            {
              User.map((user)=>(
<Myfriends key={user.id} user={user}/>
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

export default Friends