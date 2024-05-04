const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const { email, senha } = req.body;
  const senhaCrypt = await bcrypt.hash(senha, 6);
  /*   bcrypt.compare(myPlaintextPassword, hashPassword).then(function(result) {
    // result == true
    // result == false
  }); */
  console.log("Email recebido:", email);
  console.log("Senha recebida:", senha);
  console.log("Senha criptografada:", senhaCrypt)
  console.log('Tudo ok aqui')
}