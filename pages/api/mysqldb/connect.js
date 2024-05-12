import mysql from "mysql";

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "checklist",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectado ao banco mysql com sucesso");
  }
});

module.exports = db;

/*   const insertUsers = (cpf, name, email, password) => {
    const sql = `INSERT INTO users VALUES ('${cpf}', '${name}', '${email}', '${password}')`;
    con.query(sql, (error, result) => {
      if (error) {
        console.log("Erro ao inserir os dados:", error);
      } else {
        console.log("Dados inseridos com sucesso:", result);
      }
    });
  }; */
