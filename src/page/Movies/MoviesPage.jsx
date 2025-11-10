import { useSearchParams } from "react-router-dom";
import { useSearchMovie } from "./../../hooks/useSearchMovie";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./../../common/MovieCard/MovieCard";
import "./MoviesPage.style.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { isLoading, data, isError, error } = useSearchMovie(query);
  console.log(data);
  if (isLoading) return <div>search data loading</div>;
  if (isError) return <div>에러메세지 : {error.message}</div>;

  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className="card-list">
          필터
        </Col>
        <Col xs={12} md={8}>
          <Row>
            {data.results.map((movie, index) => (
              <Col key={index} className="card-list">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
