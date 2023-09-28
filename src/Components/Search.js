import React from 'react';
import '../App.css'

function Search({searchTerm}) {
    return (
      <input onChange={(e) => searchTerm(e.target.value)} data-testid="filterInput" className="large" placeholder="Enter Country Name"/>
  	);
}

export default Search;
