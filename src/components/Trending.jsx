
import "../styles/singleRowMovie.css";
import Card from "./common/MovieCard";
const Trending = ({ handleClick, filteredMovies }) => {
  const TrendingMovies = filteredMovies.filter((Movie) => Movie.isTrending);

  return (
    <>
      <h1 id="trendingHeader"> Trending </h1>
      <div className="TrendingContainer">
        {TrendingMovies.map((movie) => (
        <Card handleClick={handleClick} movie={movie} isTrending = {true} key = {movie.title} />

        ))}
      </div>
    </>
  );
};
export default Trending;
