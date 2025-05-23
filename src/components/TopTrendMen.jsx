import React from 'react'
import carosal from '../assets/carosal.jpg'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import StarMen from './StarMen';
import siblings from '../assets/siblings.jpg'
import { addToCartAPI } from '../services/allAPI';
const TopTrendMen = ({ product }) => {
    const userId = sessionStorage.getItem("user");
    const userId1 = JSON.parse(userId)._id
    console.log(product);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addToCart = async () => {

        const cartData = {
            userId: userId1,
            productId: product._id,
            name: product.name,
            price: product.price,

            image: product.mainImage
        };
        // console.log(cartData);
        try {
            const response = await addToCartAPI(cartData);
            console.log(response);
            if (response.status === 200) {
                alert("Item added to cart successfully!");
            } else {
                alert("Failed to add item to cart.");
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }

    };
    return (
        <>
            <div>

                <style>
                    {`
    
          
          @media(max-width:769px){

            div.custom-card{
            margin:0;
            width: 250px !important;
            height: 420px !important; 
            margin-left: 53px !important;
            }
          
        }
        `}
                </style>


                {
                    product.stock > 0 ?
                        <div style={{ Height: '400px', width: '400px', marginTop: '50px', marginLeft: '80px' }} className="custom-card bg-white text-dark p-3 rounded shadow">
                            <div>
                                <img src={product?.mainImage} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
                            </div>
                            <div>
                                <h3>{product.name}</h3>
                                <div className='d-flex justify-content-between'>
                                <p className='mb-0'>{product?.gender}</p>
                                <p className='mb-0'>{product?.brand}</p>
                                </div>
                                <h5>${product?.price}</h5>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button onClick={addToCart} className='bg-black text-white border-0'>Add to cart</Button>
                            </div>
                        </div>
                        :
                        <div style={{ Height: '400px', width: '400px', marginTop: '50px', marginLeft: '80px' }} className="bg-white text-dark p-3 rounded shadow">
                            <div>
                                <img src={product?.mainImage} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
                            </div>
                            <div>
                                <h3>{product.name}</h3>
                                <div className='d-flex justify-content-between'>
                                    <p className='mb-0'>{product?.gender}</p>
                                    <p className='mb-0'>{product?.brand}</p>
                                </div>
                                <h5>${product?.price}</h5>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className="text-danger">Out of stock</p>
                            </div>
                        </div>
                }


                {/* <div style={{ Height: '400px', width: '400px', marginTop: '50px', marginLeft: '80px' }} className="custom-card bg-white text-dark p-3 rounded shadow">
                    <div>
                        <img src={siblings} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
                    </div>
                    <div>
                        <h3>name</h3>
                        <div className='d-flex justify-content-between'>
                            <p className='mb-0'>Male</p>
                            <p className='mb-0'>Nike</p>
                        </div>
                        <h5>$125</h5>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button onClick={addToCart} className='bg-black text-white border-0'>Add to cart</Button>
                    </div>
                </div> */}

            </div>

           




















            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <div>
                            <img src={carosal} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex'>
                        <div>
                            <img src={carosal} style={{ width: '75%' }} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={carosal} style={{ width: '75%' }} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={carosal} style={{ width: '75%' }} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={carosal} style={{ width: '75%' }} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        Kids TShirt <h5 style={{ color: 'red' }}>$500</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Mens</p>
                        <p>Brands</p>
                    </div>
                    <StarMen rating={4.5} />
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add to cart
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}

export default TopTrendMen