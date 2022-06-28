import React from "react";
import { Container } from "react-bootstrap";
import CarouselImage from "../components/CarouselImage";
import Header from "../components/Header";
const ViewBlog = () => {
  return (
    <>
      <Header />
      <Container>
        <CarouselImage />
      </Container>
    </>
  );
};

export default ViewBlog;
