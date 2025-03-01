import React from 'react'
import { Container, Form, Button, Card, Stack } from 'react-bootstrap';

const AdminKidsAdd = () => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: '36rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
                    <h2 className="text-center mb-4">Kids Product</h2>
                    <Form>
                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control style={{ padding: ".375rem 2.75rem" }} type="password" placeholder="Enter Name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control style={{ padding: ".375rem 2.75rem" }} type="password" placeholder="Enter Google Map Link" required />
                            </Form.Group>
                        </Stack>


                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control style={{ padding: ".375rem 2.75rem" }} type="password" placeholder="Enter Address" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control style={{ padding: ".375rem 2.75rem" }} type="email" placeholder="Enter Email" required />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ratting</Form.Label>
                                <Form.Control style={{ padding: ".375rem 2.75rem" }} type="email" placeholder="Enter PhoneNumber" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="Upload Image" required />
                            </Form.Group>

                        </Stack>




                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>


                    </Form>


                </Card>
            </Container>
        </>
    )
}

export default AdminKidsAdd