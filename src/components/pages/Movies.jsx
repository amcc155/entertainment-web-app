import MediaRow  from "../layouts/MediaRow";
const MovieList = ({handleClick, SearchData, filteredMovies, searching, setSearching, setSearchTerm,  searchTerm})=>{
  console.log(filteredMovies)
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
export default MovieList