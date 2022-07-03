import React from "react";
import {
  Carousel,
  Form,
  Button,
  Col,
  Alert,
  Container,
  Row,
} from "react-bootstrap";
import bannerImage from "../static/bannerImage.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from "../components/CarouselImage.module.css";
import { blog } from "../static/blog";
import { comments } from "../static/comments";
import DeleteBtnIcon from "../components/DeleteBtnIcon";

const ViewBlog = () => {
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className={classes.blogimage}
            src={blog.image ? blog.image : bannerImage}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="d-flex justify-content-between my-3">
          <h4>Category: {blog.category}</h4>
          <span>
            <Button variant="secondary">Update</Button>
            <Button variant="danger" className="mx-3">
              <DeleteBtnIcon />
            </Button>
          </span>
        </div>
        <Alert variant="success">
          <Alert.Heading>{blog.title}</Alert.Heading>
          <div className="d-flex justify-content-between mb-0">
            <p>By-{blog.authorName}</p>
            <p>Published on: {blog.date}</p>
          </div>
          <hr />
          <p>{blog.content}</p>
        </Alert>

        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Add Comment</Form.Label>
                <Form.Control type="text" placeholder="comment......" />
              </Form.Group>
              <Button variant="success">Post</Button>
            </Form>
          </Col>
          <Col>
            <h5>All Comments</h5>
            <hr />
            {comments.map(({ text, user }) => (
              <div className="border border-dark rounded mb-2 d-flex justify-content-between">
                <p className="mx-2">{text}</p>
                {user === blog.authorName ? (
                  <Button variant="danger" className="my-1 mx-2">
                    <DeleteBtnIcon />
                  </Button>
                ) : (
                  <p className="mx-2">:{user}</p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ViewBlog;
