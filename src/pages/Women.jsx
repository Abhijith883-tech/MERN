import React, { useEffect } from 'react'
import Header from '../components/Header'

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carosal from '../assets/carosal.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WomenCard from '../components/WomenCard';
import TopTrendWomen from '../components/TopTrendWomen';
import { getWomenProductsAPI } from '../services/allAPI';



const Women = () => {
  const [products, setProducts] = useState([]);
  const [topTrendProducts, setTopTrendProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for category selection
// console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getWomenProductsAPI();
        console.log(result); // This will log the API response
        
        if (result.status == 200) {
          // setProducts(result.data)
          const filteredProducts = result.data.filter(product => product.price > 3000);
          console.log(filteredProducts); // Logs the filtered array
          setTopTrendProducts(filteredProducts);
          const filteredProducts1 = result.data.filter(product => product.price < 3000);
          // console.log(result);
          setProducts(filteredProducts1)
        } else {
          console.error("Failed to fetch products:", result);

        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // console.log(event.target.value);

  };

  // Filter products based on selected category
  const filteredTopTrendProducts = selectedCategory
    ? topTrendProducts.filter(product => product.typeDress === selectedCategory)
    : topTrendProducts;

  const filteredProducts = selectedCategory
    ? products.filter(product => product.typeDress === selectedCategory)
    : products;
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
      <div className='d-flex justify-content-between align-items-center p-3'>
        <div style={{ marginLeft: '80px', backgroundColor: 'red', width: '315px', height: '10px', borderRadius: '10px' }}>
        </div>

        <div>
          <label htmlFor="items">Choose an item: </label>
          <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Shoes">Shoes</option>
            <option value="Top">Top</option>
          </select>
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {filteredTopTrendProducts.length > 0 ? (
          filteredTopTrendProducts.map((product) => (
            <TopTrendWomen key={product._id} product={product} />
          ))
        ) : (
          <p>No top trending products found.</p>
        )}
      </div>
      <h2 style={{ marginLeft: '60px', marginTop: '50px' }}>Trending Collection</h2>
      <div style={{ marginLeft: '60px', backgroundColor: 'red', width: '280px', height: '10px', borderRadius: '10px' }}></div>
      <div className='d-flex flex-wrap'>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <WomenCard key={product._id} product={product} />
          ))
        ) : (
          <p>{filteredProducts.length === 0 ? "No products found." : "Loading products..."}</p>
        )
        }

      </div>






    </>
  )
}

export default Women