const axios = require('axios')

export default function ValidarCpf(req, res){
    const validar = async (cpf) => {
        const validar = await axios.get(`https://api.cpfcnpj.com.br/5ae973d7a997af13f0aaf2bf60e65803/1/${cpf}`);
        let cpfs = '';
        if(validar['data']['status'] == 1){
            cpfs = "Cpf valido"
        }else{
            cpfs = "Cpf invalido"
        }
        res.status(200).json(cpfs)
    }

    validar('08904478374')
}