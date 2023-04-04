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


    let title;
    if(moviesArr.length > 1){
        title = <h1>We have {moviesArr.length} movies</h1>;
    } else if(moviesArr.length === 1){
        title = <h1>We have 1 movie</h1>;
    } else {
        title = <h1>Sorry, no movies to display</h1>;
    }


    return(
        <div className="Main">
            
            {title}

            {moviesArr.map( movieObj => {
                return(
                    <div key={movieObj.id} className="card">
                        <h2>{movieObj.title}</h2>

                        {movieObj.imgURL 
                            ? <img src={movieObj.imgURL} alt={movieObj.title} /> 
                            : <img src="https://dummyimage.com/182x268/aaaaaa/000000" />
                        }

                        <h3>Rating: {movieObj.rating}</h3>
                        <h3>Year: {movieObj.year}</h3>

                        {movieObj.rating > 8 && <p className="badge">RECOMMENDED</p>}
                        

                        <button onClick={ () => {deleteMovie(movieObj.id)} }>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Main;