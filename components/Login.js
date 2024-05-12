import Link from "next/link";
import style from "./Login.module.css";
import Image from "next/image";

export const Login = (props) => {
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
        <input
          onChange={formData}
          name="senha"
          type="password"
          placeholder="Senha"
        />
        <input onClick={enviar} type="submit" value="Entrar" />
        <Link href="/auth/signin">Criar conta</Link>
      </form>
    </div>
  );
};
