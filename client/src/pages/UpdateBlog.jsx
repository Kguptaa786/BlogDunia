import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddBtnIcon from "../components/AddBtnIcon";
import bannerImage from "../static/bannerImage.jpeg";
import classes from "../components/CarouselImage.module.css";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateBlogAPI } from "../redux/action/blogAction";
import { helperGetBlogDetail, uploadImageAPI } from "../service/api";

const initialBlog = {
  title: "",
  category: "",
  content: "",
  image: "",
  user: "",
  userName: "",
};

let imgUrl = "";
const UpdateBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState(initialBlog);

  useEffect(() => {
    const fetchData = async () => {
      let temp = await helperGetBlogDetail(blogId);
      setBlog(temp);
    };
    fetchData();
  }, [blogId]);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        setIsLoading(true);
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        imgUrl = await uploadImageAPI(data);
        if (imgUrl && imgUrl.length > 0) {
          setIsLoading(false);
        }
      }
    };
    getImage();
  }, [file]);

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    blog.image = imgUrl;
    dispatch(updateBlogAPI(blog, blog._id));
    navigate(`/detail/${blog._id}`);
  };

  const handleChange = (event) => {
    setBlog({ ...blog, [event.target.name]: event.target.value });
  };

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
      <Container className="my-3">
        <Form onSubmit={handleBlogSubmit}>
          <Row>
            <Col lg={1}>
              <label
                htmlFor="fileinput"
                style={{ marginLeft: "1rem", cursor: "pointer" }}
              >
                <AddBtnIcon />
              </label>
              <input
                id="fileinput"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
                accept=".jpeg,.jpg,.png"
              />
            </Col>
            <Col lg={11}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={blog.title}
                  name="title"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Write your blog....."
          >
            <Form.Control
              onChange={(e) => handleChange(e)}
              name="content"
              as="textarea"
              value={blog.content}
              placeholder="Leave a comment here"
              style={{ height: "200px" }}
            />
          </FloatingLabel>
          <div className="d-flex justify-content-end mt-3">
            {!isLoading ? (
              <Button type="submit">Update</Button>
            ) : (
              <p>Image is uploading...</p>
            )}
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default UpdateBlog;
