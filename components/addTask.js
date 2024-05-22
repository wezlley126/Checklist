import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import styles from "./addTask.module.css";

export default function AddTask({ loading }) {
  const inputTask = document.querySelector("#AddTaskInput");
  const { token } = useContext(AuthContext);
  const [requestData, setRequestData] = useState({
    token: { token },
  });

  // Pega o valor do input
  const inputsGet = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  // Envia os dados para o backend, limpa o input e recarrega as tasks
  const sendData = async (e, data) => {
    e.preventDefault();
    const response = await axios.post("/api/tasks/create", requestData);
    console.log("resposta do servidor ---------------->", response.data);
    inputTask.value = "";
    loading();
  };

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          onChange={inputsGet}
          id="AddTaskInput"
          type="text"
          name="task"
          placeholder="Tarefa"
        />
        <input
          onClick={sendData}
          type="submit"
          name="adicionar"
          value="Adicionar"
        />
      </div>
    </>
  );
}
