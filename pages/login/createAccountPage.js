import { useState, useEffect } from 'react';
import style from './../../styles/form.module.css'
import axios from 'axios';

export default function LoginPage(){

    const [loginData, setLoginData] = useState({});

    const formData = async (event) => {
        const name = event.target.name;
        const value = event.target.value
        setLoginData({...loginData, [name]: value})
        console.log(loginData)
    }

    
    const enviar = async () => {
        const enviado = await axios.post('http://localhost:3000/api/login/createAccount', loginData)
        console.log('Dados enviados:', enviado)
    }

    return(
        <>
        <div className = {style.formsDivPai}>
            <form method = "post">
                <input onChange = {formData} name = "email" type = "email" placeholder = "Email" />
                <input onChange = {formData} name = "cpf" type = "text" placeholder = "CPF" />
                <input onChange = {formData} name = "senha" type = "password" placeholder = "Senha" />
                <input onChange = {formData} name = "senhaConfirm" type = "password" placeholder = "Repetir senha" />
                <input onClick = {enviar} type = "submit" value = "Criar" />
                <a href = "loginPage">Já possuo uma conta</a>
            </form>
        </div>
        </>
    )
}