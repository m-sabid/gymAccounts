import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const LoginLogOut = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        console.warn(email, password);
    }
  return (
    <div>
      {/* <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label onChange={(e)=>setEmail(e.target.value)}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label onChange={(e)=>setPassword(e.target.value)}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={login} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container> */}
    </div>
  );
};

export default LoginLogOut;
