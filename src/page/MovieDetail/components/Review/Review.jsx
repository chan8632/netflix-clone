import { Alert, Col, Container, Row } from "react-bootstrap";
import { useReview } from "../../../../hooks/useReview";
import ReviewItem from "./components/ReviewItem";
import "./Review.style.css";

const Review = ({ movieId }) => {
  const { data } = useReview({ movieId });
  return (
    <div>
      <Container>
        <h3>Reviews</h3>
        <Row>
          <Col>
            {data.results.length !== 0 ? (
              data.results.map((review) => (
                <ReviewItem review={review} key={review.id} />
              ))
            ) : (
              <Alert variant="warning">리뷰가 없습니다.</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
