import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfoText from "../InfoText/InfoText";
import errorImg from "../../../../assets/imageError.png";
const MovieInfo = ({ movieData }) => {
  const handleImgError = (e) => (e.target.src = errorImg);
  return (
    <Container className="mb-5">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            style={{
              width: "300px",
              height: "450px",
            }}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieData?.poster_path}`}
            onError={handleImgError}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <InfoText movieData={movieData} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieInfo;
