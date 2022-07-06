import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import classes from "./LoginSignup.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginUserAPI, registerUserAPI } from "../redux/action/userAction";
import { useEffect } from "react";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const status = useSelector((store) => store.message, shallowEqual);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(registerUserAPI(user));
    if (status.success) {
      status.message.length && window.alert(status.message);
      setToggle(true);
    } else {
      status.message.length && window.alert(status.message);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginUserAPI(user));
    if (status.success) {
      status.message.length && window.alert(status.message);
      navigate("/");
    } else {
      status.message.length && window.alert(status.message);
    }
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
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                      />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button variant="success" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <p onClick={handleToggle} className={classes.toggle}>
                    New to BlogDunia
                  </p>
                </>
              ) : (
                <>
                  <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button variant="success" type="submit">
                        SignUp
                      </Button>
                    </div>
                  </Form>
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
