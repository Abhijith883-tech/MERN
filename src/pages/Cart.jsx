

// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { deleteAllCartItemsAPI, getCartAPI } from '../services/allAPI';

// const Cart = () => {
//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const getCart = async () => {
//       try {
//         const userId = sessionStorage.getItem("user");
//         const uId = JSON.parse(userId);

//         const result = await getCartAPI(uId._id);
//         const cartItems = result.data[0].products.map(product => ({
//           ...product,
//           quantity: 1, // Add quantity field if not available
//         }));

//         setCartProducts(cartItems);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     getCart();
//   }, []);

//   // Function to update quantity
//   const updateQuantity = (index, type) => {
//     setCartProducts(prevCart =>
//       prevCart.map((item, i) => {
//         if (i === index) {
//           const newQuantity = type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       })
//     );
//   };

//   const emptyCart = async () => {
//     try {
//       const userId = sessionStorage.getItem("user");
//       const uId = JSON.parse(userId);
  
//       await deleteAllCartItemsAPI(uId._id); // Wait for API response
  
//       setCartProducts([]); // Set the cart to empty immediately
//     } catch (error) {
//       console.log(error);
//     }
//   };

  


//   return (
//     <>
//       <Header />
//       <div className="container mx-auto pt-24 px-4 mb-20">
//         <h1 className="text-2xl font-bold text-blue-600">Cart Summary</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//           {/* Cart Items Section */}
//           <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="border p-2">#</th>
//                     <th className="border p-2">Name</th>
//                     <th className="border p-2">Image</th>
//                     <th className="border p-2">Quantity</th>
//                     <th className="border p-2">Price</th>
//                     <th className="border p-2">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartProducts.length > 0 ? (
//                     cartProducts.map((product, index) => (
//                       <tr key={index} className="text-center">
//                         <td className="border p-2">{index + 1}</td>
//                         <td className="border p-2">{product.name}</td>
//                         <td className="border p-2">
//                           <img src={product.image} alt="Product" className="h-16 w-16 mx-auto" />
//                         </td>
//                         <td className="border p-2">
//                           <div className="flex items-center justify-center">
//                             <button
//                               className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
//                               onClick={() => updateQuantity(index, "decrement")}
//                             >
//                               -
//                             </button>
//                             <input
//                               type="text"
//                               className="w-10 text-center border"
//                               value={product.quantity}
//                               readOnly
//                             />
//                             <button
//                               className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
//                               onClick={() => updateQuantity(index, "increment")}
//                             >
//                               +
//                             </button>
//                           </div>
//                         </td>
//                         <td className="border p-2">${(product.price * product.quantity).toFixed(2)}</td>
//                         <td className="border p-2">
//                           <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                             <i onClick={trash} className="fa-solid fa-trash"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="text-center p-4">
//                         No items in the cart
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="flex justify-between mt-4">
//               <button onClick={emptyCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//                 Empty Cart
//               </button>
//               <Link to="/" className="bg-blue-600 text-white px-4 py-2 text-decoration-none rounded hover:bg-blue-700">
//                 Shop More
//               </Link>
//             </div>
//           </div>

//           {/* Total Summary Section */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-bold mb-3">
//               Total Amount:{" "}
//               <span className="text-red-500">
//                 ${cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
//               </span>
//             </h2>
//             <hr className="my-3" />
//             <button className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700">
//               Check Out
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { deleteAllCartItemsAPI, getCartAPI, deleteCartItemAPI } from '../services/allAPI';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      try {
        const userId = sessionStorage.getItem("user");
        const uId = JSON.parse(userId);

        const result = await getCartAPI(uId._id);
        setCartProducts(result.data[0].products);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    getCart();
  }, []);

  // Function to update quantity
  const updateQuantity = (index, type) => {
    setCartProducts(prevCart =>
      prevCart.map((item, i) => {
        if (i === index) {
          const newQuantity = type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Function to delete a single cart item
  const deleteCartItem = async (productId) => {
    try {
      const userId = JSON.parse(sessionStorage.getItem("user"))._id;
      
      await deleteCartItemAPI(userId, productId);

      setCartProducts(prevCart => prevCart.filter(item => item.productId !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  // Function to empty the entire cart
  const emptyCart = async () => {
    try {
      const userId = JSON.parse(sessionStorage.getItem("user"))._id;
      await deleteAllCartItemsAPI(userId);
      setCartProducts([]);
    } catch (error) {
      console.log(error);
    }
  };

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
                  {cartProducts.length > 0 ? (
                    cartProducts.map((product, index) => (
                      <tr key={index} className="text-center">
                        <td className="border p-2">{index + 1}</td>
                        <td className="border p-2">{product.name}</td>
                        <td className="border p-2">
                          <img src={product.image} alt="Product" className="h-16 w-16 mx-auto" />
                        </td>
                        <td className="border p-2">
                          <div className="flex items-center justify-center">
                            <button
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
                              onClick={() => updateQuantity(index, "decrement")}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="w-10 text-center border"
                              value={product.quantity}
                              readOnly
                            />
                            <button
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
                              onClick={() => updateQuantity(index, "increment")}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="border p-2">${(product.price * product.quantity).toFixed(2)}</td>
                        <td className="border p-2">
                          <button
                            onClick={() => deleteCartItem(product.productId)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center p-4">
                        No items in the cart
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-4">
              <button onClick={emptyCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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
              Total Amount:{" "}
              <span className="text-red-500">
                ${cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
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

