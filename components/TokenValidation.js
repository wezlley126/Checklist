import { useEffect, useState, cloneElement, Children, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/authContext";
const jwt = require("jsonwebtoken");

export const TokenValidation = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    async function validateToken() {
      setIsLoading(true);
      const response = await axios.post("/api/auth/verify-token", { token });
      console.log(response);
      setIsLoggedIn({
        status: response.data.status,
        email: response.data.email,
        name: response.data.name,
      });
      setIsLoading(false);
    }
    validateToken();
  }, [token]);

  if (isLoggedIn === undefined || isLoading)
    return (
      <div>
        <h2>Carregando....</h2>
      </div>
    );

  if (isLoggedIn?.status === false && !token) {
    router.push("/auth/login");
  }

  const childrenWithProps = Children.map(children, (child) => {
    return cloneElement(child, {
      email: isLoggedIn.email,
      name: isLoggedIn.name,
    });
  });

  return <>{childrenWithProps}</>;
};
