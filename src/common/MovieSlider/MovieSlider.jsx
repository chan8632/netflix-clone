import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";
import { Alert, Col, Container, Row } from "react-bootstrap";

const MovieSlider = ({ title, responsive, movies }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>{title}</h3>
          </Col>
        </Row>
      </Container>
      {movies.length === 0 ? (
        <Alert variant={"warning"}>관련 영화가 없습니다.</Alert>
      ) : (
        <Carousel
          infinite={true}
          centerMode={true}
          containerClass="carousel-container"
          itemClass="move-slider p-1"
          responsive={responsive}
        >
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MovieSlider;
