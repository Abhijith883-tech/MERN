import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.jpg'
import Header from '../components/Header'

const Home = () => {
    return (
        <>
            <Header insideLogin='inside' />
            <div style={{ minHeight: '100vh' }} className="bg-white text-dark p-3 d-flex justify-content-center align-items-center rounded shadow w-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: '80px' }}>E Commerce</h1>
                            <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum similique minima doloribus nisi dolor ipsum a cumque expedita minus asperiores iste distinctio. Molestiae, quod laboriosam. Itaque sunt quibusdam sapiente.</p>
                            <Link to={'/dashboard'} className='btn btn-warning'>START TO EXPLORE</Link>
                        </div>
                        <div className="col-lg-6">
                            <img src={cart} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home