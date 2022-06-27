import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import classes from "./Login.module.css";
const LoginSignup = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };
  return (
    <>
      <div className={classes.centerCard}>
        <Container className="d-flex justify-content-center align-item-center">
          <Card border="dark" style={{ width: "20rem" }}>
            <Card.Body>
              {toggle ? (
                <>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button variant="success" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="d-grid gap-2">
                    <Button className="mt-3 block-button" variant="secondary">
                      <span className={classes.googleicon}>
                        <img
                          src="https://img.icons8.com/color/16/000000/google-logo.png"
                          alt=""
                        />
                      </span>
                      Login with Google
                    </Button>
                  </div>
                  <p onClick={handleToggle} className={classes.toggle}>
                    New to BlogDunia
                  </p>
                </>
              ) : (
                <>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button variant="success" type="submit">
                        SignUp
                      </Button>
                    </div>
                  </Form>
                  <div className="d-grid gap-2">
                    <Button className="mt-3 block-button" variant="secondary">
                      <span className={classes.googleicon}>
                        <img
                          src="https://img.icons8.com/color/16/000000/google-logo.png"
                          alt=""
                        />
                      </span>
                      SignUp with Google
                    </Button>
                  </div>
                  <p onClick={handleToggle} className={classes.toggle}>
                    Already have account
                  </p>
                </>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default LoginSignup;
