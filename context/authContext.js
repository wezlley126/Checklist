import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  userData: {},
});

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const tokenStorage = window.localStorage.getItem("jwt");
    setToken(tokenStorage);
  }, []);

  const value = {
    token,
    setToken,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
