import React from 'react'
import '../sideBar/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faArrowDown, faBook, faPhotoFilm, faShop, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { faEye } from '@fortawesome/free-regular-svg-icons'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebargroups'>
        <div className='sidebargroup'>
          <Link to='/account' className='sidebargroup'>
            <img src="./assert/image/user/raj.jpg" alt="" className='currentuserimg' />
            <span to='/account' className='currentusername'>Pratheesh</span>
          </Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faUsers} />
          <Link to='/friend' className='subtitle'>Friends</Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faAdd} />
          <Link to='/add' className='subtitle'>Add Friends</Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faUserGroup} />
          <Link to='/groups' className='subtitle'>Groups</Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faShop} />
          <Link to='/marketplace' className='subtitle'>MarketPlace</Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faEye} />
          <Link to='/watch' className='subtitle'>Watch</Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faBook} />
          <Link to='/pages' className='subtitle'>Pages</Link>
        </div>
        <div className='sidebargroup'>
          <FontAwesomeIcon icon={faPhotoFilm} />
          <Link to='/memories' className='subtitle'>Memories</Link>
        </div>
        <hr className='hr'></hr>
        <div className='sidebargroup'>
        <FontAwesomeIcon icon={faArrowDown} />
          <button>Click For More</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar