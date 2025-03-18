import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { Button } from 'react-bootstrap'
import AdminMenCard from '../components/AdminMenCard'
import { Link } from 'react-router-dom'
import AdminWomenCard from '../components/AdminWomenCard'
import AdminHeader from './AdminHeader'
import { deleteMenProductAPI, getWomenProductsAPI } from '../services/allAPI'
const AdminWomen = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getWomenProductsAPI();
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
          <div style={{ position: 'fixed', top: '80px', right: '20px' }}>
            <Link style={{ marginTop: '10px', marginRight: '30px', backgroundColor: 'blue', color: 'white' }} to="/admin/women/add" className='btn'>Add New Product</Link>
          </div>
          <div className='d-flex' style={{ marginLeft: '20px', marginTop: '100px', width: '100%', flexWrap: 'wrap', gap: '10px' }}>
            {products.length > 0 ? (
              products.map((product) => (
                <AdminWomenCard key={product._id}  product={product} onDelete={deleteProduct} />
              ))
            ) : (
              <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
            )}
          </div>
        </div>




      </div>
    </>
  )
}

export default AdminWomen