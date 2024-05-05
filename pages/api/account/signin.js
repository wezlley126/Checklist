const bcrypt = require("bcrypt");
const db = require('./../mysqldb/connect.js')

export default async function handler(req, res) {
  const {insertUsers} = await db();
  const {nome, email, cpf, senha, senhaConfirm } = req.body;
  const senhaCrypt = await bcrypt.hash(senha, 6);

  

  insertUsers(cpf, nome, email, senhaCrypt)

  console.log("nome:", nome)
  console.log("email:", email);
  console.log("cpf:", cpf);
  console.log("senha:", senha);
  console.log("senhaConfirm:", senhaConfirm);
  console.log("senhaCriptografada:", senhaCrypt);
}
