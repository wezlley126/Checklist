const db = require("../mysqldb/connect.js");

export default async function handler(req, res) {
  const { email } = req.body;
  const sql = `SELECT * FROM users WHERE email = "${email}"`;
  //const sql = `SELECT * FROM users WHERE email = "johanvaf@gmail.com"`;

  db.query(sql, (error, result) => {
    if (error) {
      res.status(402).json({ error });
    } else {
      res.status(200).json(result);
    }
  });
}
