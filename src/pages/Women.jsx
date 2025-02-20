import React from 'react'
import Header from '../components/Header'

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carosal from '../assets/carosal.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WomenCard from '../components/WomenCard';
import TopTrendWomen from '../components/TopTrendWomen';



const Women = () => {
  
  return (
    <>
      <Header />
      <Carousel>

        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1448061.jpg"
              alt="First slide"
              style={{ width: '100%' }}
            />
          </div>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1448061.jpg"
              alt="First slide"

              style={{ width: '100%' }}
            />
          </div>
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1448061.jpg"
              alt="First slide"
              style={{ width: '100%' }}
            />
          </div>
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 style={{ marginLeft: '80px', marginTop: '50px' }}>Top Brands Collection</h2>
      <div style={{ marginLeft: '80px', backgroundColor: 'red', width: '315px', height: '10px', borderRadius: '10px' }}></div>
      <div className='d-flex flex-wrap'>
        <TopTrendWomen/>
        <TopTrendWomen/>
        <TopTrendWomen/>
        <TopTrendWomen/>
        <TopTrendWomen/>
        
      </div>
      <h2 style={{ marginLeft: '60px', marginTop: '50px' }}>Trending Collection</h2>
      <div style={{ marginLeft: '60px', backgroundColor: 'red', width: '280px', height: '10px', borderRadius: '10px' }}></div>
      <div className='d-flex flex-wrap'>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>
        <WomenCard/>

      </div>
     
      
      
      


    </>
  )
}

export default Women