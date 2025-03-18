import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopTrendKids from '../components/TopTrendKids';
import KidsCard from '../components/KidsCard';
import { getKidProductsAPI } from '../services/allAPI';


const Kids = () => {
  const [products, setProducts] = useState([]);
  const [topTrendProducts, setTopTrendProducts] = useState([]);

  // console.log(products);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getKidProductsAPI()
        // console.log(result);
        if (result.status == 200) {
          console.log(result.data);
          const filteredProducts = result.data.filter(product => product.price > 3000)
          console.log(filteredProducts);
          setTopTrendProducts(filteredProducts);
          const filteredProducts1 = result.data.filter(product => product.price < 3000);
          // console.log(result);
          setProducts(filteredProducts1)
          // setProducts(result.data)
        } else {
          console.error("Failed to fetch products:", result);

        }

      } catch (error) {
        console.error("Error fetching products:", error);

      }
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Header />
      <Carousel>

        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1448061.jpg"
              alt="First slide"
              style={{ width: '100%' }}
            />
          </div>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1448061.jpg"
              alt="First slide"

              style={{ width: '100%' }}
            />
          </div>
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1448061.jpg"
              alt="First slide"
              style={{ width: '100%' }}
            />
          </div>
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 style={{ marginLeft: '80px', marginTop: '50px' }}>Top Brands Collection</h2>
      <div style={{ marginLeft: '80px', backgroundColor: 'red', width: '315px', height: '10px', borderRadius: '10px' }}></div>
      <div className='d-flex flex-wrap'>
        {
          topTrendProducts.length>0?(
            topTrendProducts.map((product)=>(
              <TopTrendKids key={product._id} product={product}/>
            ))
          ):(
            <p>No top trending products found.</p>
          )
        }
        
      </div>
      <h2 style={{ marginLeft: '60px', marginTop: '50px' }}>Trending Collection</h2>
      <div style={{ marginLeft: '60px', backgroundColor: 'red', width: '280px', height: '10px', borderRadius: '10px' }}></div>
      <div className='d-flex flex-wrap'>
        {
          products.length > 0 ? (
            products.map((product) => (
              <KidsCard key={product._id} product={product} />
            ))
          ) : (
            <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
          )
        }


      </div>
    </>
  )
}

export default Kids