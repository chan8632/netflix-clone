import "react-multi-carousel/lib/styles.css";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
import { responsives } from "../../../../constants/responsive";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";
const UpComingMoviesSlide = () => {
  const { isLoading, data, isError, error } = useUpComingMoviesQuery();
  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <MovieSlide
      title={"up coming movie"}
      responsive={responsives}
      movies={data.results}
    />
  );
};

export default UpComingMoviesSlide;
