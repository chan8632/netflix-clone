import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import Banner from "./components/Banner/Banner";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import { Col, Container, Row } from "react-bootstrap";
import RelatedMovies from "./components/RelatedMovies/RelatedMovies";
const MovieDetailPage = () => {
  const { id } = useParams();
  const { data } = useMovieDetail({ movieId: id });
  return (
    <div>
      <Banner movieData={data} />
      <MovieInfo movieData={data} />
      <RelatedMovies movieId={id} />
    </div>
  );
};

export default MovieDetailPage;
