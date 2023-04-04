import movies from "../data/movies.json";

import "./Main.css"

function Main(){

    return(
        <div className="Main">
            {movies.map( movieObj => {
                return(
                    <div key={movieObj.id} className="card">
                        <h2>{movieObj.title}</h2>
                        <h3>Rating: {movieObj.rating}</h3>
                        <h3>Year: {movieObj.year}</h3>
                    </div>
                );
            })}
        </div>
    )
}

export default Main;