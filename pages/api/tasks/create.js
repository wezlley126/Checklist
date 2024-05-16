import axios from 'axios';
import db from './../mysqldb/connect.js';
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function handler(req, res) {
  const dataCreate = req.body;

  const resolveToken = async () => {

    // Faz solicitação para descriptografar os dados do token
    const responseToken = await axios.post(process.env.APP_URL + '/api/auth/verify-token', dataCreate.token);
    const result = responseToken.data.response

    // Parte de inserção dos dados
    const insertCommand = `INSERT INTO tasks VALUES (default, '${dataCreate.title}', '${dataCreate.task}', '${result.cpf}')`
    db.query(insertCommand, (err, result) => {
      if(err){
        console.log('Erro ao inserir os dados!', err);
      }else{
        console.log('Task adicionada com sucesso');
      }
    })
    //console.log('dados decodificados:-------------', responseToken.data)
  }

  resolveToken()
  res.status(200).json('Dados recebidos')

}
