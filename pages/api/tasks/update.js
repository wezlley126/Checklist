import db from './../mysqldb/connect.js';

export default function handler(req, res) {
    const completeTask = async () => {

        // Declarações
        const idTask = req.body.idTask;
        let novoEstado = null;
        const getSql = `SELECT concluida FROM tasks WHERE id_task = ${idTask}`
        
        // Verificação do estado da task;
        db.query(getSql, (err, result) => {
            if(err){
                console.log('ERRO AO ATUALIZAR STATUS DA TASK: ', err);
                res.status(200).json('Error');
            }else{
                if(result[0]['concluida'] == 0){
                    novoEstado = 1;
                }else{
                    novoEstado = 0;
                }
                // Alteração do estado da task para 0 ou 1, dependendo do valor retornado;
                const changeSql = `UPDATE tasks SET concluida = ${novoEstado} WHERE id_task = ${idTask}`
                db.query(changeSql, (err, result) => {
                    if(err){
                        console.log('Erro ao alterar o estado da task')
                        res.status(200).json('Erro ao alterar o estado da task'     )
                    }else{
                        console.log('Estado alterado com sucesso')
                        res.status(200).json('Estado da task alterado com sucesso')
                    }
                })
            }
        })
        
    }

    if(req.method == 'POST'){
        completeTask()
    }
}