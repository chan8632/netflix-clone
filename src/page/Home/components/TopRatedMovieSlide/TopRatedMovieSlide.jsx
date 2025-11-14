import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsives } from "../../../../constants/responsive";
import { useTopRatedMovie } from "../../../../hooks/useTopRatedMovie";
const TopRatedMovieSlide = () => {
  const {  data, isError, error } = useTopRatedMovie();
  if (isError) return <Alert variant={"danger"}>{error.message}</Alert>;

  return (
    <MovieSlider
      title={"Top Rated Moive"}
      responsive={responsives}
      movies={data.results}
    />
  );
};

export default TopRatedMovieSlide;
