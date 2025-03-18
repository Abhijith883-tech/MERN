import React, { useEffect, useState } from 'react'
import menfasion from '../assets/menfasion.png'
import sssss from '../assets/sssss.png'
import hats from '../assets/hats.png'
import { Button, Carousel, Container } from 'react-bootstrap'
import Header from '../components/Header'
import { FaArrowRight } from "react-icons/fa";
import carosal from '../assets/carosal.jpg'
import { getSpecialAPI } from '../services/allAPI'


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

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

  return (
    <>
      <div>
        <Header />
        <Carousel interval={3000} indicators={false}> {/* Auto-slide every 3s */}
          {/* Slide 1 */}
          {/* Men */}
          <Carousel.Item>
            <Container
              fluid
              className="min-vh-100 d-flex justify-content-between align-items-center p-4"
              style={{
                background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // Dark blue/teal gradient
              }}
            >
              {/* Left: Text */}
              <div className="d-flex flex-column justify-content-center align-items-center text-center w-50">
                <h1 className="text-white">
                  Elevate Your Style: <br /> Timeless Fashion for the Modern Man


                </h1>
                <Button
                  style={{
                    backgroundColor: "#FFD700", // Golden Yellow
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
              <div>
                <img src={menfasion} alt="Men Fashion" className="img-fluid" />
              </div>
            </Container>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <Container
              fluid
              className="min-vh-100 bg-gray-300 d-flex justify-evenly align-items-center p-4"
            // style={{
            //   background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff758c)", // Blue gradient
            // }}
            >
              <div className="d-flex flex-column justify-content-center bg-teal-500 rounded-tr-4xl rounded-bl-4xl shadow-2xl p-10 align-items-center text-center w-auto">
                <h1 className="text-teal-500">
                  Classic Elegance: <br /> Dress to Impress
                </h1>
                <Button
                  style={{
                    backgroundColor: "#FF5733", // Bright Orange
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
              <img src={hats} alt="Men Fashion" className="img-fluid bg-teal-500 rounded-full " />
            </Container>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <Container
              fluid
              className="min-vh-100 d-flex justify-content-between align-items-center p-4"
              style={{
                background: "linear-gradient(135deg, #f5e6ca, #f8d7b7)", // Warm sunset gradient
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center text-center w-50">
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
              <img src={sssss} alt="Men Fashion" className="img-fluid" />
            </Container>
          </Carousel.Item>
        </Carousel>

        <h3 className="text-center mt-3">Select By Category</h3>
        <div className="d-flex justify-content-center mt-3">
          <div className='d-flex gap-3'>
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
              <div className="d-flex">
                <i className="fa-solid fa-person fa-2x"></i>
                <i className="fa-solid fa-person-dress fa-2x"></i>
              </div>
              <p className="mt-2 mb-0">Kids</p>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-3">Select By Category</h3>
        <div className="d-flex justify-content-center mt-3">
          <div className='d-flex gap-3'>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <i className="fas fa-tshirt fa-3x"></i>
              <p className="mt-2 mb-0">Levi’s</p>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <i className="fa fa-female fa-3x"></i>
              <p className="mt-2 mb-0">Ralph Lauren</p>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <div className="d-flex">
                <i className="fa-solid fa-person fa-2x"></i>
                <i className="fa-solid fa-person-dress fa-2x"></i>
              </div>
              <p className="mt-2 mb-0">Zara</p>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <div className="d-flex">
                <i className="fa-solid fa-person fa-2x"></i>
                <i className="fa-solid fa-person-dress fa-2x"></i>
              </div>
              <p className="mt-2 mb-0">OshKosh B’gosh </p>
            </div>
            <div className="shadow d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px", height: "100px" }}>
              <div className="d-flex">
                <i className="fa-solid fa-person fa-2x"></i>
                <i className="fa-solid fa-person-dress fa-2x"></i>
              </div>
              <p className="mt-2 mb-0">H&M Kids </p>
            </div>
          </div>
        </div>

        {/* Best Offers Section */}
        <h3 className="text-center mt-3">Best Offers So Far</h3>
        <div className='ml-36 d-flex flex-wrap gap-3'>
          
        {
            products.length > 0 ? (
              products.map((product) => (
                <div className="bg-white text-dark p-3 rounded shadow position-relative" style={{ width: "300px", margin: "50px auto" }}>
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
                    {product.discount}% OFF
                  </div>
                  {/* Image */}
                  <img src={product.mainImage} style={{ width: "100%" }} alt="Offer" />

                  {/* Product Details */}
                  <div>
                    <h3>{product.name}</h3>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">{product.gender}</p>
                      <p className="mb-0">{product.brand}</p>
                    </div>
                    <h5><span><s>${product.price}</s></span>${product.specialPrice}</h5>
                  </div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button className='bg-black text-white border-0'>Add to cart</Button>
                  </div>
                </div>
              ))
            ): (
              <p>No top trending products found.</p>
            )
          }
              
              

        </div>
      </div>
    </>
  )
}

export default Dashboard