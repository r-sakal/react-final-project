import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };
  
  return (  
      <div className="search__bar">
        <input className="search__area"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Part of a title or series"
        />
        <input type="button" id="btn" value="Look it up!" onClick={handleSearch} />
      </div>
    );
}

export default SearchBar;
