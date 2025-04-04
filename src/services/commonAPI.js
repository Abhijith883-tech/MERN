// import axios from "axios"

// const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
//     const reqConfig = {
//         method: httpMethod,
//         url,
//         data: reqBody,
//         headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
//     }

//     return await axios(reqConfig).then(res => res).catch(err => err);
// }

// export default commonAPI;

import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
    try {
        const reqConfig = {
            method: httpMethod,
            url,
            data: reqBody,
            headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
        };

        const response = await axios(reqConfig);
        return response;  // ✅ Return the response object
    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        throw error; // ✅ Throw the error so it can be handled properly
    }
};

export default commonAPI;
