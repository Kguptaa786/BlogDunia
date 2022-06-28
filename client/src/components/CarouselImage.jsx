import React from "react";
import { Carousel, Container } from "react-bootstrap";
import bannerImage from "../static/bannerImage.jpeg";
import classes from "./CarouselImage.module.css";
const CarouselImage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className={classes.blogimage}
            src={bannerImage}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselImage;
