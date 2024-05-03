import mysql from "mysql";

export default function handler(req, res) {
  let checkConnect = null;

  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });

  con.connect((err) => {
    if (err) {
      console.log(err);
      res.status(200).json("Erro ao se conectar com o banco");
    } else {
      res.status(200).json("Conectado ao banco com sucesso");
      checkConnect = "Conectado ao banco";
      console.log("Conectado ao banco mysql com sucesso");
    }
  });
}
