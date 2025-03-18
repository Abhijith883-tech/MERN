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

// export const getSpecialAPI = async () => {
//   return await commonAPI("GET", `${SERVERURL}/admin/kid`);
// };


export const deleteMenProductAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/admin/men/${id}`);
};

export const editMenProductAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${SERVERURL}/admin/men/${id}`, updatedData);
};

export const addToCartAPI = async (cartData) => {
  return await commonAPI("POST", `${SERVERURL}/add`, cartData);
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

