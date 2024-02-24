import Card from "./MovieCard";
import SearchBar from "./SearchBar";

import React, { useState, useEffect } from "react";
const Movies = ({handleClick, SearchData, filteredMovies, searching, setSearching, setFilteredMovies, data}) => {
  const movies = filteredMovies.filter((movie) => movie.category === "Movie");

const arrayLength = filteredMovies.length

//When a User leaves the route, get rid of the searching display and set Searched DAta back to normal data
useEffect(() => {
  return () => {
    console.log('ok')
    // Cleanup function that sets searching to false when component unmounts
    setSearching(false);
    setFilteredMovies(data)

  };
}, []);
  return (
    <>
    <main>
      <SearchBar  dataType={"movie"} onSubmit = {SearchData} />
      {searching?(
        <h1> {`Showing ${arrayLength} Results`} </h1>
      ):<h1> Movies </h1>}

      <div className="recommendedMoviesContainer">
        {movies.map((movie, index) => (
          <div  key={movie.title}>
            <Card movie={movie} handleClick={handleClick} index={index} />
          </div>
        ))}
      </div>
      </main>
    </>
  );
};
export default Movies;
