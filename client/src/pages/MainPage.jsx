import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Row, Col, Button, Table, Card, ListGroup } from "react-bootstrap";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";

import Footer from "../components/Footer";
import { blogCategory } from "../static/blogCategory";
import classes from "../components/Category.module.css";
import Header from "../components/Header";
import { getBlogByCategoryAPI } from "../redux/action/blogAction";
import { useEffect } from "react";
import { useCallback } from "react";
import isEmpty from "../utils/isEmpty";

const MainPage = () => {
  const blogs = useSelector((store) => store.blogs);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category")
    ? searchParams.get("category")
    : "All";
  const handleCategory = useCallback(() => {
    dispatch(getBlogByCategoryAPI(category));
  }, [category, dispatch]);

  useEffect(() => {
    handleCategory();
  }, [handleCategory]);

  return (
    <>
      <Header />
      <Banner />
      <Row>
        <Col lg={3} sm={12}>
          <Link to={`/create?category=${category ? category : ""}`}>
            <div className="d-grid gap-2 mt-2 mx-3">
              <Button variant="primary">Create Blog</Button>
            </div>
          </Link>

          <div className={classes.container}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th className="d-flex justify-content-center">CATEGORY</th>
                </tr>
              </thead>
              <tbody>
                {blogCategory.map((category) => (
                  <tr key={category.idx}>
                    <td className="d-flex justify-content-center">
                      <Link
                        to={`/?category=${category.name}`}
                        value={category.name}
                        onChange={handleCategory}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {category.name}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col lg={9} sm={12} className="d-flex justify-content-center">
          <Row>
            {blogs ? (
              blogs.map((blog) => (
                <Col lg={3} sm={12} className="mx-4 mt-2">
                  <BlogCard blog={blog} />
                </Col>
              ))
            ) : (
              <p>No blog Found</p>
            )}
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
