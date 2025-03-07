

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminMenCard = ({ product, onDelete }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div style={{ marginLeft: '13px' }}>
                <div style={{ height: '500px', width: '300px', marginTop: '50px', marginLeft: '50px', marginBottom: '40px' }} className="bg-white text-dark p-3 rounded shadow">
                    <div>
                        <img src={product?.mainImage} style={{ width: '100%' }} onClick={handleShow} alt={product?.name} />
                    </div>
                    <div>
                        <h3>{product?.name}</h3>
                        <div className='d-flex justify-content-between'>
                            <p className='mb-0'>{product?.gender}</p>
                            <p className='mb-0'>{product?.brand}</p>
                        </div>
                        <h5>${product?.price}</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <Link to="#" style={{ color: "green" }}>
                            <FaEdit size={20} />
                        </Link> */}
                        <Link to={`/admin/men/edit/${product._id}`} style={{ color: "green" }}>
                            <FaEdit size={20} />
                        </Link>

                        <Button
                            style={{ backgroundColor: "transparent", border: "none", padding: 0 }}
                            onClick={() => onDelete(product._id)}
                        >
                            <FaTrash style={{ color: "red", cursor: "pointer" }} size={20} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modal to show more details */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <img src={product?.mainImage} style={{ width: '100%', height: '300px', paddingLeft: '107px' }} alt={product?.name} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex' style={{ width: '100%' }}>
                        <img src={product?.Image1} style={{ width: '25%' }} alt="Image1" />
                        <img src={product?.Image2} style={{ width: '25%' }} alt="Image2" />
                        <img src={product?.Image3} style={{ width: '25%' }} alt="Image3" />
                        <img src={product?.Image4} style={{ width: '25%' }} alt="Image4" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>{product?.name}</h5>
                        <h5 style={{ color: 'red' }}>${product?.price}</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>{product?.gender}</p>
                        <p>{product?.brand}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AdminMenCard;

