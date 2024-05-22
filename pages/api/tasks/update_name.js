import db from "../mysqldb/connect.js";
import axios from "axios";

export default function handler(req, res) {
  const { id, token, task, cpf } = req.body;

  const resolveToken = async () => {
    // Faz solicitação para descriptografar os dados do token
    const responseToken = await axios.post(
      process.env.APP_URL + "/api/auth/verify-token",
      token
    );
    const result = responseToken.data;

    // Parte de inserção dos dados
    const insertCommand = `UPDATE tasks SET task = '${task}' WHERE id_task = '${id}' AND userFK = '${result.cpf}'`;
    db.query(insertCommand, (err, result) => {
      if (err) {
        console.log("Erro ao atualizar os dados!", err);
      } else {
        console.log("Task atualizada com sucesso");
      }
    });
    //console.log('dados decodificados:-------------', responseToken.data)
  };

  resolveToken();
  res.status(200).json("Dados recebidos");
}
