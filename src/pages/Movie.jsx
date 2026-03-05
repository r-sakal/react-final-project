import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from '../components/MovieDetails';

const Movie = () => {
    return (
    <>
    <Link to="/results">
            <button id="btn" className="btn">← Back</button>
            </Link>
            <MovieDetails />
    </>
    );
};

export default Movie;

