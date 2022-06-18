import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import "./styles.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signupcontainer">
      <div
        style={{
          marginTop: "-20px",
        }}
      >
        <img
          src={require("./logo.jpg")}
          alt=""
          style={{
            width: "70px",
            height: "70px",
            marginLeft: "-3px",
            marginTop: "-30px",
          }}
        ></img>
        <h2 className="head"> Sign-up</h2>
        <img
          src={require("./logo.jpg")}
          alt=""
          style={{
            width: "70px",
            height: "70px",
            marginLeft: "530px",
            marginTop: "-80px",
          }}
        ></img>
      </div>
      <div className="formContainer">
        <div className="p-4 box">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="inputContainer" controlId="formBasicEmail">
              Email
              <Form.Control
                className="input"
                type="email"
                style={{ marginLeft: "50px" }}
                placeholder="Enter Your Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="inputContainer"
              controlId="formBasicPassword"
            >
              Password
              <Form.Control
                type="password"
                className="input"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="buttonContainer">
              <Button className="btnContainer" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="LoginPart">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
