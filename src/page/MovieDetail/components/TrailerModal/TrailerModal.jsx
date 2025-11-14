import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { useTrailerId } from "../../../../hooks/useTrailerId";
import { Col, Container, Row } from "react-bootstrap";
import "./TrailerModal.style.css";
const TrailerModal = ({ movieId, ...rest }) => {
  const opts = {
    width: "100%",
    height: "100%",
  };
  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const { data } = useTrailerId({ movieId });
  console.log("tt", data);
  return (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-bs-theme="dark"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="bg-dark ">
        <div className="player-wrapper">
          <YouTube
            videoId={data?.results[0]?.key}
            onReady={onReady}
            opts={opts}
            className="yt-container"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TrailerModal;
