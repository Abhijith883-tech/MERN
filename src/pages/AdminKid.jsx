import React, { useEffect, useState } from 'react'
import AdminKidCard from '../components/AdminKidCard'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import { deleteMenProductAPI, getKidProductsAPI } from '../services/allAPI'

const AdminKid = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getKidProductsAPI()
        console.log("API of kids : ", result);
        if (result && result.status === 200) {
          console.log("Fetched Products:", result.data);
          setProducts(result.data);
        } else {
          console.error("Failed to fetch products:", result);
        }
      } catch (error) {

      }

    }
    fetchProduct()
  }, [])

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
  }


  return (
    <>
      <div style={{ position: 'relative' }}>
        <AdminHeader />
        <div className='d-flex' style={{ width: '100%' }}>
          <SideBar />
          <div style={{ position: 'fixed', top: '80px', right: '20px' }}>
            <Link style={{ marginTop: '10px', marginRight: '30px', backgroundColor: 'blue', color: 'white' }} to="/admin/kids/add" className='btn'>Add New Product</Link>
          </div>
          <div className='d-flex' style={{ marginLeft: '20px', marginTop: '100px', width: '100%', flexWrap: 'wrap', gap: '10px' }}>


            {
              products.length > 0 ? (
                products.map((product) => (
                  <AdminKidCard key={product._id} product={product} onDelete={deleteProduct} />
                ))
              ) : (
                <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
              )
            }

            
          </div>
        </div>

        {/* Admin Men card */}


      </div>
    </>
  )
}

export default AdminKid