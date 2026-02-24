import React from 'react';

const Filter = () => {
    function getImdb(m) {
    const v = m.Ratings?.find(r => r.Source === "Internet Movie Database")?.Value || "0";
    const num = parseFloat(String(v).split("/")[0]);
    return isNaN(num) ? 0 : num;
}

function getRT(m) {
    const v = m.Ratings?.find(r => r.Source === "Rotten Tomatoes")?.Value || "0%";
    const num = parseInt(String(v).replace("%", ""), 10);
    return isNaN(num) ? 0 : num;
}

function getYear(m) {
    const yearStr = m.Year || "0";
    const match = String(yearStr).match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
}


//filter function

function filterMovies(event) {
    const value = event.target.value;
    const list = Array.isArray(window.currentMovies) ? [...window.currentMovies] : [];

    //filter options

    switch (value) {
        //IMDB
        case 'IMDB_High_To_Low':
            list.sort((a, b) => getImdb(b) - getImdb(a));
            break;
        case 'IMDB_Low_To_High':
            list.sort((a, b) => getImdb(a) - getImdb(b));
            break;
        
        //Rotten Tomatoes
        case 'RT_High_To_Low':
            list.sort((a, b) => getRT(b) - getRT(a));
            break;
        case 'RT_Low_To_High':
            list.sort((a, b) => getRT(a) - getRT(b));
            break;

        //Release Date
        case 'Release_Newest':
            list.sort((a, b) => getYear(b) - getYear(a));
            break;
        case 'Release_Oldest':
            list.sort((a, b) => getYear(a) - getYear(b));
            break;
    }

    window.currentMovies = list;
    if (typeof window.renderMovies === 'function') {
        window.renderMovies(list);
    }
}
    return (
        <>
            <select id="filter" onchange="filterMovies(event)">
                        <option value="" disabled selected>Sort</option>
                        <option value="IMDB_High_To_Low"> IMDB Rating, High to Low</option>
                        <option value="IMDB_Low_To_High"> IMDB Rating, Low to High</option>
                        <option value="RT_High_To_Low"> Rotten Tomatoes Score, High to Low</option>
                        <option value="RT_Low_To_High"> Rotten Tomatoes Score, Low to High</option>
                        <option value="Release_Newest"> Release Date, Newest</option>
                        <option value="Release_Oldest"> Release Date, Oldest</option>
                    </select>
        </>
    );
}

export default Filter;
