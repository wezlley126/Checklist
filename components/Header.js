import { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/authContext";

export const Header = ({ email, name }) => {
  const router = useRouter();
  const { setToken } = useContext(AuthContext);

  function signOut(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    setToken("");
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={"/logo.png"} />
        <p className={styles.welcome}>Olá, {name}</p>
        <button onClick={signOut} className={styles.signOut}>
          Sair
        </button>
      </div>
    </header>
  );
};
