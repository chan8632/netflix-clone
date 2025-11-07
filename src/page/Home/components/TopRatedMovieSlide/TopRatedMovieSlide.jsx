import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTopRatedMovie } from "../../../../hooks/useTopRatedMovie";
import { Alert } from "react-bootstrap";
import MovieCard from "./../MovieCard/MovieCard";
const TopRatedMovieSlide = () => {
  const { isLoading, data, isError, error } = useTopRatedMovie();
  if (isLoading) return <div>isLoading</div>;
  if (isError) return <Alert variant={"danger"}>{error.message}</Alert>;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
  return (
    <div>
      <h3>Top rated Movies</h3>
      <Carousel
        responsive={responsive}
        centerMode={true}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.results.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default TopRatedMovieSlide;
