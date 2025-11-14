import React from "react";
import { useRelatedMovie } from "../../../../hooks/useRelatedMovie";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsives } from "../../../../constants/responsive";
import { Alert } from "react-bootstrap";

const RelatedMovies = ({ movieId }) => {
  const { data, isError, error } = useRelatedMovie({ movieId });
  console.log("rerer", data);
  if (isError) return <Alert variant={"danger"}>{error.message}</Alert>;
  return (
    <MovieSlider
      title={"Related Movies"}
      responsive={responsives}
      movies={data?.results}
    />
  );
};

export default RelatedMovies;
