import React, { useState } from "react";
import { useReview } from "../../../../hooks/useReview";
import "./Review.style.css";
import { Col, Container, Row } from "react-bootstrap";
import ReviewItem from "./components/ReviewItem";

const Review = ({ movieId }) => {
  const { data } = useReview({ movieId });
  console.log("rrr", data);
  return (
    <div>
      <Container>
        <h3>Reviews</h3>
        <Row>
          <Col>
            {data?.results.map((review) => (
              <ReviewItem review={review} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
