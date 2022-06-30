import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImage from "../static/bannerImage.jpeg";
import classes from "./CarouselImage.module.css";
const CarouselImage = ({ images }) => {
  images = images.length === 0 ? [...images, bannerImage] : images;

  return (
    <>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item>
            <img className={classes.blogimage} src={image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselImage;
