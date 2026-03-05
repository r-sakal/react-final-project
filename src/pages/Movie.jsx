import React from "react";
import { useNavigate } from "react-router-dom";
import MovieDetails from '../components/MovieDetails';

const Movie = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
    <>
    <button id="btn" className="btn" onClick={handleBack}>← Back</button>
            <MovieDetails />
    </>
    );
};

export default Movie;

