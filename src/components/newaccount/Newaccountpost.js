import React from 'react'
import Share from '../share/Share'
import { posts } from '../../data'
import NewSingleAccPost from '../newsingleaccpost/NewSingleAccPost'
const Newaccountpost = () => {
  return (
    <div className='NApost'>
        <div className='naSharediv'>
            <Share/>
            {
    posts.map((post)=>(
      <NewSingleAccPost post={post} key={post.id}/>
    ))
   }
        </div>
    </div>
  )
}

export default Newaccountpost