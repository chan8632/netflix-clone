import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./PopularMovieSlide.style.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsives } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { isLoading, data, isError, error } = usePopularMoviesQuery();
  if (isLoading) return <div>isLoading</div>;
  if (isError) return <Alert variant={"danger"}>{error.message}</Alert>;
  return (
    <MovieSlider
      title={"Popular Movie"}
      responsive={responsives}
      movies={data.results}
    />
  );
};

export default PopularMovieSlide;
