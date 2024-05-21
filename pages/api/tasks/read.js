import axios from 'axios';
import db from './../mysqldb/connect.js';
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function handler(req, res) {
        const getTokenData = async () => {
            const requestData = req.body
            //console.log('dados recebidos pelo servidor ------------>', requestData.token)
            const responseToken = await axios.post(process.env.APP_URL + '/api/auth/verify-token', requestData);
            const result = responseToken.data.response
            //console.log('Dados do token retornados ---------->', result.cpf)
            return(result.cpf)
            //const responseToken = await axios.post(process.env.APP_URL + '/api/auth/verify-token', dataCreate.token);
        }

        const getTasks = async (cpf) => {
            const sql = `SELECT * FROM tasks WHERE userFK = '${cpf}'`
            db.query(sql, (err, result) => {
                if(err){
                    console.log('Erro ao solicitar dados de tasks: ', err)
                    res.status(404).json('Usuário não encontrado')
                }else{
                    //console.log('Dados resgatados com sucesso: ', result)
                    res.status(200).json(result)
                }
            })
        }

        const responseTasks = async () => {
            const cpf = await getTokenData()
            getTasks(cpf)
            
        }
        responseTasks()
}