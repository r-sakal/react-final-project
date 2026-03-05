import React from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <>
    <Link to="/">
        <button id="btn" className="btn">← Back</button>
        </Link>
    <h1>Search Again</h1> 
      <MovieList initialQuery={query} />
    </>
  );
};

export default Results;
