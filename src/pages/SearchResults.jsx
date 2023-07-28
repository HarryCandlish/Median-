import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {NewsPosts} from '../data/NewsPosts'; // Import the data from the data.js file

import QuoteGenerator from '../components/QuoteGenerator';
import Search from '../components/Search';


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const queryParameter = searchParams.get('q');

  // State variable for sorting option
  const [sortingOption, setSortingOption] = useState('relevance');

  // Filter the data based on the search query (same filtering logic as before)
  const filteredData = NewsPosts.filter((item) =>
    item.title?.toLowerCase().includes(queryParameter?.toLowerCase() || '') ||
    item.category?.toLowerCase().includes(queryParameter?.toLocaleLowerCase() || '')
  );

  // Function to sort the data based on the selected option
  const sortData = () => {
    if (sortingOption === 'relevance') {
      // Sort by relevance (no specific sorting needed for relevance)
      const sortedByRelevance = [...filteredData].sort((a, b) => {
        const aCategoryMatch = a.category?.toLowerCase().includes(queryParameter?.toLowerCase());
        const bCategoryMatch = b.category?.toLowerCase().includes(queryParameter?.toLowerCase());

        if (aCategoryMatch && !bCategoryMatch) return -1;
        if (!aCategoryMatch && bCategoryMatch) return 1;
        return 0;
      });
      return sortedByRelevance;
    }
    else if (sortingOption === 'dateUploaded') {
      // Sort by date uploaded (if your data has a property for date uploaded)
      const sortedByDate = [...filteredData].sort((a, b) => {
        // Replace 'dateUploaded' with the actual property title for date uploaded
        return new Date(b.dateUploaded) - new Date(a.dateUploaded);
      });
      return sortedByDate;
    } else {
      // Default: return the original filtered data
      return filteredData, console.log(filteredData);
      }
  };

  const sortedData = sortData();

    // Check if there is a search query
  const hasSearchQuery = queryParameter !== null && queryParameter !== '';

  // Check if there are search results to display
  const hasSearchResults = filteredData.length > 0;

    return (
    <div>
      {/* Add the "Sort By" dropdown */}
      <div>
        <label htmlFor="sortOption">Sort By:</label>
        <select
          id="sortOption"
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="dateUploaded">Date Uploaded</option>
        </select>
        <Search/>
      </div>
      
      {/* Display the QuoteGenerator component if there are no search results */}
      {!hasSearchQuery && <QuoteGenerator />}


     {/* Display the sorted search results */}
     {hasSearchQuery && (
        <>
          <h1>Search Results for: {queryParameter}</h1>
          {hasSearchResults ? (
            <ul>
              {sortedData.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            // Render a message if there are no search results
            <p>No search results found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
