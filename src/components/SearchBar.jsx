import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  function onSearchKeyPress(key) {
    if (key === 'Enter') {
      handleSearch();
    }
  }
  
  return (  
      <div className="search__bar">
        <input className="search__area"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Part of a title or series"
          onKeyDown={(e) => onSearchKeyPress(e.key)}
        />
        <input type="button" id="btn" value="Look it up!" onClick={handleSearch} />
      </div>
    );
}

export default SearchBar;
