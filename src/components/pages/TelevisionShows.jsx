import { useState, useEffect } from "react";
import Card from "../common/MovieCard";
import '../../styles/TelevisionShow.css'
import SearchBar from "../common/SearchBar";
import MediaRow from "../layouts/MediaRow";

const TelevisionShows = ({ handleClick, SearchData, filteredMovies, searching, setSearchTerm, setSearching, searchTerm }) => {
  const tvShows = filteredMovies.filter((item) => item.category === 'TV Series' )
  return(
    <main>
    <MediaRow
    handleClick={handleClick}
    SearchData={SearchData}
    searching={searching}
    setSearching={setSearching}
    setSearchTerm={setSearchTerm}
    searchTerm={searchTerm}
    media={tvShows}
    dataType = {'Television Shows'}


    />
    </main>
  )
}

export default TelevisionShows;
