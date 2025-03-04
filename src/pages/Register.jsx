// import React, { useState } from 'react';
// import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../components/Header';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
    

//     return (
//         <>
//             <Header insideLogin='inside' Login='login' />
//             <Container className="d-flex justify-content-center align-items-center vh-100">
//                 <Card style={{ width: '36rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
//                     <h2 className="text-center mb-4">Register</h2>
//                     <Form>
//                         <Stack direction='horizontal' gap={3}>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control  style={{ padding: ".375rem 2.75rem" }} type="text" placeholder="Enter Name" required />
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control  style={{ padding: ".375rem 2.75rem" }} type="email" placeholder="Enter Email" required />
//                             </Form.Group>
                            
//                         </Stack>


//                         <Stack direction='horizontal' gap={3}>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Address</Form.Label>
//                                 <Form.Control  style={{ padding: ".375rem 2.75rem" }} type="text" placeholder="Enter Address" required />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Location</Form.Label>
//                                 <Form.Control  style={{ padding: ".375rem 2.75rem" }} type="text" placeholder="Enter Location" required />
//                             </Form.Group>
//                         </Stack>

//                         <Stack direction='horizontal' gap={3}>

//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Phone Number</Form.Label>
//                                 <Form.Control  style={{ padding: ".375rem 2.75rem" }} type="number" placeholder="Enter PhoneNumber" required />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control  style={{ padding: ".375rem 2.75rem" }} type="password" placeholder="Enter Password" required />
//                             </Form.Group>

//                         </Stack>

//                         <Stack direction='horizontal' gap={3}>

                            

                            
//                         </Stack>


//                         <Button  variant="primary" type="submit" className="w-100">
//                             Register
//                         </Button>


//                     </Form>

//                     <div className="text-center mt-3">
                        <p>
                            Already have an account ? <Link to="/login" className="text-primary">Login</Link>
                        </p>
//                     </div>
//                 </Card>
//             </Container>
//         </>
//     )
// }

// export default Register