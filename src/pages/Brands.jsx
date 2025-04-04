

import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { addToCartAPI, AsosAPI, LeviAPI, NikeAPI, PridaAPI, ZaraAPI } from '../services/allAPI';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';

const Brands = () => {
  const userId = sessionStorage.getItem("user");
  const userId1 = JSON.parse(userId)._id
  const [products, setProducts] = useState([]);
  console.log(products);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for category selection
  console.log(selectedCategory);

  const { brand } = useParams();
  const decodedBrand = decodeURIComponent(brand);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (decodedBrand === 'Nike') {
          const result = await NikeAPI();
          setProducts(result.data)
          // console.log(result);
        } else if (decodedBrand === 'levi') {
          const result = await LeviAPI()
          setProducts(result.data)
          // console.log(r.data);
        } else if (decodedBrand === 'zara') {
          const result = await ZaraAPI()
          setProducts(result.data)
          // console.log('zara');
        } else if (decodedBrand === 'Asos') {
          const result = await AsosAPI()
          setProducts(result.data)
          // console.log('Asos');

        } else if (decodedBrand === 'Prida') {
          const result = await PridaAPI()
          setProducts(result.data)
        }
        else {
          console.log('no');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);  // Add decodedBrand to dependencies


  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

    // console.log(event.target.value);

  };

  const filteredTopTrendProducts = selectedCategory
    ? products.filter(product => product.gender === selectedCategory)
    : products;

  console.log(filteredTopTrendProducts);

  const addToCart = async (index) => {
    if (!products.length) {
      console.error("No products available");
      return;
    }

    const product = products[index]; // Select the correct product
    console.log("fghjk : ", product);
    console.log(index);


    if (!product) {
      console.error("Invalid product selection");
      return;
    }

    const cartData = {
      userId: userId1,
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.mainImage,
    };

    console.log("Cart Data:", cartData); // Display in console
    try {
      const response = await addToCartAPI(cartData)
      console.log(response);
      if (response.status === 200) {
        alert("Item added to cart successfully!");
      } else {
        alert("The product is out of stock");
      }
    } catch (error) {
      console.log(error);

    }
  };

  return (
    // <div>{decodedBrand}</div>
    <>
      <Header />
      <div>
        <label htmlFor="items">Choose an item: </label>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kid">Kid</option>
        </select>
      </div>
      {/* <div style={{ marginLeft: '13px', display: 'flex', flexWrap: 'wrap' }}>
        {
          products.length > 0 ? (
            filteredTopTrendProducts.map((products,index) => (
              <div style={{ height: '380px', width: '300px', marginTop: '50px', marginLeft: '50px' }} className="bg-white text-dark p-3 rounded shadow">
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img
                    src={products?.mainImage}
                    style={{ width: '71%', height: '100%', cursor: 'pointer', objectFit: 'cover' }}
                    alt=""
                  />
                </div>

                <div style={{ marginTop: '22px' }} >
                  <h3>{products?.name}</h3>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-0'>{products?.gender}</p>
                    <p className='mb-0'>{products?.brand}</p>
                  </div>
                  <h5>${products?.price}</h5>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <Button onClick={() => addToCart(index)} className='bg-black text-white border-0'>Add to cart</Button>
                </div>
              </div>
            ))
          ) : (
            <p>No Brand</p>
          )
        }
      </div> */}

      <div style={{ marginLeft: '13px', display: 'flex', flexWrap: 'wrap' }}>
        {products.length > 0 ? (
          filteredTopTrendProducts.map((product, index) => (
            <div
              key={index}
              style={{
                height: '380px',
                width: '300px',
                marginTop: '50px',
                marginLeft: '50px'
              }}
              className="bg-white text-dark p-3 rounded shadow"
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={product?.mainImage}
                  style={{ width: '71%', height: '100%', cursor: 'pointer', objectFit: 'cover' }}
                  alt=""
                />
              </div>

              <div style={{ marginTop: '22px' }}>
                <h3>{product?.name}</h3>
                <div className='d-flex justify-content-between'>
                  <p className='mb-0'>{product?.gender}</p>
                  <p className='mb-0'>{product?.brand}</p>
                </div>
                <h5>${product?.price}</h5>
              </div>

              <div className='d-flex justify-content-center align-items-center'>
                {product.stock > 0 ? (
                  <Button onClick={() => addToCart(index)} className='bg-black text-white border-0'>
                    Add to cart
                  </Button>
                ) : (
                  <p className="text-danger">Out of stock</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No Brand</p>
        )}
      </div>

    </>
  )
}

export default Brands