import { config } from "~/config";
import axios, { InternalAxiosRequestConfig } from "axios";
import dayjs from "dayjs";
import jwt_decode, { jwtDecode } from "jwt-decode"; // Sử dụng default import
import useGet from "~/api/get";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const useAxiosWithAuth = () => {
  const { data: accessToken } = useGet("/auth/getAccessToken");
  const { data: refreshToken } = useGet("/auth/getRefreshToken");

  instance.interceptors.request.use(async (config) => {
    const user: jwt_decode.JwtPayload = jwtDecode(accessToken);
    const isExpired = dayjs.unix(Number(user)).diff(dayjs()) < 1;
    console.log("isExpired", isExpired);
    if (!isExpired) return;

    const response = await axios.post(
      "http://localhost:3000/auth/refresh",
      {
        refreshToken: refreshToken,
      },
      { withCredentials: true }
    );

    config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  });
};

export default {
  instance,
  useAxiosWithAuth,
};
