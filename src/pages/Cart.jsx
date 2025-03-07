import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { getCartAPI } from '../services/allAPI';

const Cart = () => {

  const [cartProducts,setcartProducts]=useState([])
  console.log(cartProducts);
  

  useEffect(() => {
    const getCart = async () => {
      try {
        const userId = sessionStorage.getItem("user"); // Make sure userId is stored correctly

        const uId=JSON.parse(userId)
        // console.log(uId);
        // console.log(uId._id);
        
        
        const result = await getCartAPI(uId._id);
        // console.log(result.data[0].products)
        setcartProducts(result.data[0].products)
        console.log(result.data[0].products[0]);
        // console.log(result);
        // console.log(result.data);
        
        
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    getCart();
  }, []);
  
  
  

  return (
    <>
      <Header />
      <div className="container mx-auto pt-24 px-4 mb-20">
        <h1 className="text-2xl font-bold text-blue-600">Cart Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">#</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Image</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartProducts.length>0?(
                      cartProducts.map((product,index)=>(
                        <tr className="text-center">
                    <td className="border p-2">{index+1}</td>
                    <td className="border p-2">{product.name}</td>
                    



                    <td className="border p-2">
                      <img src={product.image} alt="Product" className="h-16 w-16 mx-auto" />
                    </td>
                    <td className="border p-2">
                      <div className="flex items-center justify-center">
                        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">-</button>
                        <input type="text" className="w-10 text-center border" value="1" readOnly />
                        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">+</button>
                      </div>
                    </td>
                    <td className="border p-2">${product.price}</td>
                    <td className="border p-2">
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                      ))
                    ):(
                      <tr>
                        <td>No items in the cart</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Empty Cart
              </button>
              <Link to="/" className="bg-blue-600 text-white px-4 py-2 text-decoration-none rounded hover:bg-blue-700">
                Shop More
              </Link>
            </div>
          </div>

          {/* Total Summary Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">
              Total Amount: <span className="text-red-500">$5</span>
            </h2>
            <hr className="my-3" />
            <button className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
