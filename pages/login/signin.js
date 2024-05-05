import { useState, useEffect } from "react";
import axios from "axios";
import { CreateAccount } from "@/components/CreateAccount";
import validarCPF from './cpfValidar.js';

export default function signin() {
  const [loginData, setLoginData] = useState({});
  const [cpfValida, setCpfValida] = useState('Criar');

  const formData = async (event) => {
    //Pega a input de Envio de dados com base na classe.
    let inputForm = document.querySelector('.CreateAccount_inputSubmit___lr2d')
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [name]: value });
    //console.log(loginData);
    // Validação do CPF
      if(name == 'cpf' && value.length == 11){
        const validacao = validarCPF(value)
        // IF que verifica se o cpf é válido e altera o input de Envio.
        if(validacao == 0){
          setCpfValida('Por favor, insira um CPF válido')
          inputForm.style.backgroundColor = '#800000'
          inputForm.disabled = true
        }else{
          setCpfValida('Criar')
          inputForm.style.backgroundColor = '#7a25c8'
          inputForm.disabled = false
        }
    }
  };

  const enviar = async (e) => {
    e.preventDefault();
    const enviado = await axios.post("/api/account/signin", loginData);
    console.log("Dados enviados:", enviado);
  };

  return (
    <>
      <CreateAccount formData={formData} enviar={enviar} cpfValida={cpfValida} />
    </>
  );
}
