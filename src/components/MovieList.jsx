import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Filter from './Filter'; 

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    

    const fetchMovies = async (query) => {
        const apiKey = '7d0b778a'; 
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

        try {
            const response = await axios.get(url);
            // filter out games from the api response
            const filteredMovies = (response.data.Search || []).filter(movie => movie.Type !== 'game');
            
            // filter out duplicate movies from the api response
            const uniqueMovies = filteredMovies.filter((movie, index, self) =>
                index === self.findIndex((m) => m.imdbID === movie.imdbID)
            );

            const detailMovies = uniqueMovies.map(m => fetchMovieDetails(m.imdbID, apiKey));
            const fullMovies = await Promise.all(detailMovies);

            setMovies(fullMovies);
            console.log(fullMovies);

        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    async function fetchMovieDetails(imdbID, apiKey) {
            const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
            const response = await axios.get(url);
            return response.data;
        }

    
        
        
        return (
          <>
            <SearchBar onSearch={fetchMovies} />
            <Filter />
            <div className="movie__list">
          {movies.map(movie => {
            const imdb = movie.Ratings?.find(r => r.Source === "Internet Movie Database")?.Value || "N/A";
          const rt = movie.Ratings?.find(r => r.Source === "Rotten Tomatoes")?.Value || "N/A";

          return (

            
            <div className="movie__card" key={movie.imdbID}>
                        <img className="box__art" src={movie.Poster} alt={movie.Title} />
                          <h3 className='movie__title'>{movie.Title}</h3>
                          <p className='release__date'>Released {movie.Year}</p>
                          <p className="imdb__page">IMDb Rating: {imdb}</p>
            <p className="rotten__tomatoes">Rotten Tomatoes: {rt}</p>
                    </div>
                    );
})}
            </div>
        </>
    );
};


export default MovieList;