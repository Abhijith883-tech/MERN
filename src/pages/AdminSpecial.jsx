import React, { useState } from 'react';
import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { specialAPI } from '../services/allAPI';

const AdminSpecial = () => {
    const [inputMen, setMen] = useState({
        name: "", gender: "", brand: "", price: "", specialPrice: "",
        mainImage: "", image1: "", image2: "", image3: "", image4: "", stock: "",discount:""
    });
    console.log(inputMen);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const stockNumber = parseInt(inputMen.stock, 10);
        if (isNaN(stockNumber) || stockNumber < 0) {
            alert("Stock must be a non-negative number!");
            return;
        }
        try {
            const result = await specialAPI({ ...inputMen, stock: stockNumber});
            console.log("API Response:", result); // Check if response is received ✅
            if (result.status === 201) {
                alert(`Product ${result.data.product.name} successfully added`);
                setMen({ name: "", gender: "", brand: "", price: "", specialPrice: "",
                    mainImage: "", image1: "", image2: "", image3: "", image4: "", stock: "",discount:""});
                navigate('/admin/kids');
            }
        } catch (error) {
            console.error("Error Calling API:", error.response?.data || error.message);
        }
    };
    
    
    

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: '36rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
                    <h2 className="text-center mb-4">Add Women Product</h2>
                    <Form onSubmit={handleSubmit}>
                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={inputMen.name} onChange={e => setMen({ ...inputMen, name: e.target.value })} type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Discount</Form.Label>
                                <Form.Control value={inputMen.discount} onChange={e => setMen({ ...inputMen, discount: e.target.value })} type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Stack>

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <div>
                                <Form.Check inline label="Male" type="radio" name="gender" value="Male" checked={inputMen.gender === "Male"} onChange={e => setMen({ ...inputMen, gender: e.target.value })}/>
                                <Form.Check inline label="Female" type="radio" name="gender" value="Female" checked={inputMen.gender === "Female"} onChange={e => setMen({ ...inputMen, gender: e.target.value })}/>
                                <Form.Check inline label="Kids" type="radio" name="gender" value="Kids" checked={inputMen.gender === "Kids"} onChange={e => setMen({ ...inputMen, gender: e.target.value })}/>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control value={inputMen.brand} onChange={e => setMen({ ...inputMen, brand: e.target.value })} type="text" placeholder="Brand" />
                        </Form.Group>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Main Image</Form.Label>
                                <Form.Control value={inputMen.mainImage} onChange={e => setMen({ ...inputMen, mainImage: e.target.value })} type="text" placeholder="Main Image URL" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image1</Form.Label>
                                <Form.Control value={inputMen.image1} onChange={e => setMen({ ...inputMen, image1: e.target.value })} type="text" placeholder="Image1 URL" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image2</Form.Label>
                                <Form.Control value={inputMen.image2} onChange={e => setMen({ ...inputMen, image2: e.target.value })} type="text" placeholder="Image2 URL" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image3</Form.Label>
                                <Form.Control value={inputMen.image3} onChange={e => setMen({ ...inputMen, image3: e.target.value })} type="text" placeholder="Image3 URL" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image4</Form.Label>
                                <Form.Control value={inputMen.image4} onChange={e => setMen({ ...inputMen, image4: e.target.value })} type="text" placeholder="Image4 URL" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Stock Count</Form.Label>
                                <Form.Control value={inputMen.stock} onChange={e => setMen({ ...inputMen, stock: e.target.value })} type="number" placeholder="Stock Count" min="0" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control value={inputMen.price} onChange={e => setMen({ ...inputMen, price: e.target.value })} type="number" placeholder="Price" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Actual Price</Form.Label>
                                <Form.Control value={inputMen.specialPrice} onChange={e => setMen({ ...inputMen, specialPrice: e.target.value })} type="number" placeholder="Actual Price" />
                            </Form.Group>
                        </Stack>

                        <Button type="submit" className="w-100">
                            Add Product
                        </Button>
                    </Form>
                </Card>
            </Container>
        </>
    );
};

export default AdminSpecial;