import Link from "next/link";
import style from "./CreateAccount.module.css";

export const CreateAccount = (props) => {
  const { formData, enviar, cpfValida } = props;
  return (
    <div className={style.formsDivPai}>
      <img className={style.logo} src={"/logo.png"} />
      <form method="post">
      <input
          onChange={formData}
          name="nome"
          type="text"
          placeholder="Nome"
        />
        <input
          onChange={formData}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input onChange={formData} name="cpf" type="text" placeholder="CPF" maxLength={11} />
        <input
          onChange={formData}
          name="senha"
          type="password"
          placeholder="Senha"
        />
        <input
          onChange={formData}
          name="senhaConfirm"
          type="password"
          placeholder="Repetir senha"
        />
        <input className = {style.inputSubmit} onClick={enviar} type="submit" value={cpfValida} />
        <Link href="/login/login">Já possuo uma conta</Link>
      </form>
    </div>
  );
};
