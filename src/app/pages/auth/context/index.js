import React, { createContext, useState, useEffect } from "react";
import Api from "app/config/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  var auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuthProvider = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    Api.get("users/is_auth/")
      .then((res) => {
        setIsLoading(false);
        setUser(res.data);
        setIsAuth(true);
        setError(null);
      })
      .catch((Error) => {
        setError(Error);
        setIsLoading(false);
      });
  }, [isAuth]);

  return { user, isAuth, setIsAuth, isLoading, error };
};
