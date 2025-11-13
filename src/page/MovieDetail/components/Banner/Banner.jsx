import { useState } from "react";
import "./Banner.style.css";
import TrailerModal from "../TrailerModal/TrailerModal";
import { Button } from "react-bootstrap";
const Banner = ({ movieData }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieData?.backdrop_path})`,
      }}
      className="banner"
    >
      <div className="banner-text-area text-white">
        <h1>{movieData?.title}</h1>
        <p>{movieData?.overview}</p>
        <Button variant="light" onClick={() => setModalShow(true)}>
          ▶ trailer play
        </Button>

        <TrailerModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          movieId={movieData?.id}
        />
      </div>
    </div>
  );
};

export default Banner;
