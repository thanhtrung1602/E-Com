import instance from "./axios";

export const getAccessToken = async () => {
  try {
    const response = await instance.get("/auth/getAccessToken");
    return response.data;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

export const getRefreshToken = async () => {
  try {
    const response = await instance.get("/auth/getRefreshToken");
    return response.data;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};
