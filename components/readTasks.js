import styles from "./readTasks.module.css";
import axios from "axios";
import { useContext } from "react";
import { useState, useEffect } from "react";
import DeleteTask from "./dropTasks.js";
import { AuthContext } from "@/context/authContext";
import CompleteTask from "./completeTask.js";
import EditModal from "./EditModal";

export default function ReadTasks({ reload, loading }) {
  const [tasks, setTasks] = useState([]);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const { token } = useContext(AuthContext);

  const getTasks = async () => {
    // Faz solicitação para descriptografar os dados do token
    const requestTasks = await axios.post("/api/tasks/read", { token });
    setTasks(requestTasks.data);
  };

  useEffect(() => {
    getTasks();
  }, [reload]);

  // Apaga a task e recarrega os dados
  const dropLoading = (e) => {
    DeleteTask(e);
    loading();
  };

  //Abre o modal de Editar a Task
  const editModalOpen = (data, e) => {
    e.preventDefault();
    setEditData(data);
    setIsOpenEdit(true);
  };

  return (
    <>
      {tasks.map((item) => {
        return (
          <div className={styles.task} key={item.id_task}>
            <div className={styles.taskContent}>
              {" "}
              <input
                value={item.id_task}
                defaultChecked={item.concluida}
                onClick={CompleteTask}
                type="checkbox"
              />
              {item.task}
            </div>
            <div className={styles.taskButtons}>
              <button
                className={styles.edit}
                onClick={(e) => editModalOpen(item, e)}
              >
                Editar
              </button>
              <button
                className={styles.remove}
                onClick={dropLoading}
                value={item.id_task}
              >
                Apagar
              </button>
            </div>
          </div>
        );
      })}
      {isOpenEdit && (
        <EditModal
          editData={editData}
          setModalOpen={() => setIsOpenEdit(false)}
          loading={loading}
        />
      )}
    </>
  );
}
