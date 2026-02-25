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
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <>
            <SearchBar onSearch={fetchMovies} />
            <Filter />
            <div className="movie__list">
                {movies.map((movie) => (
                    <div className="movie__card" key={movie.imdbID}>
                        <img className="box__art" src={movie.Poster} alt={movie.Title} />
                          <h3 className='movie__title'>{movie.Title}</h3>
                          <p className='release__date'>{movie.Year}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MovieList;