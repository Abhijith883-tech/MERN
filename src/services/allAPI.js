import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// registerAPI called by auth

export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
}


// loginAPI called by auth

export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody);
}

export const menAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/admin/men/add`, reqBody);
}

export const womenAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/admin/women/add`, reqBody);
}

export const kidAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/admin/kid/add`, reqBody);
}


export const specialAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/admin/special/add`, reqBody);
};

export const getSpecialAPI = async (reqBody) => {
  return await commonAPI("GET", `${SERVERURL}/admin/special`, reqBody);
};



export const getMenProductsAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/admin/men`);
};

export const getWomenProductsAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/admin/women`);
};

export const getKidProductsAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/admin/kid`);
};

export const deleteMenProductAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/admin/men/${id}`);
};

export const editMenProductAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${SERVERURL}/admin/men/${id}`, updatedData);
};

export const addToCartAPI = async (cartData) => {
  return await commonAPI("POST", `${SERVERURL}/add`, cartData);
};

export const addToCartSpecialAPI = async (cartData) => {
  return await commonAPI("POST", `${SERVERURL}/specail`, cartData);
};

export const getCartAPI = async (userId) => {
  return await commonAPI("GET", `${SERVERURL}/cart/${userId}`);
};

export const deleteAllCartItemsAPI = async (userId) => {
  return await commonAPI("DELETE", `${SERVERURL}/empty-cart/${userId}`);
};

export const deleteCartItemAPI = async (userId, productId) => {
  return await commonAPI("DELETE", `${SERVERURL}/cart/${userId}/product/${productId}`);
};

export const NikeAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/nike`);
};

export const LeviAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/levi`);
};

export const ZaraAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/zara`);
};

export const AsosAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/asos`);
};

export const PridaAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/prida`);
};

export const MenCountAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/count/men`);
};

export const WomenCountAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/count/women`);
};

export const KidCountAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/count/kid`);
};

export const UserCountAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/count/user`);
};


export const PayAPI = async (cartProducts) => {
  const formattedProducts = cartProducts.map((p) => ({
      name: p.name,
      price: p.price,
      quantity: p.quantity
  }));

  try {
      const response = await commonAPI(
          "POST",
          "http://localhost:3000/create-checkout-session", 
          { products: formattedProducts },
          { "Content-Type": "application/json" }
      );

      console.log("API Response:", response.data);
      if (response.data.url) {
          window.location.href = response.data.url; // Redirect to Stripe
      } else {
          console.error("Payment initiation failed:", response.data);
      }
  } catch (error) {
      console.error("Payment API Error:", error.response?.data || error);
  }
};


export const ClearCartAPI = async () => {
  return await commonAPI("DELETE", `${SERVERURL}/clear-cart`);
};

// export const LogeOutAPI = async () => {
//   return await commonAPI("GET", `${SERVERURL}/logout`);
// };


export const LogeOutAPI = async () => {
  const token = sessionStorage.getItem("token"); // Retrieve the token from sessionStorage

  return await commonAPI("GET", `${SERVERURL}/logout`, {}, {
    Authorization: `Bearer ${token}`
  });
};
