import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Description.css";

function Description({ Movielist, match }) {
  const movie = Movielist.find((el) => match.params.id === el.Id);

  return (
    <div style={{backgroundColor: "#061026"}}>
      <div className="Trailer-header">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <h1>{movie.Name}'s description</h1>
      </div>

      <br />
      <br />
      <div className="Trailer-container">
      <iframe
        title={movie.Id}
        width="800"
        height="400"
        src={movie.Trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <br />
      <p>{movie.Description}</p>
      <p> Director: {movie.Director}</p>
      <p>Writers: {movie.Writers}</p>
      <p>Stars: {movie.Stars}</p>
      </div>
      
    </div>
  );
}

export default Description;
