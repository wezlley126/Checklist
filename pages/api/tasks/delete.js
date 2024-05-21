import axios from 'axios';
import db from './../mysqldb/connect.js';

export default function handler(req, res) {

    const idReceived = req.body;

    const dropTask = async (idTask) => {
        const sql = `DELETE FROM tasks WHERE id_task = '${idTask}'`;
        db.query(sql, (err, result) => {
            if(err) {
                console.log('Erro ao deletar usuário');
                res.status(404).json('Usuário não encontrado')
            }else{
                console.log(`Usuário de id ${idTask} foi apagado com sucesso`);
                res.status(200).json('Usuário apagado com sucesso')
            }
        })
    }

    console.log('Dado recebidos do envio:', idReceived.idTask)
    dropTask(idReceived.idTask)
    
    //dropTask(idReceived.data)
}