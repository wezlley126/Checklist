import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import styles from "./Home.module.css";
import AddTask from './addTask';

export const Home = () => {
  //const { token } = useContext(AuthContext);
  //<div>Home {token}</div>;
  return(
    <>

    <AddTask />
    </>
  )
};
