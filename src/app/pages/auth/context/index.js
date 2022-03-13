import React, { createContext, useState, useEffect } from "react";
import Api from "app/config/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  var auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuthProvider = () => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    Api.get("users/is_auth/")
      .then((res) => {
        setUser(res.data);
        setIsAuth(true);
      })
      .catch((Error) => {
        console.log(Error);
      });
    console.log("authcontext");
  }, []);

  return { user, isAuth, setIsAuth };
};
