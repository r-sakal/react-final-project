import React from 'react';
import Query from '../components/Query';
import Filter from '../components/Filter';


const MovieList = () => {
    const movie = <Query />;
    return (
        <>
        <Filter />
        <div className="movie__card">
        <div className="movie__card--container">
        <img className="box__art" src={movie.Poster} alt="box art" />
        <h3 className="movie__title">{movie.Title}</h3>
        <p className="release__date">{movie.Year}</p>
        <p className="imdb__page">IMDb Rating: {movie.imdbRating}</p>
        <p className="rotten__tomatoes">Rotten Tomatoes: {movie.rottenTomatoesRating}</p>
        </div>
        </div>;
        </>
    );
}

export default MovieList;
