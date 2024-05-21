import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import axios from 'axios';
import styles from "./Home.module.css";
import AddTask from './addTask';
import ReadTasks from "./readTasks";
import { useState, useEffect } from 'react'

export const Home = () => {
  //const { token } = useContext(AuthContext);
  const [reload, setReload] = useState(0);
  
  const loading = () => {
    setReload(reload + 1);
  }

  return(
    <>
  <div className = {styles.divPai}>
    <AddTask loading = {loading} />
    <table className = {styles.crudTable}>
      <thead>
        <tr>
          <td>Editar</td>
          <td>Status</td>
          <td>Task</td>
          <td>Deletar</td>
        </tr>
      </thead>
      <tbody>
        <ReadTasks reload = {reload} loading = {loading} />
      </tbody>
    </table>
  </div>
    </>
  )
};
