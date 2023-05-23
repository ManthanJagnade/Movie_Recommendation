import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchTerm) => {
    axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=af895fb6${searchTerm}`) 
      .then((response) => {
        setMovies(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  return (
    <div className="App">
      <h1 className="App-header">Movie Recommendation App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
