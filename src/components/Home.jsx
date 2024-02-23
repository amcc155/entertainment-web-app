import Trending from "./Trending"
import Recommended from "./Recommended"
import SearchBar from "./SearchBar"


const Home = ({handleBookmarkClick, data, filteredMovies, SearchData}) => {
    return(
        <>
         <main className="main">
        <SearchBar onSubmit = {SearchData} dataType = {'Movies and TV Shows'} />
       
    <Trending handleClick={handleBookmarkClick} data={data} filteredMovies= {filteredMovies} onSubmit = {SearchData} />
    <Recommended handleClick={handleBookmarkClick} data={data} filteredMovies = {filteredMovies} onSubmit = {SearchData} />
    </main>
    </>
    )
}
export default Home