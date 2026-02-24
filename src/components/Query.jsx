import React from 'react';

const Query = () => {
    var currentMovies = [];


    async function movies() {
    document.getElementById('btn')
    .addEventListener('click', async () => {
        const query = document.getElementById('search__area').value;
        const resultsContainer = document.getElementsByClassName('container__results')[0];
        // loading spinner
        const loadingSpinner = document.querySelector('.results__loading');
        const movieListEl = document.querySelector('.movie__list');

        if (query) {
            resultsContainer.style.display = 'block';
            movieListEl.innerHTML = '';
            loadingSpinner.style.display = 'block';
        } else {
            resultsContainer.style.display = 'none';
            loadingSpinner.style.display = 'none';
            return;
        }

        const apiKey = '7d0b778a';
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

        try {
            const moviesResponse = await axios.get(url);
            const moviesData = moviesResponse.data; 

            console.log(moviesData);

            // filter out games from showing in the results
            const filteredMovies = (moviesData.Search || []).filter(movie => movie.Type !== 'game');
            const movieDetailsPromises = filteredMovies.map(movie => fetchMovieDetails(movie.imdbID, apiKey));
            const movieDetails = await Promise.all(movieDetailsPromises);

            currentMovies = movieDetails;
            window.currentMovies = currentMovies;
            window.renderMovies = renderMovies;

            // Hide the spinner then render movies after a delay
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                renderMovies(currentMovies);
            }, 2000);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    });
}

async function fetchMovieDetails(imdbID, apiKey) {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    const response = await axios.get(url); 
    return response.data; 
}

// add the ratings for IMDB and Rotten Tomatoes
function movieHTML(movie) {
    const imdbRating = movie.Ratings.find(rating => rating.Source === "Internet Movie Database")?.Value || "N/A";
    const rottenTomatoesRating = movie.Ratings.find(rating => rating.Source === "Rotten Tomatoes")?.Value || "N/A";

    
}

movies();
}

export default Query;
