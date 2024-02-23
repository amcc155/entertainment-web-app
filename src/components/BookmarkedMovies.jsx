import "../styles/mainMovieDisplays.css"
import Card from "./MovieCard"
import SearchBar from "./SearchBar"

const BookmarkedMovies = ({data, handleClick, SearchData, filteredMovies}) =>{
    
    // const BookmarkedMovies = filteredMovies.filter((movie) => movie.isBookmarked)
    return(
        <>
        <main>
        <SearchBar onSubmit={SearchData} dataType={'bookmarked movies'} />
        <h1> Bookmarked </h1>
        <div className="recommendedMoviesContainer">
        {filteredMovies.map((movie, index) =>(
          movie.isBookmarked?(
           <div key = {movie.title}>
            <Card handleClick={handleClick} movie = {movie}  index = {index} />
         </div>
          ):null
        ))}
        </div>
        </main>
          </>
    )
    }
  
    export default BookmarkedMovies