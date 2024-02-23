  import React, { useState } from 'react';
  import NavBar from './components/Nav';
  import dataJSON from '../public/assets/data.json';
  import './App.css';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import BookmarkedMovies from './components/BookmarkedMovies';
  import TelevisionShows from './components/TelevisionShows';
  import Home from './components/Home';
  import Movies from './components/Movies';

  function App() {
    const [data, setData] = useState(dataJSON);
    const [filteredMovies, setFilteredMovies] = useState(data)
    const[searching, setSearching] = useState(false)

  //handles the event when user saves a movie
  const handleBookmarkClick = (index) => {
      const newData = [...data];
      newData[index]['isBookmarked'] = !newData[index]['isBookmarked'];
      
      setData(newData);
      console.log(newData[index])
      console.log(newData)
    };

  //  funciton to search through json, pass it to searchBar componenet. Move up in state later
        const SearchData = (query) => {
          if (query === ''){
              setFilteredMovies(data)
              setSearching(false)
          }else{
          let searchedData = data.filter((movie) => movie.title.includes(query))
          setFilteredMovies(searchedData)
          setSearching(true)
          }
      }
  
    /* creating routes */
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path = "/" element = {<Home handleBookmarkClick = {handleBookmarkClick}  data = {data} SearchData = {SearchData} filteredMovies = {filteredMovies}/>}/>
            <Route path="/bookmarked" element={<BookmarkedMovies data={data} handleClick={handleBookmarkClick} SearchData = {SearchData} filteredMovies = {filteredMovies} />} />
            <Route path = "/television-shows" element = {<TelevisionShows data = {data} handleClick= {handleBookmarkClick} SearchData = {SearchData} filteredMovies = {filteredMovies}/>} />
            <Route path = "/movies" element = {<Movies  handleClick = {handleBookmarkClick} SearchData = {SearchData} filteredMovies={filteredMovies} searching = {searching}/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
