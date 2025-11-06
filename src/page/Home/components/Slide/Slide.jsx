import React from "react";
import Carousel from "react-multi-carousel";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import { Alert } from "react-bootstrap";

const Slide = () => {
  const { isLoading, data, isError, error } = usePopularMoviesQuery();
  if (isLoading) return <div>isLoading</div>;
  if (isError) return <Alert variant={"danger"}>{error.message}</Alert>;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  console.log(data.results);
  return (
    <div>
      <h3>Popuplar Movies</h3>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.results.map((item) => (
          <div>{item.title}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
