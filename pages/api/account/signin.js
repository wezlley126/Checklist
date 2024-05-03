const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const { email, cpf, senha, senhaConfirm } = req.body;
  const senhaCrypt = await bcrypt.hash(senha, 6);

  console.log("email:", email);
  console.log("cpf:", cpf);
  console.log("senha:", senha);
  console.log("senhaConfirm:", senhaConfirm);
  console.log("senhaCriptografada:", senhaCrypt);
}
