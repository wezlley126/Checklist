import { useContext } from "react";
import styles from "./Home.module.css";
import { AuthContext } from "@/context/authContext";

export const Home = () => {
  const { token } = useContext(AuthContext);
  return <div>Home {token}</div>;
};
