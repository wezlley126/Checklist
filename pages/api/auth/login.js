const axios = require("axios");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const db = require("../mysqldb/connect.js");

export default async function handler(req, res) {
  const { email, senha } = req.body;
  const response = await axios.post(
    `${process.env.APP_URL}/api/auth/get-user-by-email`,
    { email }
  );

  const userData = response.data[0];

  bcrypt.compare(senha, userData.senha, function (err, result) {
    if (result) {
      jwt.sign(
        { email: userData.email, name: userData.name },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 480 },
        function (err, token) {
          res.status(200).json({ token, userData });
        }
      );
    } else {
      res.status(400).json("senha incorreta");
    }
  });
}
