import React, { useEffect, useState } from 'react'
import menfasion from '../assets/menfasion.png'
import sssss from '../assets/sssss.png'
import hats from '../assets/hats.png'
import { Button, Carousel, Container } from 'react-bootstrap'
import Header from '../components/Header'
import { FaArrowRight } from "react-icons/fa";
import carosal from '../assets/carosal.jpg'
import siblings from '../assets/siblings.jpg'
import { addToCartAPI, addToCartSpecialAPI, getSpecialAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const userId = sessionStorage.getItem("user");
  const userId1 = JSON.parse(userId)._id
  const [products, setProducts] = useState([]);
  console.log(products[0]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getSpecialAPI()
        // console.log(result.data);
        if (result.status === 200) {
          setProducts(result.data)
        } else {

        }

      } catch (error) {
        console.error("Error fetching products:", error);

      }
    }
    fetchProducts()
  }, [])

  // const addToCart = async () => {

  //   const cartData = {
  //     userId: userId1,
  //     productId: products._id,
  //     name: products.name,
  //     price: products.price,
  //     image: products.mainImage
  //   };
  //   console.log(cartData);

  //   // try {
  //   //   const response = await addToCartAPI(cartData)
  //   //   console.log(response);

  //   // } catch (error) {

  //   // }
  // }

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
      const response = await addToCartSpecialAPI(cartData)
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
    <>
      <div>
        <style>
          {`
          .price {
  font-size: 24px; /* Default size */
}
          
          @media(max-width:769px){

          .custom-card {
           margin:0;
           width: 140px !important;
           height: 250px !important; 
            margin-left: 10px;
         }

            .offermain{
              margin-left: 10px !important;

            }

            .imgBest{
              width: 20%;
              height:130px;
            }
              h3 {
              font-size: 16px; /* Adjust as needed */
            }
              p{
              font-size: 16px; /* Adjust as needed */
            }
              .price {
            font-size: 16px; /* Mobile size */
          }
            .buttonStyle{
            width: 100%;
            height:100px;
            }
        
          
        }
        `}
        </style>
        <Header />
        <Carousel interval={3000} indicators={false}> {/* Auto-slide every 3s */}
          {/* Slide 1 */}
          {/* Men */}
          <Carousel.Item>
            <Container
              fluid
              className="min-vh-100 d-flex justify-content-between align-items-center p-4 flex-column-reverse flex-lg-row"
              style={{
                background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
              }}
            >
              {/* Left: Text */}
              <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 w-lg-50 mt-4 mt-lg-0">
                <h1 className="text-white">
                  Elevate Your Style: <br /> Timeless Fashion for the Modern Man
                </h1>
                <Button
                  style={{
                    backgroundColor: "#FFD700",
                    color: "#0f2027",
                    border: "none",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "0.3s ease-in-out",
                  }}
                  className="mt-3"
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#FFC107")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#FFD700")}
                >
                  Go To Collection <FaArrowRight />
                </Button>
              </div>

              {/* Right: Image */}
              <div className="w-100 w-lg-50 d-flex justify-content-center">
                <img src={menfasion} alt="Men Fashion" className="img-fluid" />
              </div>
            </Container>
          </Carousel.Item>


          {/* Slide 2 */}
          <Carousel.Item>
            <Container
              fluid
              className="min-vh-100 bg-gray-300 d-flex flex-column-reverse flex-lg-row justify-evenly align-items-center p-4"
            >
              {/* Text Block */}
              <div className="d-flex flex-column justify-content-center bg-teal-500 rounded-tr-4xl rounded-bl-4xl shadow-2xl p-4 p-lg-5 align-items-center text-center w-100 w-lg-auto mt-4 mt-lg-0">
                <h1 className="text-teal-500">
                  Classic Elegance: <br /> Dress to Impress
                </h1>
                <Button
                  style={{
                    backgroundColor: "#FF5733",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "0.3s ease-in-out",
                  }}
                  className="mt-3"
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#E64A19")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#FF5733")}
                >
                  Explore Now <FaArrowRight />
                </Button>
              </div>

              {/* Image Block */}
              <div className="w-100 w-lg-auto d-flex justify-content-center">
                <img
                  src={hats}
                  alt="Men Fashion"
                  className="img-fluid bg-teal-500 rounded-circle"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </Container>
          </Carousel.Item>


          {/* Slide 3 */}
          <Carousel.Item>
            <Container
              fluid
              className="min-vh-100 d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center p-4"
              style={{
                background: "linear-gradient(135deg, #f5e6ca, #f8d7b7)", // Warm sunset gradient
              }}
            >
              {/* Text Section */}
              <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 w-lg-50 mt-4 mt-lg-0">
                <h1 className="text-white">
                  Trendy & Bold: <br /> Express Yourself in Style
                </h1>
                <Button
                  style={{
                    backgroundColor: "#4CAF50", // Fresh Green
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "0.3s ease-in-out",
                  }}
                  className="mt-3"
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#388E3C")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                >
                  Discover More <FaArrowRight />
                </Button>
              </div>

              {/* Image Section */}
              <div className="w-100 w-lg-50 d-flex justify-content-center">
                <img src={sssss} alt="Men Fashion" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </Container>
          </Carousel.Item>

        </Carousel>

        <h3 className="text-center mt-3">Select By Category</h3>
        <div className="d-flex justify-content-center mt-3">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <i className="fas fa-tshirt fa-3x"></i>
              <p className="mt-2 mb-0">Men</p>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <i className="fa fa-female fa-3x"></i>
              <p className="mt-2 mb-0">Women</p>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <div className="d-flex gap-2">
                <i className="fa-solid fa-person fa-2x"></i>
                <i className="fa-solid fa-person-dress fa-2x"></i>
              </div>
              <p className="mt-2 mb-0">Kids</p>
            </div>
          </div>
        </div>


        <h3 className="text-center mt-3">Select By Category</h3>
        <div className="d-flex justify-content-center mt-3">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <Link to={`/brand/levi`}>
                <p className="mt-2 mb-0">Levi’s</p>
              </Link>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <Link to={`/brand/Nike`}>
                <p className="mt-2 mb-0">Nike</p>
              </Link>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <Link to={`/brand/zara`}>
                <p className="mt-2 mb-0">Zara</p>
              </Link>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <Link to={`/brand/Asos`}>
                <p className="mt-2 mb-0">Asos</p>
              </Link>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <Link to={`/brand/Prida`}>
                <p className="mt-2 mb-0">Prida</p>
              </Link>
            </div>
          </div>
        </div>


        {/* Best Offers Section */}
        <h3 className="text-center mt-3">Best Offers So Far</h3>
        <div className=' d-flex flex-wrap gap-3 offermain' style={{ marginLeft: '100px' }}>



          <div
            className="custom-card  bg-white text-dark p-3 rounded shadow position-relative"
            style={{ width: "300px", marginLeft: "20px" }}
          >
            {/* Discount Badge */}
            <div
              className="position-absolute bg-danger text-white rounded-circle text-center d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                fontSize: "14px",
                fontWeight: "bold",
                top: "10px",
                left: "10px",
              }}
            >
              20% OFF
            </div>
            {/* Image */}
            <img className='imgBest' src={siblings} style={{ width: "100%" }} alt="Offer" />

            {/* Product Details */}
            <div>
              <h3>dfghjj</h3>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Male</p>
                <p className="mb-0">nike</p>
              </div>
              <h5 className="price">
  <span><s style={{ textDecorationColor: "red" }}>$120</s></span>$125
</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Button onClick={() => addToCart(index)} className=' buttonStyle bg-black text-white border-0'>Add to cart</Button>
            </div>
          </div>
          <div
            className="custom-card offerBest bg-white text-dark p-3 rounded shadow position-relative"
            style={{ width: "300px", marginLeft: "20px" }}
          >
            {/* Discount Badge */}
            <div
              className="position-absolute bg-danger text-white rounded-circle text-center d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                fontSize: "14px",
                fontWeight: "bold",
                top: "10px",
                left: "10px",
              }}
            >
              20% OFF
            </div>
            {/* Image */}
            <img src={siblings} style={{ width: "100%" }} alt="Offer" />

            {/* Product Details */}
            <div>
              <h3>dfghjj</h3>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Male</p>
                <p className="mb-0">nike</p>
              </div>
              <h5><span><s style={{ textDecorationColor: "red" }}>$120</s></span>$125</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Button onClick={() => addToCart(index)} className='bg-black text-white border-0'>Add to cart</Button>
            </div>
          </div>
          <div
            className="custom-card offerBest bg-white text-dark p-3 rounded shadow position-relative"
            style={{ width: "300px", marginLeft: "20px" }}
          >
            {/* Discount Badge */}
            <div
              className="position-absolute bg-danger text-white rounded-circle text-center d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                fontSize: "14px",
                fontWeight: "bold",
                top: "10px",
                left: "10px",
              }}
            >
              20% OFF
            </div>
            {/* Image */}
            <img src={siblings} style={{ width: "100%" }} alt="Offer" />

            {/* Product Details */}
            <div>
              <h3>dfghjj</h3>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Male</p>
                <p className="mb-0">nike</p>
              </div>
              <h5><span><s style={{ textDecorationColor: "red" }}>$120</s></span>$125</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Button onClick={() => addToCart(index)} className='bg-black text-white border-0'>Add to cart</Button>
            </div>
          </div>
          <div
            className="custom-card offerBest bg-white text-dark p-3 rounded shadow position-relative"
            style={{ width: "300px", marginLeft: "20px" }}
          >
            {/* Discount Badge */}
            <div
              className="position-absolute bg-danger text-white rounded-circle text-center d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                fontSize: "14px",
                fontWeight: "bold",
                top: "10px",
                left: "10px",
              }}
            >
              20% OFF
            </div>
            {/* Image */}
            <img src={siblings} style={{ width: "100%" }} alt="Offer" />

            {/* Product Details */}
            <div>
              <h3>dfghjj</h3>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Male</p>
                <p className="mb-0">nike</p>
              </div>
              <h5><span><s style={{ textDecorationColor: "red" }}>$120</s></span>$125</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Button onClick={() => addToCart(index)} className='bg-black text-white border-0'>Add to cart</Button>
            </div>
          </div>
          <div
            className="custom-card offerBest bg-white text-dark p-3 rounded shadow position-relative"
            style={{ width: "300px", marginLeft: "20px" }}
          >
            {/* Discount Badge */}
            <div
              className="position-absolute bg-danger text-white rounded-circle text-center d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                fontSize: "14px",
                fontWeight: "bold",
                top: "10px",
                left: "10px",
              }}
            >
              20% OFF
            </div>
            {/* Image */}
            <img src={siblings} style={{ width: "100%" }} alt="Offer" />

            {/* Product Details */}
            <div>
              <h3>dfghjj</h3>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Male</p>
                <p className="mb-0">nike</p>
              </div>
              <h5><span><s style={{ textDecorationColor: "red" }}>$120</s></span>$125</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Button onClick={() => addToCart(index)} className='bg-black text-white border-0'>Add to cart</Button>
            </div>
          </div>
          




        </div>
      </div>
    </>
  )
}

export default Dashboard