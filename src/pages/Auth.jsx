import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';


const Auth = ({ insiderRegister }) => {
  return (
    
    <>
    <Header insideLogin='inside' Login='login' />
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '22rem', background: 'rgba(26, 75, 138, 0.2)', backdropFilter: 'blur(10px)' }} className="p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        <Form>
          {
            insiderRegister &&
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
          }
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required />
          </Form.Group>

          {
            insiderRegister ?
              <div></div>
              :
              <Form.Group className="d-flex justify-content-between mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="#" className="text-decoration-none">Forgot Password?</a>
              </Form.Group>
          }

          {
            insiderRegister ?
              <Button variant="primary" type="submit" className="w-100">
                Regsiter
              </Button>
              :
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
          }
        </Form>

        <div className="text-center mt-3">
          {
            insiderRegister ?
              <p>
                Already have an account ? <a href="/login" className="text-primary">Login</a>
              </p>
              :
              <p>
                Don't have an account ? <a href="/register" className="text-primary">Register</a>
              </p>
          }
        </div>
      </Card>
    </Container>
    </>
  );
};

export default Auth;