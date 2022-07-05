import { Card } from "react-bootstrap";
const Post = ({ blog }) => {
  const url = blog.image
    ? blog.image
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={url}
        style={{ width: "100%", height: "15vw", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          <u>{blog.title}</u>
        </Card.Title>
        <Card.Text className="d-flex justify-content-center">
          {addEllipsis(blog.content, 100)}
        </Card.Text>
        <Card.Text className="d-flex justify-content-center">
          <b>by- {blog.userName}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
