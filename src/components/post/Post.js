import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import '../post/Post.css'
import { User } from '../../data'

const Post = ({ post }) => {


  const [like, setlike] = useState(post.like)
  const [isliked, setliked] = useState(true)

  const likeHandler = () => {
    setlike(isliked ? like + 1 : like - 1);
    setliked(!isliked)
  }

  return (
    <div className='post'>
      <div className='postgroups'>
        <div className='postgroup'>
          <div className='postcardheader'>
            <div className='postcardheaderleft'>
              <img src={User.filter((user) => user.id === post?.userId)[0].profileimg} alt="" className='postuserimg' />
              <div className='postinfo'>
                <span className='postuserName'>{User.filter((user) => user.id === post?.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
              </div>
            </div>
            <div className='postcardheaderright'>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className='postcardbody'>
            <p className='postText'>{post?.description}</p>
            <img src={post?.image} alt="" className='postimg' />
          </div>
          <div className='postcardfooter'>
            <div className='postcardfooterleft'>
              {isliked ? (<>
                <img className='posticonsimg' alt='' src='./assert/image/user/thumb-up.png' onClick={likeHandler}></img>
                <img className='posticonsimg' alt='' src='./assert/image/user/heart.png' onClick={likeHandler}></img></>
              ) : (<>
                <img className='posticonsimg' alt='' src='./assert/image/user/dislike.png' onClick={likeHandler}></img>
                <img className='posticonsimg' alt='' src='./assert/image/user/heart12.png' onClick={likeHandler}></img>
              </>)}
              <span className='postcounter'>{like} people like it</span>
            </div>
            <div className='postcardfooterright'>
              <span className='postcommends'>{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post