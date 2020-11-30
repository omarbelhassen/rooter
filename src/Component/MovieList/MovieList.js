import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList({ Movielist, searchRate, searchTitle }) {
  console.log(Movielist);
  
  return (
    <div className="cardlist">
      {Movielist.map((el, i) => (
        <MovieCard key={i} movie={el} />
      ))}
    </div>
  );
}

export default MovieList;