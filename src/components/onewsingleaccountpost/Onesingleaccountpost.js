import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { User } from '../../data'
const Onesingleaccountpost = ({post}) => {
    const [like, setlike] =useState(post.like)
    const [isliked, setliked] = useState(true)
  
    const likeHandler = () => {
      setlike(isliked ? like + 1 : like - 1);
      setliked(!isliked)
    }
  return (
    <div className='nsap'>
      <div className='nsapgroups'>
        <div className='nsapgroup'>
          <div className='nsapcardheader'>
            <div className='nsapcardheaderleft'>
              <img src={`../${User.filter((user) => user.id === post?.userId)[0].profileimg}`} alt="" className='nsapuserimg' />
              <div className='nsapinfo'>
                <span className='nsapuserName'>{User.filter((user) => user.id === post?.userId)[0].username}</span>
                <span className='nsapDate'>{post.date}</span>
              </div>
            </div>
            <div className='nsapcardheaderright'>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className='nsapcardbody'>
            <p className='nsapText'>{post?.description}</p>
            <img src={`../${post?.image}`} alt="" className='nsapimg' />
          </div>
          <div className='nsapcardfooter'>
            <div className='nsapcardfooterleft'>
              {isliked ? (<>
                <img className='nsapiconsimg' alt='' src='../assert/image/user/thumb-up.png' onClick={likeHandler}></img>
                <img className='nsapiconsimg' alt='' src='../assert/image/user/heart.png' onClick={likeHandler}></img></>
              ) : (<>
                <img className='nsapiconsimg' alt='' src='../assert/image/user/dislike.png' onClick={likeHandler}></img>
                <img className='pnsapiconsimg' alt='' src='../assert/image/user/heart12.png' onClick={likeHandler}></img>
              </>)}
              <span className='nsapcounter'>{like} people like it</span>
            </div>
            <div className='nsapcardfooterright'>
              <span className='nsapcommends'>{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onesingleaccountpost