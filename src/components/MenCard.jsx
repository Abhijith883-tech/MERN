// import React, { useEffect } from 'react'
// import carosal from '../assets/carosal.jpg'
// import { Button } from 'react-bootstrap'
// import { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import StarMen from './StarMen';
// import { addToCartAPI, getMenProductsAPI } from '../services/allAPI';
// const MenCard = ({ product }) => {
//     console.log(product);

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);



//     return (
//         <>
//             <div style={{ marginLeft: '13px' }}>
//                 <div style={{ height: '380px', width: '300px', marginTop: '50px', marginLeft: '50px' }} className="bg-white text-dark p-3 rounded shadow">
//                     {/* <div style={{width:'100%',height:'200px'}}>
//                         <img src={product?.mainImage} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
//                     </div> */}
//                     {/* <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
//                         <img
//                             src={product?.mainImage}
//                             style={{ width: '71%', height: '100%', cursor: 'pointer' }}
//                             onClick={handleShow}
//                             alt=""
//                         />
//                     </div> */}
//                     <div style={{
//                         width: '100%',
//                         height: '200px',
//                         overflow: 'hidden',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center'
//                     }}>
//                         <img
//                             src={product?.mainImage}
//                             style={{ width: '71%', height: '100%', cursor: 'pointer', objectFit: 'cover' }}
//                             onClick={handleShow}
//                             alt=""
//                         />
//                     </div>

//                     <div style={{ marginTop: '22px' }} >
//                         <h3>{product?.name}</h3>
//                         <div className='d-flex justify-content-between'>
//                             <p className='mb-0'>{product?.gender}</p>
//                             <p className='mb-0'>{product?.brand}</p>
//                         </div>
//                         <h5>${product?.price}</h5>
//                     </div>
//                     <div className='d-flex justify-content-center align-items-center'>
//                         <Button onClick={addToCart} className='bg-black text-white border-0'>Add to cart</Button>
//                     </div>
//                 </div>
//             </div>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header >
//                     <Modal.Title style={{width:"100%"}}>
//                         <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'space-between' }}>
//                             <div style={{
//                                 width: '60%',
//                                 height: '200px',
//                                 overflow: 'hidden',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center'
//                             }}>
//                                 <img src={product?.mainImage} style={{ width: '95%', height: '100%', cursor: 'pointer' }} onClick={handleShow} alt="" />
//                             </div>

//                             <div style={{ width: '30%', height: '200px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
//                                 <div style={{ width: '64%' }}>
//                                     <img style={{ width: '100%', height: '50px' }} src={product?.Image1} alt="" />
//                                 </div>
//                                 <div style={{ width: '64%' }}>
//                                     <img style={{ width: '100%', height: '50px' }} src={product?.Image1} alt="" />
//                                 </div>
//                                 <div style={{ width: '64%' }}>
//                                     <img style={{ width: '100%', height: '50px' }} src={product?.Image1} alt="" />
//                                 </div>
//                                 <div style={{ width: '64%' }}>
//                                     <img style={{ width: '100%', height: '50px' }} src={product?.Image1} alt="" />
//                                 </div>
//                             </div>
//                         </div>


//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
                   
//                     <div className='d-flex justify-content-between'>
//                         Kidss TShirt <h5 style={{ color: 'red' }}>$500</h5>
//                     </div>
//                     <div className='d-flex justify-content-between'>
//                         <p>Mens</p>
//                         <p>Brands</p>
//                     </div>
//                     <StarMen rating={4.5} />
//                 </Modal.Body>
//                 <Modal.Footer className='d-flex justify-content-between'>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     {/* <Button variant="primary" onClick={handleClose}>
//                         Add to cart
//                     </Button> */}
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }

// export default MenCard


import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import StarMen from './StarMen';
import { addToCartAPI } from '../services/allAPI';

const MenCard = ({ product }) => {
    const userId = sessionStorage.getItem("user");
    const userId1=JSON.parse(userId)._id
    console.log(product);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addToCart = async () => {

        const cartData = {
            userId:userId1 ,
            productId: product._id,
            name: product.name,
            price: product.price,

            image:product.mainImage
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
        
            <div style={{ marginLeft: '13px' }}>
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
                            src={product?.mainImage}
                            style={{ width: '71%', height: '100%', cursor: 'pointer', objectFit: 'cover' }}
                            onClick={handleShow}
                            alt=""
                        />
                    </div>

                    <div style={{ marginTop: '22px' }} >
                        <h3>{product?.name}</h3>
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
            </div>
        </>
    )
}

export default MenCard;
