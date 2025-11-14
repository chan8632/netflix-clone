import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsives } from "../../../../constants/responsive";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";
const UpComingMoviesSlide = () => {
  const {  data, isError, error } = useUpComingMoviesQuery();
  if (isError) return <div>{error.message}</div>;

  return (
    <MovieSlider
      title={"up coming movie"}
      responsive={responsives}
      movies={data.results}
    />
  );
};

export default UpComingMoviesSlide;
