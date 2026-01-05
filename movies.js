//API FOR MOVIES by title search: https://www.omdbapi.com/?apikey=7d0b778a&s=harry+potter
//API For more in depth info search: https://www.omdbapi.com/?apikey=7d0b778a&i=tt0417741 
//put the search bar results into the api search by makig the api dynamic
//create skeleton loading page for when the fetching data is taking place
var currentMovies = [];


function renderMovies(list) {
    const movieListEl = document.querySelector('.movie__list');
    movieListEl.innerHTML = list.map(movie => movieHTML(movie)).join("");
}


async function movies() {
    document.getElementById('btn')
    .addEventListener('click', async() => {
        const query = document.getElementById('search__area').value;
        const resultsContainer = document.getElementsByClassName('container__results')[0];
        //loading spinner
        const loadingSpinner = document.querySelector('.results__loading');
        const movieListEl = document.querySelector('.movie__list')
       
        if (query) {
            resultsContainer.style.display = 'block';
            movieListEl.innerHTML = '';
            loadingSpinner.style.display = 'block'
        }
        else {
            resultsContainer.style.display = 'none';
            loadingSpinner.style.display = 'none';
            return;
        }
        const apiKey = '7d0b778a';
        const url =`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

    try{
        const moviesResponse = await fetch(url);
        const moviesData = await moviesResponse.json();
        console.log(moviesData)
        
        //filter out games from showing in the results
        
        const filteredMovies = (moviesData.Search ||  []).filter(movie => movie.Type !== 'game');
        const movieDetailsPromises = filteredMovies.map(movie => fetchMovieDetails(movie.imdbID, apiKey));
        const movieDetails = await Promise.all(movieDetailsPromises);
        
        currentMovies = movieDetails;
        window.currentMovies = currentMovies;
        window.renderMovies =renderMovies;
        
        //Hide the spinner then render movies after a delay
        setTimeout(() => {
            
            loadingSpinner.style.display = 'none';
            renderMovies(currentMovies);
            
        },2000);
    }
    catch(error) {
        console.error('Error fetching movies:', error)
    }
});

    }

    async function fetchMovieDetails(imdbID, apiKey) {
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
        const response = await fetch(url);
        return await response.json();
    }

//add the ratings for IMDB and Rotten Tomatoes
    
    function movieHTML(movie) {
        const imdbRating = movie.Ratings.find(rating => rating.Source === "Internet Movie Database")?.Value || "N/A";
        const rottenTomatoesRating = movie.Ratings.find(rating => rating.Source === "Rotten Tomatoes")?.Value || "N/A";
        
        return `<div class="movie__card">
            <div class="movie__card--container">
            <img class="box__art" src=${movie.Poster} alt="box art">
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="release__date">${movie.Year}</p>
            <p class="imdb__page">IMDb Rating: ${imdbRating}</p>
            <p class="rotten__tomatoes">Rotten Tomatoes: ${rottenTomatoesRating}</p>
            </div>
            </div>`;
    }

movies();



