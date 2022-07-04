import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getBlogByCategoryAPI } from "../../redux/action/blogAction";
import { Col } from "react-bootstrap";
import Post from "./Post";

const Posts = () => {
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
      {blogs?.length ? (
        blogs.map((blog) => (
          <Col lg={3} sm={4} xs={12}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${blog._id}`}
            >
              <Post blog={blog} />
            </Link>
          </Col>
        ))
      ) : (
        <div style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </div>
      )}
    </>
  );
};

export default Posts;
