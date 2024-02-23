import MovieBookmarked from "./ MovieBookmarkedIcon";
import "../styles/mainMovieDisplays.css"
import "../styles/singleRowMovie.css"

const Card = ({handleClick, movie, index}) => {
    return(
  <div>
    <div className="movieCardWrapper">
    <img
      className="recommendedImage"
      src={movie.thumbnail.regular.small}
      alt="recommended movie image"
    />

    {/* image details that are displayed on the image */}
    <div className="recImageDetails">
      <div id="bookmark">
        {" "}
        <MovieBookmarked onClick={() => handleClick(index)} clicked = {movie.isBookmarked} />{" "}
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
    )
}
export default Card