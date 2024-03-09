import React, { useState, useEffect } from "react";
import MovieBookmarked from "../ MovieBookmarkedIcon";
import "../../styles/mainMovieDisplays.css";
import "../../styles/singleRowMovie.css";

const Card = ({ handleClick, movie, isTrending }) => {
  const [hover, setHover] = useState(false);
  const [imageSize, setImageSize] = useState("small");
  const cardClassName = hover
    ? "playButton recImageDetails"
    : "recImageDetails";

  /** logic to change pictures based on viewport */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageSize("medium");
      } else if (window.innerWidth >= 1024) {
        setImageSize("large");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='movieCardWrapper'
    >
      <img
        className={isTrending? "trendingMovie" : "recommendedImage"}
        src={movie.thumbnail.regular[imageSize]}
        alt={imageSize}
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
      <div id="bookmark">
          {" "}
          <MovieBookmarked
            onClick={() => handleClick(movie.title)}
            clicked={movie.isBookmarked}
          />{" "}
        </div>
      <div className={isTrending? 'imageDetails' : cardClassName}>
        

        <p> {movie.year} </p>

        {/* display category images based off what category it is */}
        <div id="movieCategory">
          {movie.category == "Movie" ? (
            <img
              src="../../public/assets/icon-category-movie.svg"
              alt="movie icon"
            />
          ) : (
            <img src="../../public/assets/icon-category-tv.svg" alt="tv icon" />
          )}{" "}
        </div>

        <p>{movie.category} </p>
        <p> {movie.rating} </p>
      </div>
      <p className= {isTrending? "movieTitle" : ''} > {movie.title} </p>
    </div>
  );
};
export default Card;
