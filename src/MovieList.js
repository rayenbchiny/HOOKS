import React from "react";
import MovieCard from "./MovieCard";






function MovieList({data}) {
  return (
    <div className="film">

{data.map((el)=><MovieCard data={el} />) }

    </div>
    
  )
}

export default MovieList
