import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getBlogByCategoryAPI } from "../../redux/action/blogAction";
import { Col } from "react-bootstrap";
import Post from "./Post";

const Posts = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  let blogs = store.blogs;
  const category = searchParams.get("category")
    ? searchParams.get("category")
    : "All";

  useEffect(() => {
    dispatch(getBlogByCategoryAPI(category));
  }, [dispatch, category]);

  return (
    <>
      {blogs?.length ? (
        blogs.map((blog) => (
          <Col
            key={blog._id}
            lg={4}
            sm={12}
            md={6}
            className="d-flex justify-content-center my-3"
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/detail/${blog._id}`}
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
