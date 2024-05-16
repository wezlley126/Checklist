import axios from 'axios';
import { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function AddTask() {
  const { token } = useContext(AuthContext);
  const [requestData, setRequestData] = useState({
    token: { token }
  });
  /*
  const requestData = {
    nome: 'weslley',
    idade: 17,
    sexo: 'gostoso',
    token: { token }
  }
  */
  const inputsGet = (e) => {
    setRequestData({...requestData, [e.target.name]: e.target.value});
    console.log(requestData)
  }

  const sendData = async (e, data) => {
    e.preventDefault();
    const response = await axios.post("/api/tasks/create", requestData);
    console.log('resposta do servidor ---------------->', response.data);
  }

  const formCancel = (e) => {
    e.preventDefault();
  }

  return(
    <>
    <form onSubmit = {formCancel} method = 'post'>
      <input onChange = {inputsGet} type = 'text' name = 'title' placeholder = 'Titulo' />
      <input onChange = {inputsGet} type = 'text' name = 'task' placeholder = 'Tarefa' />
      <input onClick = {sendData} type = 'submit' name = 'adicionar' value = 'Adicionar' />
    </form>
    </>
  )
}
