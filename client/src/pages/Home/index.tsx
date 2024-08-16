import getAccessToken from "~/hooks/getAccessToken";

function Home() {
  const { accessToken }: { accessToken: string } = getAccessToken();
  return <div>Đây là home {accessToken}</div>;
}

export default Home;
