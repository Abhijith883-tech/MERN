import React from 'react'
import { Container, Form, Button, Card, Stack } from 'react-bootstrap';

import Header from '../components/Header'
import { Link } from 'react-router-dom';
const ProfileEdit = () => {
    return (
        <>
            <Header />
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: '20rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
                    <h2 className="text-center mb-4">Register</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control style={{ padding: ".375rem 2.75rem" }} type="Name" placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control style={{ padding: ".375rem 2.75rem" }} type="Address" placeholder="Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control style={{ padding: ".375rem 2.75rem" }} type="Email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control style={{ padding: ".375rem 2.75rem" }} type="Phone Number" placeholder="Phone Number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control style={{ padding: ".375rem 2.75rem" }} type="Password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default ProfileEdit