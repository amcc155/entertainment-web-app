import React from "react";
import "../styles/mainMovieDisplays.css";
import Card from "./MovieCard";
import AnimatedCardWrapper from "./AnimatedCardWrapper";

const Recommended = ({ handleClick, data }) => {
  return (
    <>
      <h1>Recommended For You</h1>
      <div className="recommendedMoviesContainer">
        {data.map((movie, index) => (
          !movie.isTrending ? (
            <div className="movieCardWrapper" key = {index} > 
              <Card handleClick={handleClick} movie={movie} index={index} />
            </div>
          ) : null
        ))}
      </div>
    </>
  );
};

export default Recommended;
