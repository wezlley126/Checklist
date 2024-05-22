var jwt = require("jsonwebtoken");
const db = require("../mysqldb/connect.js");

export default async function handler(req, res) {
  const token = req.body.token;
  if (token) {
    //console.log('TOKEN RECEBIDO ------------------------>', token)
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(200).json({ status: false, error: err });
        console.log("err: ", err);
      } else {
        //Realiza uma busca pelo usuário com base no nome e email do token
        const sql = `SELECT * FROM users WHERE email = '${decoded.email}' AND name = '${decoded.name}'`;
        db.query(sql, (err, result) => {
          if (err) {
            console.log("User not found:", err);
            res.status(404).json("User not found");
          } else {
            //Retorna os dados do usuário
            const response = result[0];
            res.status(200).json({ status: true, ...response });
            console.log("DECODE: ", decoded);
          }
        });
      }
    });
  } else {
    res.status(200).json({ status: false, error: "Usuário não está logado" });
  }
}
