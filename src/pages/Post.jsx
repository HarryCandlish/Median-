import React from 'react'
import {useParams} from 'react-router-dom'

import {NewsPosts} from '../data/NewsPosts'

const Post = () => {
    const {postId} = useParams();
    const post = NewsPosts.find((post) => post.id === parseInt(postId));

    if (!post) {
        return ( 
        <div>Post Not Found</div>
        )
    }

  return (
    <div>
        <h1>{post.title}</h1>
        <img src={post.image} alt='alt'/>
        <p>{post.content}</p>
    </div>
  )
}

export default Post