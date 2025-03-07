

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import AdminMenCard from '../components/AdminMenCard';
import AdminHeader from './AdminHeader';
import { getMenProductsAPI, deleteMenProductAPI } from '../services/allAPI'; // Import delete API

const AdminMen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getMenProductsAPI();
                console.log("API Response:", result);

                if (result && result.status === 200) {
                    console.log("Fetched Products:", result.data);
                    setProducts(result.data);
                } else {
                    console.error("Failed to fetch products:", result);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Function to delete product
    const deleteProduct = async (productId) => {
        try {
            const result = await deleteMenProductAPI(productId);
            if (result && result.status === 200) {
                // Remove deleted product from state
                setProducts(products.filter((product) => product._id !== productId));
            } else {
                console.error("Failed to delete product:", result);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <>
            <div style={{ position: 'relative' }}>
                <AdminHeader />
                <div className='d-flex' style={{ width: '100%' }}>
                    <SideBar />

                    {/* "Add New Product" Button */}
                    <div style={{ position: 'fixed', top: '80px', right: '20px', zIndex: '1000' }}>
                        <Link
                            style={{ backgroundColor: 'blue', color: 'white', padding: '10px 15px', borderRadius: '5px' }}
                            to="/admin/men/add"
                            className='btn'>
                            Add New Product
                        </Link>
                    </div>


                    {/* Display Products */}
                    <div className='d-flex' style={{ marginLeft: '20px', marginTop: '100px', width: '100%', flexWrap: 'wrap', gap: '10px' }}>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <AdminMenCard key={product._id} product={product} onDelete={deleteProduct} />
                            ))
                        ) : (
                            <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminMen;
