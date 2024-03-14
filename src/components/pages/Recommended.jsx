import React from "react";
import "../styles/mainMovieDisplays.css";


const Recommended = ({ handleClick, SearchData, filteredMovies, searching, setSearching, setSearchTerm,  searchTerm }) => {
  const movies = filteredMovies.filter((movie) => movie.category === 'Movie')
  return(
    <main>
    <MediaRow
    handleClick={handleClick}
    SearchData={SearchData}
    searching={searching}
    setSearching={setSearching}
    setSearchTerm={setSearchTerm}
    searchTerm={searchTerm}
    dataType={'Movie'} 
    media = {movies}
    />
    </main>
  )

}
export default Recommended;