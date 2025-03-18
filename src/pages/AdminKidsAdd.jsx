import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
import { getKidProductsAPI, kidAPI } from '../services/allAPI';
import { useNavigate, useParams } from 'react-router-dom';

const AdminKidsAdd = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get product ID from URL (for editing)

    const [inputMen, setMen] = useState({
        name: "", gender: "Kid", brand: "", price: "", mainImage: "",
        Image1: "", Image2: "", Image3: "", Image4: "", stock: ""
    });
    // console.log(inputMen);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const result = await getKidProductsAPI(); // Fetch all products
                    console.log(result);
                    const product = result.data.find(p => p._id == id)
                    console.log(product);
                    if (product) setMen(product); // Set the form data with product details

                } catch (error) {
                    console.error("Error fetching product details:", error);
                }
            }
            fetchProduct()
        }
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate stock
        const stockNumber = parseInt(inputMen.stock, 10);
        if (isNaN(stockNumber) || stockNumber < 0) {
            alert("Stock must be a non-negative number!");
            return;
        }
        try {
            if (id) {
                // Update existing product
                const result = await editMenProductAPI(id, { ...inputMen, stock: stockNumber });
                console.log(result);
                if (result.status === 200) {
                    alert(`Product ${result.data.product.name} successfully updated`);
                    navigate('/admin/men');
                }
            } else {
                // Add new product
                const result = await kidAPI({ ...inputMen, stock: stockNumber });
                // console.log(result);

                if (result.status === 201) {
                    alert(`Product ${result.data.product.name} successfully added`);
                    setMen({ name: "", gender: "Women", brand: "", price: "", mainImage: "", Image1: "", Image2: "", Image3: "", Image4: "", stock: "" });
                    navigate('/admin/kids');
                }
            }
        } catch (error) {
            alert('Operation failed');

        }
    }

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
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control value={inputMen.brand} onChange={e => setMen({ ...inputMen, brand: e.target.value })} type="text" placeholder="Brand" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control value={inputMen.price} onChange={e => setMen({ ...inputMen, price: e.target.value })} type="number" placeholder="Price" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Main Image</Form.Label>
                                <Form.Control value={inputMen.mainImage} onChange={e => setMen({ ...inputMen, mainImage: e.target.value })} type="text" placeholder="Main Image URL" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image1</Form.Label>
                                <Form.Control value={inputMen.Image1} onChange={e => setMen({ ...inputMen, Image1: e.target.value })} type="text" placeholder="Image1 URL" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image2</Form.Label>
                                <Form.Control value={inputMen.Image2} onChange={e => setMen({ ...inputMen, Image2: e.target.value })} type="text" placeholder="Image2 URL" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image3</Form.Label>
                                <Form.Control value={inputMen.Image3} onChange={e => setMen({ ...inputMen, Image3: e.target.value })} type="text" placeholder="Image3 URL" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image4</Form.Label>
                                <Form.Control value={inputMen.Image4} onChange={e => setMen({ ...inputMen, Image4: e.target.value })} type="text" placeholder="Image4 URL" />
                            </Form.Group>
                        </Stack>

                        <Stack direction='horizontal' gap={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Stock Count</Form.Label>
                                <Form.Control value={inputMen.stock} onChange={e => setMen({ ...inputMen, stock: e.target.value })} type="number" placeholder="Stock Count" min="0" />
                            </Form.Group>
                        </Stack>

                        <Button type="submit" className="w-100">
                            Add Product
                        </Button>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default AdminKidsAdd