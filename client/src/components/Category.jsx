import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { blogCategory } from "../static/blogCategory";
import classes from "./Category.module.css";
const Category = () => {
  const handleCateogry = (name) => {
    console.log(name);
  };
  return (
    <>
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
                  {/* <Link to={`/?category=${category.name}`}> */}
                  {category.name}
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Category;
