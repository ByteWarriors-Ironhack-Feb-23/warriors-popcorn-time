import { useState } from 'react';

import moviesFromJson from "./data/movies.json";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';
import AddMovie from './components/AddMovie';

function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (movieTitle) => {
    const newList = moviesArr.filter( movieDetails => movieDetails.title !== movieTitle );
    setMoviesArr(newList);
  }

  const addMovie = (newMovie) => {
    setMoviesArr( (prevMoviesArr) => {
      const newList = [newMovie, ...prevMoviesArr];
      return newList;
    });
  }

  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />
      <AddMovie callbackToAdd={addMovie} />
      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
