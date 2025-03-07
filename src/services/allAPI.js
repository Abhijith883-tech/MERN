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

export const getMenProductsAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/admin/men`);
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

export const getCartAPI = async (userId) => {
  return await commonAPI("GET", `${SERVERURL}/cart/${userId}`);
};
