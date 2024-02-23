import Card from "./MovieCard";
import SearchBar from "./SearchBar";

import React, { useState } from "react";
const Movies = ({ handleClick, SearchData, filteredMovies, searching}) => {
const movies = filteredMovies.filter((movie) => movie.category === "Movie");
const arrayLength = filteredMovies.length
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
