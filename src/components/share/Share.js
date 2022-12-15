import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { faLocation, faPhotoFilm, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../share/Share.css'
const Share = () => {
  return (
    <div className='share'>
      <div className='sharegroups'>
        <div className='sharegroup'>
          <div className='sharegroupleft'>
            <img src="./assert/image/user/raj.jpg" alt="" />
          </div>
          <div className='sharegroupright'>
            <input type="text" placeholder='What do you think about Pratheesh ?' />
          </div>
        </div>
        <div className='sharegroup'>
          <div className='sharegroupicons'>
            <div className='sharegroupicon'>
              <FontAwesomeIcon icon={faPhotoFilm} />
              <span className='icontitle'> photo or vedio</span>
            </div>
            <div className='sharegroupicon'>
              <FontAwesomeIcon icon={faTag} />
              <span className='icontitle'>Tags</span>
            </div>
            <div className='sharegroupicon'>
              <FontAwesomeIcon icon={faLocation} />
              <span className='icontitle'>Location</span>
            </div>
            <div className='sharegroupicon'>
              <FontAwesomeIcon icon={faSmile} />
              <span className='icontitle'>Feelings</span>
            </div>
          </div>
          <div className='sharegroupsharebtn'>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share