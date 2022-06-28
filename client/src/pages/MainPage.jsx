import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Row>
        <Col lg={3} sm={12}>
          <div className="d-grid gap-2 mt-3 mx-3">
            <Button variant="primary">Create Blog</Button>
            <Category />
          </div>
        </Col>
        <Col lg={9} sm={12} className="d-flex justify-content-center">
          <Row>
            <Col lg={3} sm={12} className="mx-4 mt-2">
              <BlogCard />
            </Col>
            <Col lg={3} sm={12} className="mx-4 mt-2">
              <BlogCard />
            </Col>
            <Col lg={3} sm={12} className="mx-4 mt-2">
              <BlogCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
