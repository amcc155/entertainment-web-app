
import "../styles/singleRowMovie.css";
import Card from "./common/MovieCard";
import SearchBar from "./common/SearchBar";
const Trending = ({ handleClick, data, filteredMovies }) => {
  const TrendingMovies = filteredMovies.filter((Movie) => Movie.isTrending);

  return (
    <>
      <h1 id="trendingHeader"> Trending </h1>
      <div className="TrendingContainer">
        {TrendingMovies.map((movie, index) => (
        <Card handleClick={handleClick} movie={movie} isTrending = {true} />

        ))}
      </div>
    </>
  );
};
export default Trending;
