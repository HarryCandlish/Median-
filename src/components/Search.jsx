import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/searchbar.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='seach-bar'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Use Link component to navigate to search results page */}
      <Link to={`/search-results?q=${searchTerm}`}/>
    </div>
  );
};

export default Search;
