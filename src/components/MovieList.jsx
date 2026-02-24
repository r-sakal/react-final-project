import React, { useState, useEffect } from "react";
import Query from "../components/Query";
import Filter from "../components/Filter";


const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      {
        Title: "Placeholder Movie",
        Year: "0000",
        Poster: "https://via.placeholder.com/150",
        imdbRating: "N/A",
        rottenTomatoesRating: "N/A",
      },
    ]);
  }, []);
  return (
    <>
      <Filter />
      {movies.map((movie, index) => (
        <div className="movie__card" key={movie.imdbID}>
          <div className="movie__card--container">
            <img className="box__art" src={movie.Poster} alt="box art" />
            <h3 className="movie__title">{movie.Title}</h3>
            <p className="release__date">{movie.Year}</p>
            <p className="imdb__page">IMDb Rating: {movie.imdbRating}</p>
            <p className="rotten__tomatoes">
              Rotten Tomatoes: {movie.rottenTomatoesRating}
            </p>
          </div>
        </div>
      ))}
      <Query onMoviesFetched={setMovies} />
    </>
  );
};

export default MovieList;
