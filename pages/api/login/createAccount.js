export default function CreateAccount(req, res) {
    const data = req.body;
    console.log("email:", data['email'])
    console.log("cpf:", data['cpf'])
    console.log("senha:", data['senha'])
    console.log("senhaConfirm:", data['senhaConfirm'])
}