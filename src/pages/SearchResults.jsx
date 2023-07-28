// SearchResults.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {NewsPosts} from '../data/NewsPosts'; 
import Search from '../components/Search'

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const queryParameter = searchParams.get('q');

  // Filter the data based on the search query
  const filteredData = NewsPosts.filter((item) =>
  item.title?.toLowerCase().includes(queryParameter?.toLowerCase() || '')
  );

  return (
    <div>
    <Search/>
      <h1>Search Results for: {queryParameter}</h1>
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
