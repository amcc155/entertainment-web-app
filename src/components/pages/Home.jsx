import SearchBar from "../common/SearchBar";
import MediaRow from "../layouts/MediaRow";
import Trending from "../Trending";

const Homes = ({
  handleClick,
  SearchData,
  filteredMovies,
  searching,
  setSearching,
  setSearchTerm,
  searchTerm,
}) => {
  const recommended = filteredMovies.filter(
    (movie) => movie.category === "Movie"
  );
  const trending = filteredMovies.filter((item) => item.isTrending);

  return (
    <>
      <main>
        <SearchBar dataType={"Movies and TV Shows"} onSubmit={SearchData} />

        <Trending
          handleClick={handleClick}
          data={trending}
          filteredMovies={trending}
        />

        <MediaRow
          handleClick={handleClick}
          SearchData={SearchData}
          searching={searching}
          setSearching={setSearching}
          setSearchTerm={setSearchTerm}
          media={recommended}
          dataType={"Recommended"}
          showSearchBar={false}
        />
      </main>
    </>
  );
};
export default Homes;
