import { useState, useEffect } from "react";
import axios from "axios";
import { CreateAccount } from "@/components/CreateAccount";

export default function signin() {
  const [loginData, setLoginData] = useState({});

  const formData = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  };

  const enviar = async (e) => {
    e.preventDefault();
    const enviado = await axios.post("/api/account/signin", loginData);
    console.log("Dados enviados:", enviado);
  };

  return (
    <>
      <CreateAccount formData={formData} enviar={enviar} />
    </>
  );
}
