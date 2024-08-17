import axios from "axios";
import jwt_decode, { jwtDecode } from 'jwt-decode';

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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
    refreshToken: autoRefreshToken // get lại cái refresh token gán vào 
  });
  return response.data.accessToken;
};

export default instance;
