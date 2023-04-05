import { useState } from 'react';

import moviesFromJson from "./data/movies.json";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (movieId) => {
    const newList = moviesArr.filter( movieDetails => movieDetails.id !== movieId );
    setMoviesArr(newList);
  }

  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />
      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
