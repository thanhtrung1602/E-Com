import axios from "axios";
<<<<<<< HEAD
import jwt_decode, { jwtDecode } from 'jwt-decode';
=======
// import { jwtDecode } from "jwt-decode"; // Correct import
// import { getAccessToken, getRefreshToken } from "./tokenService";
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
<<<<<<< HEAD
    return response.data;
=======
    return response;
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce
  },
  function (error) {
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
const checkTokenExpiration = (token: string): Boolean => {
  const decodedToken: jwt_decode.JwtPayload = jwtDecode(token)
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp === undefined) {
    throw new Error("Token does not contain an expiration field.");
  }
  return decodedToken?.exp < currentTime;
};

instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('accessToken'); // chỉnh lại cái gán token
    if (token && checkTokenExpiration(token)) {
      await autoRefreshToken();
    }
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

const autoRefreshToken = async () => {
  const response = await axios.post('http://localhost:3000/auth/refresh', {
    refreshToken: refreshToken; // get lại cái refresh token gán vào 
  });
  return response.data.accessToken;
};
=======
// const checkTokenExpiration = (token: string) => {
//   const decodedToken = jwtDecode(token);
//   const currentTime = Date.now() / 1000;
//   // Check if 'exp' exists and compare
//   if (decodedToken.exp) {
//     return decodedToken.exp < currentTime;
//   }

//   // Handle case where 'exp' is undefined
//   console.error("Token does not have an expiration time");
//   return true;
// };

// const refreshToken = async () => {
//   const saveRefreshToken = await getRefreshToken();
//   try {
//     const response = await axios.post("http://localhost:3000/auth/refresh", {
//       refreshToken: saveRefreshToken,
//     });
//     const newAccessToken = response.data.accessToken;
//     console.log("New access token:", newAccessToken);
//     return newAccessToken;
//   } catch (error) {
//     console.error("Failed to refresh token:", error);
//     throw error;
//   }
// };

<<<<<<< HEAD
const autoRefreshToken = async () => {
  const response = await axios.post('http://localhost:3000/auth/refresh', {
    refreshToken: autoRefreshToken // get lại cái refresh token gán vào 
  });
  return response.data.accessToken;
};
=======
// instance.interceptors.request.use(
//   async (config) => {
//     let saveAccessToken = await getAccessToken();
//     if (saveAccessToken && checkTokenExpiration(saveAccessToken)) {
//       saveAccessToken = await refreshToken();
//     }
//     config.headers["Authorization"] = `Bearer ${saveAccessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
>>>>>>> Trung
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce

export default instance;
