import { Container, Col, Card, Button } from "react-bootstrap";
import classes from "./Post.module.css";
const Post = ({ blog }) => {
  console.log(typeof blog[0]);
  const url = blog.picture
    ? blog.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Col sm={12} lg={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* <div className={classes.container}>
        <img className={classes.img} src={url} alt="blog" />
        <p className={classes.text}>{blog.category}</p>
        {/* <p className={classes.heading}>{addEllipsis(blog.title, 20)}</p> */}
      {/* <p className={classes.heading}>Author: {blog.author}</p> */}
      {/* <p className={classes.details}>{addEllipsis(blog.content, 100)}</p> */}
      {/* </div> */} */}
    </Col>
  );
};

export default Post;
