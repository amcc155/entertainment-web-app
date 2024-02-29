import React, { useState } from "react";
import MovieBookmarked from "../ MovieBookmarkedIcon";
import "../../styles/mainMovieDisplays.css";
import "../../styles/singleRowMovie.css";

const Card = ({ handleClick, movie, index }) => {
  const [hover, setHover] = useState(false);
  const cardClassName = hover
    ? "playButton recImageDetails"
    : "recImageDetails";

  return (
    <div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="movieCardWrapper"
      >
        <img
          className="recommendedImage"
          src={movie.thumbnail.regular.small}
          alt="recommended movie image"
        />

        {hover ? (
          <div className="play">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                fill="#FFF"
              />
            </svg>
            <p> Play </p>
          </div>
        ) : null}

        {/* image details that are displayed on the image */}

        <div className={cardClassName}>
          <div id="bookmark">
            {" "}
            <MovieBookmarked
              onClick={() => handleClick(movie.title)}
              clicked={movie.isBookmarked}
            />{" "}
          </div>

          <p> {movie.year} </p>

          {/* display category images based off what category it is */}
          <div id="movieCategory">
            {movie.category == "Movie" ? (
              <img
                src="../../public/assets/icon-category-movie.svg"
                alt="movie icon"
              />
            ) : (
              <img
                src="../../public/assets/icon-category-tv.svg"
                alt="tv icon"
              />
            )}{" "}
          </div>

          <p>{movie.category} </p>
          <p> {movie.rating} </p>
        </div>
        <p> {movie.title} </p>
      </div>
    </div>
  );
};
export default Card;
