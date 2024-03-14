import SearchBar from "../common/SearchBar";
import MediaRow from "../layouts/MediaRow";
import Trending from "./Trending";

const Homes = ({
  handleClick,
  SearchData,
  filteredMovies,
  searching,
  setSearching,
  setSearchTerm
}) => {
  const recommended = filteredMovies.filter(
    (movie) => !movie.isTrending
  );
  const trending = filteredMovies.filter((item) => item.isTrending);

  
  return (
     <main>
        <SearchBar dataType={"Movies and TV Shows"} onSubmit={SearchData} />
        {searching?(
          
          //if user searched for something, show rows of both trending and recommended
          <MediaRow
          media={recommended.concat(trending)}
          handleClick={handleClick}
          SearchData={SearchData}
          searching={searching}
          setSearching={setSearching}
          setSearchTerm={setSearchTerm}
           dataType={"Recommended"}
          showSearchBar={false}/>
         
               ):(
                <>
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
                 </>
      )}
       
      </main>

  );
};
export default Homes;
