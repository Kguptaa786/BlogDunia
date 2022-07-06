import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import classes from "./LoginSignup.module.css";
import { useDispatch } from "react-redux";
import { loginUserAPI, registerUserAPI } from "../service/api";
import { useEffect } from "react";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  // const status = useSelector((store) => store.message);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    if (!user.name || !user.password || !user.email) {
      window.alert("all field are required");
      return;
    }
    let data = await registerUserAPI(user);
    if (data.success) {
      window.alert(data.message);
      setToggle(true);
    } else {
      window.alert(data.message);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    if (!user.email || !user.password) {
      window.alert("all field are required");
      return;
    }
    let data = await loginUserAPI(user);
    if (data.success) {
      window.alert(data.message);
      navigate("/");
    } else {
      window.alert(data.message);
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
