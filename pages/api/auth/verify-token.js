var jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  const token = req.body.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(200).json({ status: false, error: err });
        console.log("err: ", err);
      } else {
        res
          .status(200)
          .json({ status: true, email: decoded.email, name: decoded.name });
        console.log("DECODE: ", decoded);
      }
    });
  } else {
    res.status(200).json({ status: false, error: "Usuário não está logado" });
  }
}
