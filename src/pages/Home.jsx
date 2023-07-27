import React from 'react';
import { Link } from 'react-router-dom';
import { NewsPosts } from '../data/NewsPosts';
import '../styles/home.css';

import QuoteGenerator from '../components/QuoteGenerator';

const Home = () => {
  return (
    <div>
      <ul className='grid-container'>
        {NewsPosts.map((post, index) => (
          <li
            key={index}
            className={post.priority === 1 ? 'big-item' : 'small-item'}
          >
            <h1>{post.title}</h1>
            <Link to={`post/${post.id}`}>
              <img
                className={post.priority === 1 ? 'big-image' : 'small-image'}
                src={post.image}
                alt="image"
              />
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
      <QuoteGenerator/>
    </div>
  );
};

export default Home;
