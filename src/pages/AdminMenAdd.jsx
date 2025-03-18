

// import React, { useState } from 'react'
// import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
// import { menAPI } from '../services/allAPI';
// import { useNavigate } from 'react-router-dom';

// const AdminMenAdd = () => {
//     const navigate=useNavigate()
//     const [inputMen, setMen] = useState({
//         name: "", gender: "Men", brand: "", price: "", mainImage: "", Image1: "", Image2: "", Image3: "", Image4: "", stock: ""
//     });

//     console.log(inputMen);

//     const addMen = async (e) => {
//         e.preventDefault();

//         if (inputMen.name && inputMen.gender && inputMen.brand && inputMen.price && inputMen.mainImage &&
//             inputMen.Image1 && inputMen.Image2 && inputMen.Image3 && inputMen.Image4 && inputMen.stock !== "") {

//             // Validate stock
//             const stockNumber = parseInt(inputMen.stock, 10);
//             if (isNaN(stockNumber) || stockNumber < 0) {
//                 alert("Stock must be a non-negative number!");
//                 return;
//             }

//             try {
//                 const result = await menAPI({ ...inputMen, stock: stockNumber });
//                 console.log(result);
//                 if (result.status === 201) {
//                     alert(`The Product ${result.data.product.name} is successfully added`);
//                     setMen({ name: "", gender: "Men", brand: "", price: "", mainImage: "", Image1: "", Image2: "", Image3: "", Image4: "", stock: "" });
//                     navigate('/admin/men')
//                 } else {
//                     alert('Product addition failed');
//                 }
//             } catch (error) {
//                 alert('Product addition failed');
//             }
//         } else {
//             alert('Please fill all fields');
//         }
//     };

//     return (
//         <Container className="d-flex justify-content-center align-items-center vh-100">
//             <Card style={{ width: '36rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
//                 <h2 className="text-center mb-4">Men Product</h2>
//                 <Form>
//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control value={inputMen.name} onChange={e => setMen({ ...inputMen, name: e.target.value })} type="text" placeholder="Enter Name" />
//                         </Form.Group>
//                     </Stack>

//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Brand</Form.Label>
//                             <Form.Control value={inputMen.brand} onChange={e => setMen({ ...inputMen, brand: e.target.value })} type="text" placeholder="Brand" />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Price</Form.Label>
//                             <Form.Control value={inputMen.price} onChange={e => setMen({ ...inputMen, price: e.target.value })} type="number" placeholder="Price" />
//                         </Form.Group>
//                     </Stack>

//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Main Image</Form.Label>
//                             <Form.Control value={inputMen.mainImage} onChange={e => setMen({ ...inputMen, mainImage: e.target.value })} type="text" placeholder="Main Image URL" />
//                         </Form.Group>
//                     </Stack>

//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Image1</Form.Label>
//                             <Form.Control value={inputMen.Image1} onChange={e => setMen({ ...inputMen, Image1: e.target.value })} type="text" placeholder="Image1 URL" />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Image2</Form.Label>
//                             <Form.Control value={inputMen.Image2} onChange={e => setMen({ ...inputMen, Image2: e.target.value })} type="text" placeholder="Image2 URL" />
//                         </Form.Group>
//                     </Stack>

//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Image3</Form.Label>
//                             <Form.Control value={inputMen.Image3} onChange={e => setMen({ ...inputMen, Image3: e.target.value })} type="text" placeholder="Image3 URL" />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Image4</Form.Label>
//                             <Form.Control value={inputMen.Image4} onChange={e => setMen({ ...inputMen, Image4: e.target.value })} type="text" placeholder="Image4 URL" />
//                         </Form.Group>
//                     </Stack>

//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Stock Count</Form.Label>
//                             <Form.Control value={inputMen.stock} onChange={e => setMen({ ...inputMen, stock: e.target.value })} type="number" placeholder="Stock Count" min="0" />
//                         </Form.Group>
//                     </Stack>

//                     <Button onClick={addMen} variant="primary" type="submit" className="w-100">
//                         Submit
//                     </Button>
//                 </Form>
//             </Card>
//         </Container>
//     )
// }

// export default AdminMenAdd;

// import React, { useEffect, useState } from 'react';
// import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
// import { getMenProductsAPI, editMenProductAPI, menAPI } from '../services/allAPI';
// import { useNavigate, useParams } from 'react-router-dom';

// const AdminMenAdd = () => {
//     const navigate = useNavigate();
//     const { id } = useParams(); // Get product ID from URL (for editing)

//     const [inputMen, setMen] = useState({
//         name: "", gender: "Men", brand: "", price: "", mainImage: "", 
//         Image1: "", Image2: "", Image3: "", Image4: "", stock: ""
//     });

//     useEffect(() => {
//         // If there's an ID, fetch product data for editing
//         if (id) {
//             const fetchProduct = async () => {
//                 try {
//                     const result = await getMenProductsAPI(); // Fetch all products
//                     const product = result.data.find(p => p._id === id); // Find the product by ID
//                     if (product) setMen(product); // Set the form data with product details
//                 } catch (error) {
//                     console.error("Error fetching product details:", error);
//                 }
//             };
//             fetchProduct();
//         }
//     }, [id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validate stock
//         const stockNumber = parseInt(inputMen.stock, 10);
//         if (isNaN(stockNumber) || stockNumber < 0) {
//             alert("Stock must be a non-negative number!");
//             return;
//         }

//         try {
//             if (id) {
//                 // Update existing product
//                 const result = await editMenProductAPI(id, { ...inputMen, stock: stockNumber });
//                 if (result.status === 200) {
//                     alert(`Product ${result.data.product.name} successfully updated`);
//                     navigate('/admin/men');
//                 }
//             } else {
//                 // Add new product
//                 const result = await menAPI({ ...inputMen, stock: stockNumber });
//                 if (result.status === 201) {
//                     alert(`Product ${result.data.product.name} successfully added`);
//                     setMen({ name: "", gender: "Men", brand: "", price: "", mainImage: "", Image1: "", Image2: "", Image3: "", Image4: "", stock: "" });
//                     navigate('/admin/men');
//                 }
//             }
//         } catch (error) {
//             alert('Operation failed');
//         }
//     };

//     return (
//         <Container className="d-flex justify-content-center align-items-center vh-100">
//             <Card style={{ width: '36rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
//                 <h2 className="text-center mb-4">{id ? "Edit Men Product" : "Add Men Product"}</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control value={inputMen.name} onChange={e => setMen({ ...inputMen, name: e.target.value })} type="text" placeholder="Enter Name" />
//                         </Form.Group>
//                     </Stack>

//                     <Stack direction='horizontal' gap={3}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Brand</Form.Label>
//                             <Form.Control value={inputMen.brand} onChange={e => setMen({ ...inputMen, brand: e.target.value })} type="text" placeholder="Brand" />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Price</Form.Label>
//                             <Form.Control value={inputMen.price} onChange={e => setMen({ ...inputMen, price: e.target.value })} type="number" placeholder="Price" />
//                         </Form.Group>
//                     </Stack>

//                     <Button type="submit" className="w-100">
//                         {id ? "Update Product" : "Add Product"}
//                     </Button>
//                 </Form>
//             </Card>
//         </Container>
//     );
// };

// export default AdminMenAdd;

import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
import { getMenProductsAPI, editMenProductAPI, menAPI } from '../services/allAPI';
import { useNavigate, useParams } from 'react-router-dom';

const AdminMenAdd = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get product ID from URL (for editing)

    const [inputMen, setMen] = useState({
        name: "", gender: "Men", brand: "", price: "", mainImage: "", 
        Image1: "", Image2: "", Image3: "", Image4: "", stock: ""
    });

    useEffect(() => {
        // If there's an ID, fetch product data for editing
        if (id) {
            const fetchProduct = async () => {
                try {
                    const result = await getMenProductsAPI(); // Fetch all products
                    const product = result.data.find(p => p._id === id); // Find the product by ID
                    if (product) setMen(product); // Set the form data with product details
                } catch (error) {
                    console.error("Error fetching product details:", error);
                }
            };
            fetchProduct();
        }
    }, [id]);

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
                const result = await menAPI({ ...inputMen, stock: stockNumber });
                if (result.status === 201) {
                    alert(`Product ${result.data.product.name} successfully added`);
                    setMen({ name: "", gender: "Men", brand: "", price: "", mainImage: "", Image1: "", Image2: "", Image3: "", Image4: "", stock: "" });
                    navigate('/admin/men');
                }
            }
        } catch (error) {
            alert('Operation failed');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '36rem', background: 'rgba(98, 255, 0, 0.9)' }} className="bg-white text-dark p-3 rounded shadow">
                <h2 className="text-center mb-4">{id ? "Edit Men Product" : "Add Men Product"}</h2>
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
                            <Form.Control  value={inputMen.stock} onChange={e => setMen({ ...inputMen, stock: e.target.value })} type="number" placeholder="Stock Count" min="0" />
                        </Form.Group>
                    </Stack>

                    <Button type="submit" className="w-100">
                        {id ? "Update Product" : "Add Product"}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default AdminMenAdd;
