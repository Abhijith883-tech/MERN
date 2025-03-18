import React, { useState } from 'react'
import carosal from '../assets/carosal.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminKidCard = ({product,onDelete}) => {
    const [hover, setHover] = useState(false);
    return (
        <>
            {/* <div style={{ Height: '400px', width: '250px', top: '122px', left: '281px' }} className="bg-white text-dark p-3 rounded shadow">
                <div>
                    <img src={carosal} style={{ width: '100%' }} alt="" srcset="" />
                </div>
                <div>
                    <h3>Kids TShirt</h3>
                    <div className='d-flex justify-content-between'>
                        <p className='mb-0'>Kid</p>
                        <p className='mb-0'>Brands</p>
                    </div>
                    <h5>$500</h5>
                </div>
                <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                    <Button style={{ backgroundColor: 'green', width: '70px', height: '35px' }} className="text-white border-0">
                        <Link to="/AdminKidsAdd" className="text-decoration-none text-white d-inline-block w-100 h-100">
                            Edit
                        </Link>
                    </Button>
                    <Button style={{ width: '70px', height: '35px' }} className="bg-danger text-white border-0 ms-2">
                        Delete
                    </Button>
                </div>
            </div> */}
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    height: '300px',
                    width: '250px',
                    top: '-18px',
                    left: '0px',
                    transform: hover ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.3s ease-in-out',
                }}
                className="bg-white text-dark p-3 rounded shadow position-relative"
            >
                <div>
                    <img src={product?.mainImage} style={{ width: '100%' }} alt="Kids T-Shirt" />
                </div>
                <div>
                    <h3>{product?.name}</h3>
                    <div className="d-flex justify-content-between">
                        <p className="mb-0">{product?.gender}</p>
                        <p className="mb-0">{product?.brand}</p>
                    </div>
                    <h5>${product?.price}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <Button
                        style={{ backgroundColor: 'green', width: '70px', height: '35px' }}
                        className="text-white border-0"
                    >
                        <Link
                            to={`/admin/kids/edit/${product._id}`}
                            className="text-decoration-none text-white d-inline-block w-100 h-100"
                        >
                            Edit
                        </Link>
                    </Button>
                    <Button
                        style={{ width: '70px', height: '35px' }}
                        className="bg-danger text-white border-0 ms-2"
                        onClick={() => onDelete(product._id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AdminKidCard