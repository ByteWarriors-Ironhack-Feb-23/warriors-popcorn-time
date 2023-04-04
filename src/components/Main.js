import { useState } from "react";
import moviesFromJson from "../data/movies.json";

import "./Main.css"

function Main(){

    const [moviesArr, setMoviesArr] = useState(moviesFromJson);
    


    const deleteMovie = (movieId) => {

        // const newList = moviesArr.filter( (movieDetails) => {
        //     if(movieDetails.id === movieId){
        //         return false; //this movie will not be included in the new array
        //     } else {
        //         return true;
        //     }
        // });

        const newList = moviesArr.filter( movieDetails => movieDetails.id !== movieId );


        setMoviesArr(newList);
    }

    return(
        <div className="Main">
            
            <h1>We have {moviesArr.length} movies</h1>

            {moviesArr.map( movieObj => {
                return(
                    <div key={movieObj.id} className="card">
                        <h2>{movieObj.title}</h2>
                        <h3>Rating: {movieObj.rating}</h3>
                        <h3>Year: {movieObj.year}</h3>

                        <button onClick={ () => {deleteMovie(movieObj.id)} }>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Main;