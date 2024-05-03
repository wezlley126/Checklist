import { useState, useEffect } from "react";
import axios from "axios";

import { Login } from "@/components/Login";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({});

  const formData = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const enviar = async (e) => {
    e.preventDefault();
    const enviado = await axios.post("/api/account/login", loginData);
    console.log("Dados enviados:", enviado);
  };

  return (
    <>
      <Login formData={formData} enviar={enviar} />
    </>
  );
}
