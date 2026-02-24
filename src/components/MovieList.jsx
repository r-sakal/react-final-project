import React from 'react';
import Query from '../components/Query';
const MovieList = () => {
    <Query />
    return (
        <>
        <Filter />
        <div class="movie__card">
        <div class="movie__card--container">
        <img class="box__art" src={movie.Poster} alt="box art" />
        <h3 class="movie__title">{movie.Title}</h3>
        <p class="release__date">{movie.Year}</p>
        <p class="imdb__page">IMDb Rating: {imdbRating}</p>
        <p class="rotten__tomatoes">Rotten Tomatoes: {rottenTomatoesRating}</p>
        </div>
        </div>;
        </>
    );
}

export default MovieList;
