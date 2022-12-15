import React from 'react'
import { posts } from '../../data'
import Onesingleaccountpost from '../onewsingleaccountpost/Onesingleaccountpost'

const Onewaccountpost = () => {
  return (
    <div className='NApost'>
    <div className='naSharediv'>
      
        {
posts.map((post)=>(
  <Onesingleaccountpost post={post} key={post.id}/>
))
}
    </div>
</div>
  )
}

export default Onewaccountpost