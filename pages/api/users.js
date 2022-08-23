// var mysql = require('mysql');
import { createConnection } from 'mysql';
var conn = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'next_api'
})
conn.connect(function(err){
    if(err){
    console.log('error:-',err)
    }else{
        console.log('DB Connected')
    }
})
export default async function handler(req,res){
    let result = await getUserData()
    res.status(200).json({data: result,meggege:'success'})
}
async function getUserData(){
    return new Promise((resolve,reject)=> {
        let sql = 'select * from emp_data';
        conn.query(sql,function(error,results,field){
            if(error){reject(error)}
            resolve(results)
        })
    }) 
}
