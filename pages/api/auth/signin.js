const bcrypt = require("bcrypt");
const db = require("../mysqldb/connect.js");

export default async function handler(req, res) {
  const { nome, email, cpf, senha, senhaConfirm } = req.body;
  const senhaCrypt = await bcrypt.hash(senha, 6);

  function insertUsers(cpf, nome, email, senha) {
    const sql = `INSERT INTO users VALUES ('${cpf}', '${nome}', '${email}', '${senha}')`;
    db.query(sql, (error, result) => {
      if (error) {
        console.log("Erro ao inserir os dados:", error);
      } else {
        console.log("Dados inseridos com sucesso:", result);
      }
    });
  }

  insertUsers(cpf, nome, email, senhaCrypt);

  console.log("nome:", nome);
  console.log("email:", email);
  console.log("cpf:", cpf);
  console.log("senha:", senha);
  console.log("senhaConfirm:", senhaConfirm);
  console.log("senhaCriptografada:", senhaCrypt);
}
