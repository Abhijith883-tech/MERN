import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MenCard from '../components/MenCard';
import TopTrendMen from '../components/TopTrendMen';
import { getMenProductsAPI } from '../services/allAPI';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [topTrendProducts, setTopTrendProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for category selection


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getMenProductsAPI();
        console.log(result); // Log API response

        if (result.status === 200) {
          const filteredTopTrend = result.data.filter(product => product.price > 3000);
          setTopTrendProducts(filteredTopTrend);

          const filteredProducts = result.data.filter(product => product.price < 3000);
          setProducts(filteredProducts);
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
      <style>
        {`
            .carousel-image-container {
              width: 100%;
              height: 500px;
              overflow: hidden;
            }
            .TopBrandsCollection {
              margin-left: 80px;
              margin-top: 50px;
            }
            .TopBrandsCollectionLine{
              width: 315px;
              height: 10px;
              margin-left: 80px;
            }
              .TopBrandsCollection {
  margin-left: 80px;
  margin-top: 50px;
}
  .TopBrandsCollectionLine {
  width: 315px;
  height: 10px;
  margin-left: 80px;
}
          
          @media(max-width:769px){
          .offermain{
            margin-left: 10px !important;
          }
          .carousel-image-container {
            height:250px; /* Increase height for smaller screens */
          }
          .TopBrandsCollection {
            margin-left: 45px;
            margin-top: -25px;
          }
          .TopBrandsCollectionLine{
            margin-left: 45px;
            margin-top: -99px;
            width: 400px;
          }
            .ChooseAnItem{
            margin-top:20px;
            margin-right: 55px;
            }
            .TopBrandsCollection {
              margin-left: 20px;
              margin-top: 20px;
            }
              .TopBrandsCollectionLine {
              margin-right: 20px;
            }
                    
        }
        `}
      </style>
      <Header />
      <Carousel>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/1448061.jpg" alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/1448061.jpg" alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/1448061.jpg" alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="TopBrandsCollection">Top Brands Collection</h2>

      <div className='d-flex justify-content-between align-items-center p-3'>
        <div style={{ backgroundColor: 'red', borderRadius: '10px' }} className='TopBrandsCollectionLine'></div>

        <div >
          <label htmlFor="items">Choose an item: </label>
          <select className='ChooseAnItem' name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
      </div>


      <div className=' offermain d-flex flex-wrap'>
        {filteredTopTrendProducts.length > 0 ? (
          filteredTopTrendProducts.map((product) => (
            <TopTrendMen key={product._id} product={product} />
          ))
        ) : (
          <p>No top trending products found.</p>
        )}
        {/* <TopTrendMen />
        <TopTrendMen />
        <TopTrendMen />
        <TopTrendMen />
        <TopTrendMen />
        <TopTrendMen /> */}
      </div>

      <h2 style={{ marginLeft: '60px', marginTop: '50px' }}>Trending Collection</h2>
      <div style={{ marginLeft: '60px', backgroundColor: 'red', width: '280px', height: '10px', borderRadius: '10px' }}></div>

      <div className='d-flex flex-wrap'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <MenCard key={product._id} product={product} />
          ))
        ) : (
          <p>{filteredProducts.length === 0 ? "No products found." : "Loading products..."}</p>
        )}
      </div>
    </>
  );
};

export default Men;
