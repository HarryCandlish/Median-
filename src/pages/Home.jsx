import React from 'react'

import {NewsPosts} from '../data/NewsPosts'
import '../styles/home.css'

const Home = () => {
  return (
    <div>
      <ul>{NewsPosts.map((post, index) => {
        if (post.priority === 1) {
        return ( 
             <li key={index}>
              <h1 className='pri-one'>{post.title} </h1>
                <img src={post.image} alt="image" />
              <p>{post.description}</p>
          </li>
      )} else {
        return (
          <li key={index}>
          <h1 className='pri-two'>{post.title} </h1>
            <img src={post.image} alt="imagetwo" />
          <p>{post.description}</p>
      </li>
        )
      }})}
      </ul>
    </div>
  )
}

export default Home
