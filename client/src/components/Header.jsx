import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav, Navbar, Container } from "react-bootstrap";
import bdicon from "../static/bdicon.jpg";
import { logoutUserAPI } from "../redux/action/userAction";
import { useEffect } from "react";
import { getUserDetail } from "../utils/getUserDetail";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    let temp = getUserDetail();
    setUser(temp);
  }, []);
  console.log(user);
  const handleLogout = () => {
    dispatch(logoutUserAPI());
    navigate("/account");
  };
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              <img
                alt=""
                src={bdicon}
                width="30"
                height="30"
                className="d-inline-block align-top mx-3"
              />
              BlogDunia
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className="mt-2"
                style={{ textDecoration: "none", color: "white" }}
              >
                {user && user.name}
              </NavLink>
              <Nav.Link to="/account" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
