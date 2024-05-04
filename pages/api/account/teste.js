const db = require('./../mysqldb/connect.js');


export default async function handler(req, res){
    const {insertUsers} = await db();
    insertUsers('87654325678', 'aaaaa', 'meu email', '123')
    console.log(db)
    res.status(200).json('Tudo ok');
}