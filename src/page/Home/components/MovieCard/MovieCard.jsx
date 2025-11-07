import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  console.log("mmm", movie);
  return (
    <div>
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w220_and_h330_face/${movie?.poster_path})`,
        }}
        className="movie-card"
      >
        <div className="overlay">
          <h4>{movie?.title}</h4>
          {movie?.genre_ids.map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
          <div>{movie?.vote_average}</div>
          <div>{movie?.popularity}</div>
          <div>{movie?.adult ? "adult" : "under 18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
