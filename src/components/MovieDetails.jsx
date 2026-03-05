import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const apiKey = '7d0b778a';
            const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

            try {
                const response = await axios.get(url);
                setMovie(response.data);
            } catch (err) {
                setError('Error fetching movie details.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [imdbID]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    } 
    if (!movie) {
        return <div>No movie details found.</div>;
    }  

    const imdb = movie.Ratings.find((r) => r.Source === 'Internet Movie Database')?.Value || "N/A";
    const rt = movie.Ratings.find((r) => r.Source === 'Rotten Tomatoes')?.Value || "N/A";

    return (
        <>
        <div className="movie__detail--card">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie__detail--details">
        <h1>{movie.Title}</h1>
        <p className='movie__detail--title'><strong>Released:</strong> {movie.Year}</p>
        <p className='movie__detail--rated'><strong>Rated:</strong> {movie.Rated}</p>
        <p className='movie__detail--plot'><strong>Plot:</strong> {movie.Plot}</p>
        <p className='movie__detail--imdb'><strong>IMDb Rating:</strong> {imdb}</p>
        <p className='movie__detail--rt'><strong>Rotten Tomatoes:</strong> {rt}</p>
        <p className='movie__detail--director'><strong>Director:</strong> {movie.Director}</p>
        <p className='movie__detail--actors'><strong>Actors:</strong> {movie.Actors}</p>
        <p className='movie__detail--runtime'><strong>Runtime:</strong> {movie.Runtime}</p>
        <p className='movie__detail--genre'><strong>Genre:</strong> {movie.Genre}</p>
        </div>
      </div>
        </>
    );
}


export default MovieDetails;
