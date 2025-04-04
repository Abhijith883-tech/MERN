// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { deleteAllCartItemsAPI, getCartAPI, deleteCartItemAPI, PayAPI, ClearCartAPI } from '../services/allAPI';

// const Cart = () => {
//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const getCart = async () => {
//       try {
//         const userId = sessionStorage.getItem("user");
//         const uId = JSON.parse(userId);

//         const result = await getCartAPI(uId._id);
//         console.log(result);

//         // setCartProducts(result.data[0].products);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     getCart();
//   }, []);



//   useEffect(() => {
//     const clearCart = async () => {
//       try {
//         // const userId = sessionStorage.getItem("user");
//         // const uId = JSON.parse(userId);

//         const result = await ClearCartAPI();
//         setCartProducts(result.data[0].products);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     clearCart();
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

//   // Function to delete a single cart item
//   const deleteCartItem = async (productId) => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;

//       await deleteCartItemAPI(userId, productId);

//       setCartProducts(prevCart => prevCart.filter(item => item.productId !== productId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to empty the entire cart
//   const emptyCart = async () => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;
//       await deleteAllCartItemsAPI(userId);
//       setCartProducts([]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await PayAPI(cartProducts);
//       console.log("API Response:", response); // ✅ Now you will see the correct API response

//       if (response.url) {
//         window.location.href = response.url; // Redirect to Stripe checkout
//       } else {
//         console.error("Payment initiation failed:", response);
//       }
//     } catch (error) {
//       console.error("Payment Error:", error.response ? error.response.data : error.message);
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
//                           <button
//                             onClick={() => deleteCartItem(product.productId)}
//                             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                           >
//                             <i className="fa-solid fa-trash"></i>
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
//             <button onClick={handlePayment} className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700">
//               {/* Check Out */}
//               Pay
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;



// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { deleteAllCartItemsAPI, getCartAPI, deleteCartItemAPI, PayAPI } from '../services/allAPI';

// const Cart = () => {
//   const [cartProducts, setCartProducts] = useState([]);
//   const [isPaying, setIsPaying] = useState(false);
//   const [isPaid, setIsPaid] = useState(false);
//   // Fetch Cart Data
//   useEffect(() => {
//     const getCart = async () => {
//       try {
//         const userId = sessionStorage.getItem("user");
//         if (!userId) {
//           console.log("No user found in sessionStorage");
//           return;
//         }

//         const uId = JSON.parse(userId);
//         if (!uId?._id) {
//           console.log("Invalid user data:", uId);
//           return;
//         }

//         console.log("Fetching cart for user ID:", uId._id);
//         const result = await getCartAPI(uId._id);
//         console.log("Cart API Response:", result);

//         if (result.data.length > 0) {
//           setCartProducts(result.data[0].products);
//         } else {
//           setCartProducts([]);
//         }
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

//   // Function to delete a single cart item
//   const deleteCartItem = async (productId) => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;

//       await deleteCartItemAPI(userId, productId);
//       setCartProducts(prevCart => prevCart.filter(item => item.productId !== productId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to empty the entire cart
//   const emptyCart = async () => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;
//       await deleteAllCartItemsAPI(userId);
//       setCartProducts([]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to handle payments
//   // const handlePayment = async () => {
//   //   try {
//   //     const response = await PayAPI(cartProducts);
//   //     console.log("API Response Pay:", response);

//   //     if (response.url) {
//   //       window.location.href = response.url; // Redirect to Stripe checkout
//   //     } else {
//   //       console.error("Payment initiation failed:", response);
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment Error:", error.response ? error.response.data : error.message);
//   //   }
//   // };


//   // const handlePayment = async () => {
//   //   try {
//   //     setIsPaying(true);
//   //     const response = await PayAPI(cartProducts);
//   //     if (response.url) {
//   //       window.location.href = response.url;
//   //     } else {
//   //       console.error("Payment initiation failed:", response);
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment Error:", error.response ? error.response.data : error.message);
//   //   } finally {
//   //     setIsPaying(false);
//   //   }
//   // };

//   // const handlePayment = async () => {
//   //   try {
//   //     setIsPaying(true);
//   //     const response = await PayAPI(cartProducts);

//   //     if (response.url) {
//   //       window.location.href = response.url;
//   //     } else {
//   //       console.error("Payment initiation failed:", response);
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment Error:", error.response ? error.response.data : error.message);
//   //   } finally {
//   //     setIsPaying(false);
//   //     setIsPaid(true); // Mark as paid after successful payment
//   //   }
//   // };

//   const handlePayment = async () => {
//     try {
//       setIsPaying(true);
//       const response = await PayAPI(cartProducts);

//       if (response.url) {
//         window.location.href = response.url; // Redirect to Stripe checkout
//       } else {
//         console.error("Payment initiation failed:", response);
//       }
//     } catch (error) {
//       console.error("Payment Error:", error.response ? error.response.data : error.message);
//     } finally {
//       setIsPaying(false);
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
//                           <button
//                             onClick={() => deleteCartItem(product.productId)}
//                             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                           >
//                             <i className="fa-solid fa-trash"></i>
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
//             {/* <button onClick={handlePayment} className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700">
//               Pay
//             </button> */}
//             {/* <button
//               onClick={handlePayment}
//               disabled={cartProducts.length === 0 || isPaying}
//               className={`bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 ${cartProducts.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {isPaying ? "Processing..." : "Pay"}
//             </button> */}

//             <button
//               onClick={handlePayment}
//               disabled={cartProducts.length === 0 || isPaying || isPaid}
//               className={`bg-green-600 text-white w-full py-2 rounded-lg ${isPaid ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-green-700'}`}
//             >
//               {isPaid ? "Paid" : isPaying ? "Processing..." : "Pay"}
//             </button>


//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { Link, useLocation } from "react-router-dom";
// import { deleteAllCartItemsAPI, getCartAPI, deleteCartItemAPI, PayAPI } from "../services/allAPI";

// const Cart = () => {
//   const location = useLocation();
//   const [cartProducts, setCartProducts] = useState([]);
//   const [isPaying, setIsPaying] = useState(false);
//   const [isPaid, setIsPaid] = useState(false);

//   // Fetch Cart Data
//   useEffect(() => {
//     const getCart = async () => {
//       try {
//         const userId = sessionStorage.getItem("user");
//         if (!userId) return;

//         const uId = JSON.parse(userId);
//         if (!uId?._id) return;

//         const result = await getCartAPI(uId._id);

//         if (result.data.length > 0) {
//           setCartProducts(result.data[0].products);
//         } else {
//           setCartProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     getCart();
//   }, []);

//   // Detect successful payment from URL parameters
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     if (queryParams.get("payment") === "success") {
//       setIsPaid(true);
//     }
//   }, [location]);

//   // Function to update quantity
//   const updateQuantity = (index, type) => {
//     setCartProducts((prevCart) =>
//       prevCart.map((item, i) =>
//         i === index
//           ? { ...item, quantity: type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
//           : item
//       )
//     );
//   };

//   // Function to delete a single cart item
//   const deleteCartItem = async (productId) => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;
//       await deleteCartItemAPI(userId, productId);
//       setCartProducts((prevCart) => prevCart.filter((item) => item.productId !== productId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to empty the entire cart
//   const emptyCart = async () => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;
//       await deleteAllCartItemsAPI(userId);
//       setCartProducts([]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to handle payments
//   const handlePayment = async () => {
//     try {
//       setIsPaying(true);
//       const response = await PayAPI(cartProducts);

//       if (response.url) {
//         window.location.href = response.url; // Redirect to Stripe checkout
//       } else {
//         console.error("Payment initiation failed:", response);
//       }
//     } catch (error) {
//       console.error("Payment Error:", error.response ? error.response.data : error.message);
//     } finally {
//       setIsPaying(false);
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
//                             <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l" onClick={() => updateQuantity(index, "decrement")}>
//                               -
//                             </button>
//                             <input type="text" className="w-10 text-center border" value={product.quantity} readOnly />
//                             <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r" onClick={() => updateQuantity(index, "increment")}>
//                               +
//                             </button>
//                           </div>
//                         </td>
//                         <td className="border p-2">${(product.price * product.quantity).toFixed(2)}</td>
//                         <td className="border p-2">
//                           <button onClick={() => deleteCartItem(product.productId)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                             <i className="fa-solid fa-trash"></i>
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

//             <button
//               onClick={handlePayment}
//               disabled={cartProducts.length === 0 || isPaying || isPaid}
//               className={`bg-green-600 text-white w-full py-2 rounded-lg ${isPaid ? "bg-gray-400 cursor-not-allowed" : "hover:bg-green-700"}`}
//             >
//               {isPaid ? "Paid" : isPaying ? "Processing..." : "Pay"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { Link, useLocation } from "react-router-dom";
// import { deleteAllCartItemsAPI, getCartAPI, deleteCartItemAPI, PayAPI } from "../services/allAPI";

// const Cart = () => {
//   const location = useLocation();
//   const [cartProducts, setCartProducts] = useState([]);
//   const [isPaying, setIsPaying] = useState(false);
//   const [isPaid, setIsPaid] = useState(false);

//   // Fetch Cart Data
//   useEffect(() => {
//     const getCart = async () => {
//       try {
//         const userId = sessionStorage.getItem("user");
//         if (!userId) return;

//         const uId = JSON.parse(userId);
//         if (!uId?._id) return;

//         const result = await getCartAPI(uId._id);
//         if (result.data.length > 0) {
//           setCartProducts(result.data[0].products);
//         } else {
//           setCartProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     getCart();
//   }, []);

//   // Detect successful payment from URL parameters and store in localStorage
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     if (queryParams.get("payment") === "success") {
//       setIsPaid(true);
//       localStorage.setItem("isPaid", "true"); // Store payment status
//     }
//   }, [location]);

//   // Check if user already paid from localStorage
//   useEffect(() => {
//     const paidStatus = localStorage.getItem("isPaid");
//     if (paidStatus === "true") {
//       setIsPaid(true);
//     }
//   }, []);

//   // Function to update quantity
//   const updateQuantity = (index, type) => {
//     setCartProducts((prevCart) =>
//       prevCart.map((item, i) =>
//         i === index
//           ? { ...item, quantity: type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
//           : item
//       )
//     );
//   };

//   // Function to delete a single cart item
//   const deleteCartItem = async (productId) => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;
//       await deleteCartItemAPI(userId, productId);
//       setCartProducts((prevCart) => prevCart.filter((item) => item.productId !== productId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to empty the entire cart
//   const emptyCart = async () => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("user"))._id;
//       await deleteAllCartItemsAPI(userId);
//       setCartProducts([]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to handle payments
//   const handlePayment = async () => {
//     try {
//       setIsPaying(true);
//       const response = await PayAPI(cartProducts);

//       if (response.url) {
//         window.location.href = response.url; // Redirect to Stripe checkout
//       } else {
//         console.error("Payment initiation failed:", response);
//       }
//     } catch (error) {
//       console.error("Payment Error:", error.response ? error.response.data : error.message);
//     } finally {
//       setIsPaying(false);
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
//                             <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l" onClick={() => updateQuantity(index, "decrement")}>
//                               -
//                             </button>
//                             <input type="text" className="w-10 text-center border" value={product.quantity} readOnly />
//                             <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r" onClick={() => updateQuantity(index, "increment")}>
//                               +
//                             </button>
//                           </div>
//                         </td>
//                         <td className="border p-2">${(product.price * product.quantity).toFixed(2)}</td>
//                         <td className="border p-2">
//                           <button onClick={() => deleteCartItem(product.productId)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                             <i className="fa-solid fa-trash"></i>
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
//           </div>

//           {/* Total Summary Section */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-bold mb-3">Total: <span className="text-red-500">${cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span></h2>
//             <button onClick={handlePayment} disabled={cartProducts.length === 0 || isPaying || isPaid} className={`bg-green-600 text-white w-full py-2 rounded-lg ${isPaid ? "bg-gray-400 cursor-not-allowed" : "hover:bg-green-700"}`}>{isPaid ? "Paid" : isPaying ? "Processing..." : "Pay"}</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";
import { deleteAllCartItemsAPI, getCartAPI, deleteCartItemAPI, PayAPI } from "../services/allAPI";

const Cart = () => {
  const location = useLocation();
  const [cartProducts, setCartProducts] = useState([]);
  const [isPaying, setIsPaying] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // Fetch user ID from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId = user ? user._id : null;

  // Fetch Cart Data for Logged-In User
  useEffect(() => {
    const getCart = async () => {
      if (!userId) {
        setCartProducts([]); // Reset cart when no user is logged in
        return;
      }
      try {
        const result = await getCartAPI(userId);
        if (result.data.length > 0) {
          setCartProducts(result.data[0].products);
        } else {
          setCartProducts([]);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    getCart();
  }, [userId]); // Refetch cart when userId changes

  // Detect successful payment from URL and store it per user
  useEffect(() => {
    if (!userId) return; // Don't check for payment if user is not logged in

    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("payment") === "success") {
      setIsPaid(true);
      sessionStorage.setItem(`isPaid_${userId}`, "true"); // Store per-user payment status
    }
  }, [location, userId]);

  // Load payment status from sessionStorage per user
  useEffect(() => {
    if (!userId) return;

    const paidStatus = sessionStorage.getItem(`isPaid_${userId}`);
    if (paidStatus === "true") {
      setIsPaid(true);
    }
  }, [userId]);

  // Function to handle payments
  const handlePayment = async () => {
    try {
      setIsPaying(true);
      const response = await PayAPI(cartProducts);
      if (response.url) {
        window.location.href = response.url; // Redirect to Stripe checkout
      } else {
        console.error("Payment initiation failed:", response);
      }
    } catch (error) {
      console.error("Payment Error:", error.response ? error.response.data : error.message);
    } finally {
      setIsPaying(false);
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
                        <td className="border p-2">{product.quantity}</td>
                        <td className="border p-2">${(product.price * product.quantity).toFixed(2)}</td>
                        <td className="border p-2">
                          <button onClick={() => deleteCartItem(product.productId)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center p-4">No items in the cart</td>
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
              Total: <span className="text-red-500">${cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
            </h2>
            <button
              onClick={handlePayment}
              disabled={cartProducts.length === 0 || isPaying || isPaid}
              className={`bg-green-600 text-white w-full py-2 rounded-lg ${isPaid ? "bg-gray-400 cursor-not-allowed" : "hover:bg-green-700"}`}
            >
              {isPaid ? "Paid" : isPaying ? "Processing..." : "Pay"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
