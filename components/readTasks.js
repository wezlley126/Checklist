import axios from 'axios';
import { useContext } from "react";
import { useState, useEffect } from 'react'
import DeleteTask from './dropTasks.js'
import { AuthContext } from "@/context/authContext";
import CompleteTask from './completeTask.js';

export default function ReadTasks({reload, loading}) {

    const [tasks, setTasks] = useState([]);
    const { token } = useContext(AuthContext);

    const getTasks = async () => {

        // Faz solicitação para descriptografar os dados do token
        const requestTasks = await axios.post('/api/tasks/read', { token })
        setTasks(requestTasks.data)
        
    }

    useEffect(() => {
        getTasks()
    }, [reload])

    // Apaga a task e recarrega os dados
    const dropLoading = (e) => {
        DeleteTask(e);
        loading();
    }

    return(
        <>
            {
                tasks.map((item) => {
                    return(
                        <>
                        <tr>
                            <td><button value = {item.id_task}>Editar</button></td>
                            <td>{item.concluida} <input value = {item.id_task} onClick = {CompleteTask} type = 'checkbox' /></td>
                            <td>{item.task}</td>
                            <td><button onClick = {dropLoading} value = {item.id_task}>Apagar</button></td>
                        </tr>
                        </>
                    )
                })
            }
        </>
    )
}