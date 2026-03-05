import React from 'react';
import SearchBar from '../components/SearchBar';
import popcorn from '../assets/popcorn.png';

const Home = () => (
        <div className="home">
            <h1>Looking for a good movie to watch?</h1>
            <SearchBar />
            <img className="popcorn" src={popcorn} alt="Popcorn" />
                   
        </div>
    );

export default Home; 
