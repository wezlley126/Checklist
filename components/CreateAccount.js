import Link from "next/link";
import style from "./CreateAccount.module.css";

export const CreateAccount = (props) => {
  const { formData, enviar } = props;
  return (
    <div className={style.formsDivPai}>
      <img className={style.logo} src={"/logo.png"} />
      <form method="post">
        <input
          onChange={formData}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input onChange={formData} name="cpf" type="text" placeholder="CPF" />
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
        <input onClick={enviar} type="submit" value="Criar" />
        <Link href="/login">Já possuo uma conta</Link>
      </form>
    </div>
  );
};
