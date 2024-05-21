import axios from 'axios';

export default function CompleteTask(e) {
    const updateTask = async (evento) => {
        console.log('Dado a ser enviado -----------> ', evento.target.value)
        const sendData = {idTask: evento.target.value}
        const changeStatus = await axios.post('/api/tasks/update', sendData)
        console.log('Retorno recebido -------------> ', changeStatus.data)
    }
    updateTask(e)
}