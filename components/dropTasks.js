import axios from 'axios';
import { reload } from './Home.js'

export default async function DeleteTask(e) {
    const dataSend = {
        idTask: e.target.value
    }
    const dropRequest = await axios.post('http://localhost:3000/api/tasks/delete', dataSend)
    console.log('Dado a ser enviado --------->', e.target.value)
  }