import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsives } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isError, error } = usePopularMoviesQuery();
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
