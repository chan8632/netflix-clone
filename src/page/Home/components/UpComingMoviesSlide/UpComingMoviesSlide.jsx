import React from "react";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
const UpComingMoviesSlide = () => {
  const { isLoading, data, isError, error } = useUpComingMoviesQuery();
  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>{error.message}</div>;
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
      <h3>Upcoming Movies</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {data.results.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default UpComingMoviesSlide;
