import { useState } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import "./Banner.style.css";
import TrailerModal from "../TrailerModal/TrailerModal";
import { Button } from "react-bootstrap";
const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const { isLoading, data, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data?.results[0].backdrop_path})`,
      }}
      className="banner"
    >
      <div className="banner-text-area text-white">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
        <Button variant="light" onClick={() => setModalShow(true)}>
          ▶ trailer play
        </Button>

        <TrailerModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          movieId={data?.results[0].id}
        />
      </div>
    </div>
  );
};

export default Banner;
