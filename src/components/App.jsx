import React from "react";
import "./App.css";
import AuthenticatedUser from "./AuthenticatedUser/AuthenticatedUser"
import Gust from "./Gust/Gust";
import AuthUser from "./LoginLogOut/AuthUser/AuthUser";

const App = () => {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Gust />
  }
  return (
    <>
      <AuthenticatedUser />
    </>
  );
};
export default App;
