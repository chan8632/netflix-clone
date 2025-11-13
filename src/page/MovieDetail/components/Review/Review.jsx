import React from "react";
import { useReview } from "../../../../hooks/useReview";
import { Card, Col, Container, Row } from "react-bootstrap";

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
              <Card
                bg={"dark"}
                text={"dark".toLowerCase() === "light" ? "dark" : "white"}
                className="m-4"
              >
                <Card.Header>{review.author}</Card.Header>
                <Card.Body>
                  <Card.Text>{review.content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
