import { useContext } from "react";
import DashBoardTemplate from "app/components/dash";
import { AuthContext } from "./auth/context";
import Login from "./auth/login";

const Home = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <>
        <p>Loading. Please Wait...</p>
      </>
    );
  }

  if (!isAuth) {
    return <Login />;
  }

  return (
    <>
      <DashBoardTemplate />
    </>
  );
};

export default Home;
