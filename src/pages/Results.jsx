import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";

const Results = () => {


  return (
    <>
    <Link to="/">
        <button id="btn" className="btn">← Back</button>
        </Link>
    <h1>Search Again</h1> 
      <MovieList />
    </>
  );
};

export default Results;
