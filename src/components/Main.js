import { useState } from "react";
import Movie from "./Movie";

import "./Main.css"

function Main(props){

    return(
        <div className="Main">

            {props.moviesArr.map( (movieObj) => {
                return <Movie key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete}  />
            })}

        </div>
    )
}

export default Main;