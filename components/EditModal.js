import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import styles from "./EditModal.module.css";

const EditModal = ({ setModalOpen, editData, loading }) => {
  const inputTask = document.querySelector("#AddTaskInput");
  const { token } = useContext(AuthContext);
  const [requestData, setRequestData] = useState({
    token: { token },
    id: editData.id_task,
    task: editData.task,
  });

  // Pega o valor do input
  const inputsGet = (e) => {
    setRequestData({
      ...requestData,
      id: editData.id_task,
      [e.target.name]: e.target.value,
    });
  };

  // Envia os dados para o backend, limpa o input e recarrega as tasks
  const sendData = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/tasks/update_name", requestData);
    console.log("resposta do servidor ---------------->", response.data);
    inputTask.value = "";
    setModalOpen(false);
    loading();
  };
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div
          className={styles.closeButton}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          x
        </div>
        <div>
          <div className={styles.container}>
            <input
              className={styles.input}
              onChange={inputsGet}
              id="AddTaskInput"
              type="text"
              name="task"
              value={requestData.task}
              placeholder="Tarefa"
            />
            <input
              onClick={sendData}
              type="submit"
              name="Alterar"
              value="Alterar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
