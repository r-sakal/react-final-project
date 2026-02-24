import React from 'react';

const SearchBar = () => {
    return (
         <>
      <div className="search__bar">
        <input
          type="text"
          id="search__area"
          placeholder="Part of a title or series"
        />
        <input type="button" id="btn" value="Look it up!" />
      </div>
    </>
    );
}

export default SearchBar;
