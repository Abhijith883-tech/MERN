import React from 'react'
import carosal from '../assets/carosal.jpg'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import StarMen from './StarMen';
const TopTrendMen = () => {
    const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <div style={{ Height: '400px', width: '400px', marginTop: '50px', marginLeft: '80px' }} className="bg-white text-dark p-3 rounded shadow">
                    <div>
                        <img src={carosal} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
                    </div>
                    <div>
                        <h3>Kids TShirt</h3>
                        <div className='d-flex justify-content-between'>
                            <p className='mb-0'>Mens</p>
                            <p className='mb-0'>Brands</p>
                        </div>
                        <h5>$500</h5>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='bg-black text-white border-0'>Add to cart</Button>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title><div>
                        <img src={carosal} style={{ width: '100%' }} onClick={handleShow} alt="" srcset="" />
                    </div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                    Kids TShirt <h5 style={{color:'red'}}>$500</h5>
                    </div>
                <div className='d-flex justify-content-between'>
                <p>Mens</p>
                <p>Brands</p>
                </div>
                <StarMen rating={4.5}/>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Add to cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TopTrendMen