import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Filter from './Filter'; // Assuming you have a Filter component

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (query) => {
        const apiKey = '7d0b778a'; 
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

        try {
            const response = await axios.get(url);
            const filteredMovies = (response.data.Search || []).filter(movie => movie.Type !== 'game');
            setMovies(filteredMovies);
            console.log(filteredMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    async function fetchMovieDetails(imdbID, apiKey) {
            const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
            const response = await axios.get(url);
            return response.data;
        }

    function movieHTML(movie) {
        const imdbRating = movie.Ratings.find(rating => rating.Source === "Internet Movie Database")?.Value || "N/A";
        const rottenTomatoesRating = movie.Ratings.find(rating => rating.Source === "Rotten Tomatoes")?.Value || "N/A";
    }

    return (
        <>
            <SearchBar onSearch={fetchMovies} />
            <Filter />
            <div className="movie__list">
                {movies.map((movie) => (
                    <div className="movie__card">
                        <img className="box__art" src={movie.Poster} alt={movie.Title} />
                          <h3 className='movie__title'>{movie.Title}</h3>
                          <p className='release__date'>Released {movie.Year}</p>
                          <p className="imdb__page">IMDb Rating: {movie.imdbRating}</p>
            <p className="rotten__tomatoes">Rotten Tomatoes: {movie.rottenTomatoesRating}</p>
                    </div>
                ))}
            </div>
        </>
    );
};


export default MovieList;