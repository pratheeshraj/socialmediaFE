import React from 'react'
import { posts } from '../../data'

import '../news/News.css'
import Post from '../post/Post'
import Share from '../share/Share'
import Story from '../Story/Story'
const News = () => {
  return (
    <div className='news'>
   <Story/>
   <Share/>
   {
    posts.map((post)=>(
      <Post post={post} key={post.id}/>
    ))
   }


    </div>
  )
}

export default News