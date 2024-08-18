import useGet from "~/api/get";
function GetAccessToken() {
  const { data: accessToken } = useGet("/auth/getAccessToken");
  const { data: refreshToken } = useGet("/auth/getRefreshToken");

  return {
    accessToken,
    refreshToken,
  };
}

export default GetAccessToken;
