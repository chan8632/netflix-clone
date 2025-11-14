import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default LoadingSpinner;
