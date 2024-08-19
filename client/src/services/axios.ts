<<<<<<< HEAD
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
=======
/* eslint-disable @typescript-eslint/no-unused-vars */
>>>>>>> 01cedbe16edbb15f356f13b89a3f07dffe65bbde
import axios from "axios";
import jwt_decode, { jwtDecode } from 'jwt-decode';

const instance = axios.create({
  baseURL: "http://localhost:3000"
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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
=======

>>>>>>> 01cedbe16edbb15f356f13b89a3f07dffe65bbde
const autoRefreshToken = async () => {
  const response = await axios.post('http://localhost:3000/auth/refresh', {
    refreshToken: autoRefreshToken // get lại cái refresh token gán vào 
  });
  return response.data.accessToken;
};
<<<<<<< HEAD
=======

>>>>>>> 01cedbe16edbb15f356f13b89a3f07dffe65bbde
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
<<<<<<< HEAD

=======
>>>>>>> 01cedbe16edbb15f356f13b89a3f07dffe65bbde

export default instance;
