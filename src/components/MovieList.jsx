import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const fetchMovies = async (query) => {
    const apiKey = "7d0b778a";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

    try {
      const response = await axios.get(url);
      // filter out games from the api response
      const filtered = (response.data.Search || []).filter(
        (movie) => movie.Type !== "game",
      );

      // filter out duplicate movies from the api response
      const unique = filtered.filter(
        (m, i, arr) =>
          i === arr.findIndex((movie) => movie.imdbID === m.imdbID),
      );

      const detailMovies = unique.map((m) =>
        fetchMovieDetails(m.imdbID, apiKey),
      );
      const fullMovies = await Promise.all(detailMovies);

      setMovies(fullMovies);
      setFilteredMovies(fullMovies);
      console.log(fullMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovieDetails = async (imdbID, apiKey) => {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    const response = await axios.get(url);
    return response.data;
  };

  const handleFilterChange = (sortedList) => {
    setFilteredMovies(sortedList);
  };

  return (
    <>
      <SearchBar onSearch={fetchMovies} />
      <Filter movies={movies} onFilterChange={handleFilterChange} />
      <div className="movie__list">
        {filteredMovies.length > 0
          ? filteredMovies.map((movie) => {
              const imdb =
                movie.Ratings?.find(
                  (r) => r.Source === "Internet Movie Database",
                )?.Value || "N/A";
              const rt =
                movie.Ratings?.find((r) => r.Source === "Rotten Tomatoes")
                  ?.Value || "N/A";

              return (
                <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} >
                <div className="movie__card" key={movie.imdbID}>
                  <img
                    className="box__art"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <h3 className="movie__title">{movie.Title}</h3>
                  <p className="release__date">Released {movie.Year}</p>
                  <p className="imdb__page">IMDb Rating: {imdb}</p>
                  <p className="rotten__tomatoes">Rotten Tomatoes: {rt}</p>
                </div>
                </Link>
              );
            })
          : null}
      </div>
    </>
  );
};

export default MovieList;
