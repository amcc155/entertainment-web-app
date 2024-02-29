import '../../styles/mainMovieDisplays.css'
import Card from "../common/MovieCard"
import SearchBar from "../common/SearchBar"
import MediaRow from "../layouts/MediaRow"

const BookmarkedMovies = ({ handleClick, SearchData, filteredMovies, searching, setSearchTerm, setSearching, searchTerm}) =>{
  const bookmarkMovies = filteredMovies.filter((item) => item.isBookmarked)
  return(
    <main>
    <MediaRow
    handleClick={handleClick}
    SearchData={SearchData}
    searching = {searching}
    setSearching = {setSearching}
    setSearchTerm={setSearchTerm}
    searchTerm={searchTerm}
    media = {bookmarkMovies}
    dataType={'Bookmarked'}
    />
    </main>
  )
    }
  
    export default BookmarkedMovies