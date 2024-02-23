import { useState, useEffect } from "react";
import Card from "./MovieCard";
import "../styles/TelevisionShow.css"  
import SearchBar from "./SearchBar";

const TelevisionShows = ({ handleClick, SearchData, filteredMovies }) => {


  return (
    <>
    <main>
    <SearchBar onSubmit={SearchData} dataType = {'Television Shows'} />
      <h1>TV Series</h1>
      <div className="recommendedMoviesContainer">
        {filteredMovies.map((movie, index) =>
          movie.category === "TV Series" ? (
            <div  key={index}>
              <Card movie={movie} handleClick={handleClick} index={index} />
            </div>
          ) : null
          
        )}
      </div>
    </main>
    </>
  );
};

export default TelevisionShows;
