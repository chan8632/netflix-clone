import React from "react";
import Carousel from "react-multi-carousel";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const PopularMovieSlide = () => {
  const { isLoading, data, isError, error } = usePopularMoviesQuery();
  if (isLoading) return <div>isLoading</div>;
  if (isError) return <Alert variant={"danger"}>{error.message}</Alert>;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(data.results);
  return (
    <div>
      <h3>Popuplar Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="move-slider p-1"
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieSlide;
