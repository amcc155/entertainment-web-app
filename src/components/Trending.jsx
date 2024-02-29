import "../styles/singleRowMovie.css";
import SearchBar from "./common/SearchBar";
const Trending = ({ handleClick, data, filteredMovies }) => {
  const TrendingMovies = filteredMovies.filter((Movie) => Movie.isTrending);

  return (
    <>
      <h1 id="trendingHeader"> Trending </h1>
      <div className="TrendingContainer">
        {TrendingMovies.map((movie, index) => (
          <div className="imageContainer">
            <img
              className="trendingMovie"
              src={movie.thumbnail.trending.small}
              alt="movie-image"
            />

            <div className="imageDetails">
              <p> {movie.year} </p>
              <div id="movieCategory" key={index}>
                {movie.category == "Movie" ? (
                  <img src="../../public/assets/icon-category-movie.svg" />
                ) : (
                  <img src="../../public/assets/icon-category-tv.svg" />
                )}
              </div>
              <p>{movie.category} </p>
              <p> {movie.rating} </p>
            </div>
            <p class="movieTitle"> {movie.title} </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Trending;
