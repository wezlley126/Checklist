import mysql from "mysql";

function db(req, res) {
  let checkConnect = null;

  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "checklist"
  });

  con.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      checkConnect = "Conectado ao banco";
      console.log("Conectado ao banco mysql com sucesso");
    }
  });

  const insertUsers = (cpf, name, email, password) => {
    const sql = `INSERT INTO users VALUES ('${cpf}', '${name}', '${email}', '${password}')`;
    con.query(sql, (error, result) => {
      if(error){
        console.log("Erro ao inserir os dados:", error)
      }else{
        console.log('Dados inseridos com sucesso:', result)
      }
    })
  }

  return({insertUsers})

}

module.exports = db