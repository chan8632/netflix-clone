import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, responsive, movies }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="move-slider p-1"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
