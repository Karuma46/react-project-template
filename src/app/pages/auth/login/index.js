import React from "react";
import Api from "app/config/api";
import { useMutation } from "react-query";
import LoginForm from "./loginForm";

const Login = () => {
  const mutation = useMutation((values) =>
    Api.post("/dj-rest-auth/login/", values)
  );

  return (
    <div>
      <LoginForm mutation={mutation} />
    </div>
  );
};
export default Login;
