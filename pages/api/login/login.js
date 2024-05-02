export default function Login(req, res){
    const data = req.body;
    console.log("Email recebido:", data['email'])
    console.log("Senha recebida:", data['senha'])
}