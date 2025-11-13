import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";

const ReviewItem = ({ review }) => {
  const [fold, setFold] = useState(true);
  const [showAddButton, setShowAddButton] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      if (textRef.current.offsetHeight >= 100) {
        setShowAddButton(true);
      }
    }
  }, []);
  const handleHeight = () => {
    setFold((prev) => !prev);
  };
  return (
    <Card
      bg={"dark"}
      text={"dark".toLowerCase() === "light" ? "dark" : "white"}
      className="m-4"
    >
      <Card.Header>{review.author}</Card.Header>
      <Card.Body>
        <Card.Text
          className={`review-text-area ${fold ? "fold" : "expand"} mb-3`}
          ref={textRef}
        >
          {review.content}
          {showAddButton ? (
            <button className="add-button" onClick={handleHeight}>
              {fold ? "더보기" : "접기"}
            </button>
          ) : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewItem;
