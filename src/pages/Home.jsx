import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import popcorn from '../assets/popcorn.png';

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (query) => {
        navigate(`/results?q=${encodeURIComponent(query)}`);
    };

    return (
        <div className="home">
            <h1>Looking for a good movie to watch?</h1>
            <SearchBar onSearch={handleSearch} />
            <img className="popcorn" src={popcorn} alt="Popcorn" />
                   
        </div>
    );
};

export default Home; 
