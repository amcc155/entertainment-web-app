import Card from "../common/MovieCard";
import SearchBar from "../common/SearchBar";
import React, { useEffect } from "react";
const MediaRow = ({
  handleClick,
  SearchData,
  searching,
  setSearching,
  setSearchTerm,
  searchTerm,
  media,
  dataType,
  showSearchBar = true,
}) => {
  //When a User leaves the route, get rid of the searching display and set Searched DAta back to normal data
  useEffect(() => {
    return () => {
      // Cleanup function that sets searching to false when component unmounts
      setSearching(false);
      setSearchTerm("");
    };
  }, []);

  const arrayLength = media.length;

  return (
    <div className="test">
      {showSearchBar && (
        <SearchBar
          dataType={dataType}
          onSubmit={SearchData}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      )}
      {searching ? (
        <h1> {`Showing ${arrayLength} Results`} </h1>
      ) : (
        <h1> {dataType} </h1>
      )}
      <div className="recommendedMoviesContainer">
        {media.map((movie, index) => (
          <Card movie={movie} handleClick={handleClick} index={index} />
        ))}
      </div>
    </div>
  );
};
export default MediaRow;
