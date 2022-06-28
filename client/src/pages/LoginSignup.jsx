import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import classes from "./LoginSignup.module.css";

const LoginSignup = () => {
  const [toggle, setToggle] = useState(false);
  const CLIENT_ID =
    "218738698611-eu5lg0nrfjn01a2v5m9omh7av29rhiv9.apps.googleusercontent.com";
  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  const responseSuccessGoogle = (response) => {
    console.log("Success", response);
  };

  const responseErrorGoogle = (response) => {
    console.log("Error", response);
  };

  return (
    <>
      <div className={classes.centerCard}>
        <Container className="d-flex justify-content-center align-item-center">
          <Card border="dark" style={{ width: "20rem" }}>
            <Card.Title className="mt-3 mx-5">Welcome to BlogDunia</Card.Title>
            <Card.Body>
              {toggle ? (
                <>
                  <Form noValidate>
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
                  <div className="d-grid gap-2 mt-3">
                    <GoogleLogin
                      className={classes.googlebtn}
                      clientId={CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
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
                  <div className="d-grid gap-2 mt-3">
                    <GoogleLogin
                      className={classes.googlebtn}
                      clientId={CLIENT_ID}
                      buttonText="Signup with Google"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
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
