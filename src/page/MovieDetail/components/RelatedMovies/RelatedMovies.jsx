import React from "react";
import { useRelatedMovie } from "../../../../hooks/useRelatedMovie";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsives } from "../../../../constants/responsive";

const RelatedMovies = ({ movieId }) => {
  const { isLoading, data, isError, error } = useRelatedMovie({ movieId });
  if (isLoading) return <div>isLoading</div>;
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
