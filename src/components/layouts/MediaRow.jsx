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
