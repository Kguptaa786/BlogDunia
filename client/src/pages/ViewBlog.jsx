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
import DeleteBtnIcon from "../components/DeleteBtnIcon";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteBlogAPI, detailBlogAPI } from "../redux/action/blogAction";
import { getUserDetail } from "../utils/getUserDetail";
import { useState } from "react";
import {
  getBlogCommentsAPI,
  postCommentAPI,
} from "../redux/action/commentAction";
import { deleteCommentAPI } from "../service/api";

let comment = {
  text: "",
  userName: "",
  blogId: "",
  userId: "",
};

let user;
const ViewBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const blogId = params.blogId;
  const [commentText, setCommentText] = useState("");
  const blog = useSelector((store) => store.blog);
  const comments = useSelector((store) => store.comments);
  // const [commentId,setCommentId]=useState("");

  useEffect(() => {
    user = getUserDetail();
  }, []);

  useEffect(() => {
    dispatch(detailBlogAPI(blogId));
  }, [blogId, dispatch]);

  //api call for all comment
  useEffect(() => {
    dispatch(getBlogCommentsAPI(blogId));
  }, [dispatch, blogId]);

  const handleCommentPost = (event) => {
    event.preventDefault();
    comment.text = commentText;
    comment.userId = user.userId;
    comment.blogId = blogId;
    comment.userName = user.name;
    //api call
    dispatch(postCommentAPI(comment));
    setCommentText("");
    dispatch(getBlogCommentsAPI(blogId));
    // window.location.reload();
  };

  const helper = async (commentId) => {
    let data = await deleteCommentAPI(commentId);
    if (data.success) {
      dispatch(getBlogCommentsAPI(blogId));
      return;
    }
  };
  const handleCommentDelete = (commentId) => {
    helper(commentId);
  };

  const handleBlogDelete = () => {
    dispatch(deleteBlogAPI(blogId));
    navigate("/");
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
      <Container>
        <div className="d-flex justify-content-between my-3">
          <h4>Category: {blog.category}</h4>
          {user && blog.user === user.userId ? (
            <span>
              <Link to={`/update/${blogId}`}>
                <Button variant="secondary">Update</Button>
              </Link>
              <Button
                variant="danger"
                className="mx-3"
                onClick={handleBlogDelete}
              >
                <DeleteBtnIcon />
              </Button>
            </span>
          ) : (
            <></>
          )}
        </div>
        <Alert variant="success">
          <Alert.Heading>{blog.title}</Alert.Heading>
          <div className="d-flex justify-content-between mb-0">
            <p>By-{blog.userName}</p>
            <p>Published on: {blog.date}</p>
          </div>

          <p>{blog.content}</p>
        </Alert>

        <Row>
          <Col>
            <Form onSubmit={handleCommentPost}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Add Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="comment......"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="success" className="mb-2">
                Post
              </Button>
            </Form>
          </Col>
          <Col>
            <h5>All Comments</h5>
            <hr />
            {comments && comments.length ? (
              comments.map((comment) => (
                <div
                  className="border border-dark rounded mb-2 d-flex justify-content-between"
                  key={comment._id}
                >
                  <p className="mx-2">{comment.text}</p>
                  {comment.user === user.userId ? (
                    <Button
                      variant="danger"
                      className="my-1 mx-2"
                      value={comment._id}
                      onClick={() => handleCommentDelete(comment._id)}
                    >
                      <DeleteBtnIcon />
                    </Button>
                  ) : (
                    <p className="mx-2">:{comment.userName}</p>
                  )}
                </div>
              ))
            ) : (
              <p>No comment available....</p>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ViewBlog;
