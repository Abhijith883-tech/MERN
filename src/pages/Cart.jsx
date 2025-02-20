import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Table, Button, FormControl, Card } from "react-bootstrap";


const Cart = () => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '100px' }}>
      <h1 className="fw-bold text-primary">Cart Summary</h1>
      <Row className="mt-4">
        {/* Cart Items Section */}
        <Col md={8}>
          <Card className="shadow border p-4">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Title</td>
                  <td>
                    <img src="" alt="Product" height="70px" width="70px" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-secondary" size="sm" className="fw-bold">-</Button>
                      <FormControl type="text" className="mx-2 text-center" style={{ width: '40px' }}/>
                      <Button variant="outline-secondary" size="sm" className="fw-bold">+</Button>
                    </div>
                  </td>
                  <td>$5</td>
                  <td>
                    <Button variant="danger" size="sm">
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="danger" className="me-3">Empty Cart</Button>
              <Link to={'/'} className="btn btn-primary">Shop More</Link>
            </div>
          </Card>
        </Col>

        {/* Total Summary Section */}
        <Col md={4}>
          <Card className="shadow border p-4">
            <h2 className="fw-bold my-3">
              Total Amount: <span className="text-danger">$5</span>
            </h2>
            <hr />
            <Button variant="success" className="w-100 mt-3">Check Out</Button>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Cart