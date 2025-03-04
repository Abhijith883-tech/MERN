import React, { useState } from 'react';
import { Container, Form, Button, Card, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import {loginAPI, registerAPI} from '../services/allAPI'

const Auth = ({ insideRegister }) => {
  const navigate=useNavigate()

    const[inputData,setInputData]=useState({
      username:"",address:"",location:"",phonenumber:"",emailaddress:"",password:""
    })
    console.log(inputData);

    const handleRegister=async(e)=>{
      e.preventDefault()
      console.log("inside handleRegister");
      if (inputData.username&&inputData.address&&inputData.location&&inputData.phonenumber&&inputData.emailaddress&&inputData.password) {
        // alert('make api call')
        try {
          const result=await registerAPI(inputData)
          console.log(result);
          if(result.status==200){
            alert(`Welcome ${result.data.username},plz login too explore our website`)
            navigate('/login')
            setInputData({      username:"",address:"",location:"",phonenumber:"",emailaddress:"",password:""})
          }else{
            if (result.response.status==406) {
              alert(result.response.data)
              setInputData({      username:"",address:"",location:"",phonenumber:"",emailaddress:"",password:""})

            } else {
              
            }
          }
          
        } catch (error) {
          
        }
      } else {
        alert('plz fill the form')
      }
      
    }

    const handleLogin=async(e)=>{
      e.preventDefault()
      if (inputData.emailaddress&&inputData.password) {
        try {
          const result=await loginAPI(inputData)
          console.log(result);
          if(result.status==200){
            sessionStorage.setItem("user",JSON.stringify(result.data.user))
            sessionStorage.setItem("token",result.data.token)
            setInputData({username:"",address:"",location:"",phonenumber:"",emailaddress:"",password:""})
            navigate('/dashboard')
          }else{
            if (result.response.status==404) {
              alert(result.response.data)
            }
          }
        } catch (error) {
          console.log(error);
          
        }
      } 
    }
    

  return (

    <>
      <Header insideLogin='inside' Login='login' />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '22rem', background: 'rgba(26, 75, 138, 0.2)', backdropFilter: 'blur(10px)' }} className="p-4 shadow">
          <h2 className="text-center mb-4">{insideRegister ? 'Register' : 'login'}</h2>
          <Form>
            {
              insideRegister &&
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={inputData.username} onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Enter Name"  />
              </Form.Group>
            }
            {
              insideRegister &&
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control value={inputData.address} onChange={e=>setInputData({...inputData,address:e.target.value})} type="text" placeholder="Enter Address"  />
              </Form.Group>
            }
            {
              insideRegister &&
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control value={inputData.location} onChange={e=>setInputData({...inputData,location:e.target.value})} type="text" placeholder="Enter Location"  />
              </Form.Group>
            }
            {
              insideRegister &&
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control value={inputData.phonenumber} onChange={e=>setInputData({...inputData,phonenumber:e.target.value})} type="number" placeholder="Enter Phone Number"  />
              </Form.Group>
            }



            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={inputData.emailaddress} onChange={e=>setInputData({...inputData,emailaddress:e.target.value})} type="email" placeholder="Enter email"  />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Enter password"  />
            </Form.Group>

            <Form.Group className="d-flex justify-content-between mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#" className="text-decoration-none">Forgot Password?</a>
            </Form.Group>



            {
              insideRegister ?
                <div>
                  <Button onClick={handleRegister} variant="primary" type="submit" className="w-100">
                    Register
                  </Button>
                  <p>
                    have an account ? <Link to={'/login'} className="text-primary">login</Link>
                  </p>
                </div>
                :
                <div>
                  <Button onClick={handleLogin}  variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                  <p>
                    Don't have an account ? <Link to={'/register'} className="text-primary">Register</Link>
                  </p>
                </div>
            }

          </Form>


        </Card>
      </Container>
    </>
  );
};

export default Auth;