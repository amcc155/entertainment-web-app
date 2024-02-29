  import React, { useState } from 'react';
  import NavBar from './components/layouts/Nav';
  import dataJSON from '../public/assets/data.json';
  import './App.css';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import BookmarkedMovies from './components/pages/BookmarkedMovies';
  import TelevisionShows from './components/pages/TelevisionShows';
  import Homes from './components/pages/Home';
  import MovieList from './components/pages/Movies';


  function App() {
    const[searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState(dataJSON);
    const filteredMovies = data.filter(item => item.title.includes(searchTerm));

    const[searching, setSearching] = useState(false)

  //handles the event when user saves a movie
  const handleBookmarkClick = (name) => {
      const newData = data.map((item) =>{
        if(item.title == name){
          return {...item, isBookmarked: !item.isBookmarked}
        }
        return item
      })
     setData(newData);
     
      console.log(newData)
    };

  //  funciton to search through json, pass it to searchBar componenet. Move up in state later
        const SearchData = (query) => {
          if (query === ''){
              setSearchTerm(query)
              setSearching(false)
          }else{
          setSearchTerm(query)
          setSearching(true)
          }
      }
  
    /* creating routes */
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path = "/" element = {<Homes handleClick = {handleBookmarkClick} SearchData = {SearchData} filteredMovies={filteredMovies} searching = {searching} setSearching = {setSearching} setSearchTerm={setSearchTerm} searchTerm = {searchTerm} data = {data}/>}/>
            <Route path="/bookmarked" element={<BookmarkedMovies handleClick = {handleBookmarkClick} SearchData = {SearchData} filteredMovies={filteredMovies} searching = {searching} setSearching = {setSearching} setSearchTerm={setSearchTerm} searchTerm = {searchTerm} data = {data}/>} />
            <Route path = "/movies" element = {<MovieList  handleClick = {handleBookmarkClick} SearchData = {SearchData} filteredMovies={filteredMovies} searching = {searching} setSearching = {setSearching} setSearchTerm={setSearchTerm} searchTerm = {searchTerm} data = {data}/>}/>
            <Route path = "/television-shows" element = {<TelevisionShows handleClick = {handleBookmarkClick} SearchData = {SearchData} filteredMovies={filteredMovies} searching = {searching} setSearching = {setSearching} setSearchTerm={setSearchTerm} searchTerm = {searchTerm} data = {data}/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
