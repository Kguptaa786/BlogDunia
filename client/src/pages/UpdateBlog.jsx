import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselImage from "../components/CarouselImage";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const UpdateBlog = () => {
  const images = [];
  const handleBlogSubmit = () => {};
  return (
    <>
      <Header />
      <CarouselImage images={images} />
      <Container className="my-2">
        <h3>UPDATE BLOG</h3>
        <hr />
        <Form onSubmit={handleBlogSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Category" />
              </Form.Group>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control type="file" multiple />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Write your blog....."
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "200px" }}
            />
          </FloatingLabel>
          <div className="d-flex justify-content-end mt-3">
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default UpdateBlog;