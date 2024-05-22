import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import { Login } from "@/components/Login";
import { AuthContext } from "@/context/authContext";

export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({});
  const { setToken, setUserData } = useContext(AuthContext);

  const formData = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const enviar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", loginData);
      console.log("Token:", response.data.token);
      window.localStorage.setItem("jwt", response.data.token);
      setToken(response.data.token);
      setUserData(response.data.userData);
      router.push("/");
    } catch (err) {
      console.log("Erro: " + err.response.data + ". " + err);
    }
  };

  return (
    <>
      <Login formData={formData} enviar={enviar} />
    </>
  );
}
