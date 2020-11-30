import React from "react";
import "./MovieCard.css";
import Rate from "../Rate/Rate";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function MovieCard({ movie }) {
  return (
    <div className="cardMovie">
      <div className="card_left">
        <img src={movie.Poster} alt="MoviePoster" />
      </div>
      <div className="card_right">
        <h1>{movie.Name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movie.Year}</li>
            <li>||</li>
            <li>{movie.Genre}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate Rating={movie.Rating} />
        </div>
        <div className="card_right__review">
          <p>{movie.Description}</p>
          <Link to={`/Movie/${movie.Id}`}>
          <Button >Read more</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
MovieCard.propTypes = { movies: PropTypes.object };
