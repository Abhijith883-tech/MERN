import React, { useState } from 'react'
import carosal from '../assets/carosal.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminWomenCard = () => {
    const [hover, setHover] = useState(false);
  return (
    <>
    <div onMouseEnter={() => setHover(true)}
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
                    <img src={carosal} style={{ width: '100%' }} alt="" srcset="" />
                </div>
                <div>
                    <h3>Kids TShirt</h3>
                    <div className='d-flex justify-content-between'>
                        <p className='mb-0'>Women</p>
                        <p className='mb-0'>Brands</p>
                    </div>
                    <h5>$500</h5>
                </div>
                <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                    <Button style={{ backgroundColor: 'green', width: '70px', height: '35px' }} className="text-white border-0">
                        <Link to="/AdminWomenAdd" className="text-decoration-none text-white d-inline-block w-100 h-100">
                            Edit
                        </Link>
                    </Button>
                    <Button style={{ width: '70px', height: '35px' }} className="bg-danger text-white border-0 ms-2">
                        Delete
                    </Button>
                </div>
            </div>
    </>
  )
}

export default AdminWomenCard