import React from "react";
import { useDispatch } from "react-redux";
import { Nav, Navbar, Container } from "react-bootstrap";
import bdicon from "../static/bdicon.jpg";
import { logoutUserAPI } from "../redux/action/userAction";
const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserAPI());
  };
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={bdicon}
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />
            BlogDunia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/account" onClick={handleLogout}>
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
