// import React, { useEffect,useState } from 'react'
// import Header from '../components/Header'

// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// import MenCard from '../components/MenCard';
// import TopTrendMen from '../components/TopTrendMen';
// import { getMenProductsAPI } from '../services/allAPI';

// const Men = () => {
//       const [products, setProducts] = useState([]);

//   useEffect(() => {
//           const fetchProducts = async () => {
//               try {
//                   const result = await getMenProductsAPI();
//                   console.log(result); // This will log the API response
//                   if (result.status==200) {
//                     setProducts(result.data)
//                   } else {
//                     console.error("Failed to fetch products:", result);

//                   }
//               } catch (error) {
//                   console.error("Error fetching products:", error);
//               }
//           };
//           fetchProducts();
//       }, []);
//   return (
//     <>
//       <Header />
//       <Carousel>

//         <Carousel.Item>
//           <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
//             <img
//               className="d-block w-100"
//               src="https://wallpaperaccess.com/full/1448061.jpg"
//               alt="First slide"
//               style={{ width: '100%' }}
//             />
//           </div>
//           <Carousel.Caption>
//             <h3>First Slide</h3>
//             <p>This is the first slide description.</p>
//           </Carousel.Caption>
//         </Carousel.Item>


//         <Carousel.Item>
//           <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
//             <img
//               className="d-block w-100"
//               src="https://wallpaperaccess.com/full/1448061.jpg"
//               alt="First slide"

//               style={{ width: '100%' }}
//             />
//           </div>
//           <Carousel.Caption>
//             <h3>Second Slide</h3>
//             <p>This is the second slide description.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
//             <img
//               className="d-block w-100"
//               src="https://wallpaperaccess.com/full/1448061.jpg"
//               alt="First slide"
//               style={{ width: '100%' }}
//             />
//           </div>
//           <Carousel.Caption>
//             <h3>Third Slide</h3>
//             <p>This is the third slide description.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       <h2 style={{ marginLeft: '80px', marginTop: '50px' }}>Top Brands Collection</h2>
//       <div style={{ marginLeft: '80px', backgroundColor: 'red', width: '315px', height: '10px', borderRadius: '10px' }}></div>
//       <div className='d-flex flex-wrap'>
//         <TopTrendMen />
//         <TopTrendMen />
//         <TopTrendMen />
//         <TopTrendMen />
//         <TopTrendMen />
//         <TopTrendMen />
//       </div>
//       <h2 style={{ marginLeft: '60px', marginTop: '50px' }}>Trending Collection</h2>
//       <div style={{ marginLeft: '60px', backgroundColor: 'red', width: '280px', height: '10px', borderRadius: '10px' }}></div>
//       <div className='d-flex flex-wrap'>

//         {products.length>0?(
//           products.map((product)=>(
//             <MenCard key={product._id} product={product} />
//           ))
//         ):(
//           <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
//         )
//       }



//       </div>
//     </>
//   )
// }

// export default Men

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
  // console.log(topTrendProducts);

  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const result = await getMenProductsAPI();
        console.log(result); // Log API response
        if (result.status === 200) {
          const filteredProducts = result.data.filter(product => product.price > 3000);
          console.log(filteredProducts); // Logs the filtered array
          setTopTrendProducts(filteredProducts);
          const filteredProducts1 = result.data.filter(product => product.price < 3000);
          // console.log(result);
          setProducts(filteredProducts1)

        } else {

        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/1448061.jpg" alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/1448061.jpg" alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/1448061.jpg" alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 style={{ marginLeft: '80px', marginTop: '50px' }}>Top Brands Collection</h2>
      <div style={{ marginLeft: '80px', backgroundColor: 'red', width: '315px', height: '10px', borderRadius: '10px' }}></div>
      {/* <div className='d-flex flex-wrap'>
        {topTrendProducts.length > 0 ? (
          topTrendProducts.map((product) => (
            <TopTrendMen />
          ))
        ) : (
          <p>No top trending products found.</p>
        )}
      </div> */}


      <div className='d-flex flex-wrap'>
        {topTrendProducts.length > 0 ? (
          topTrendProducts.map((product) => (
            <TopTrendMen key={product._id} product={product} />
          ))
        ) : (
          <p>No top trending products found.</p>
        )}
      </div>


      <h2 style={{ marginLeft: '60px', marginTop: '50px' }}>Trending Collection</h2>
      <div style={{ marginLeft: '60px', backgroundColor: 'red', width: '280px', height: '10px', borderRadius: '10px' }}></div>
      <input type="text" placeholder='fuioertyu'/>
      <div className='d-flex flex-wrap'>
        
        {products.length > 0 ? (
          products.map((product) => (
            <MenCard key={product._id} product={product} />
          ))
        ) : (
          <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
        )}
      </div>
    </>
  );
};

export default Men;
