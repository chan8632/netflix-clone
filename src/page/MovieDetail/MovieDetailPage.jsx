import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import Banner from "./components/Banner/Banner";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import { Col, Container, Row } from "react-bootstrap";
import RelatedMovies from "./components/RelatedMovies/RelatedMovies";
import Review from "./components/Review/Review";
import { Suspense } from "react";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
const MovieDetailPage = () => {
  const { id } = useParams();
  const { data } = useMovieDetail({ movieId: id });
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Banner movieData={data} />
      <MovieInfo movieData={data} />
      <RelatedMovies movieId={id} />
      <Review movieId={id} />
    </Suspense>
  );
};

export default MovieDetailPage;
