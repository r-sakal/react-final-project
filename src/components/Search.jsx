import React from "react";
import Query from "./Query";

const Search = () => {
  

  function renderMovies(list) {
    const movieListEl = document.querySelector(".movie__list");
    movieListEl.innerHTML = list.map((movie) => movieHTML(movie)).join("");
  }
  <Query />;
};

export default Search;
