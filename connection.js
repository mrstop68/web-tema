const mysql=require("mysql")
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'webpanel'
// })
const connection=mysql.createConnection({
    host:'eu-cdbr-west-01.cleardb.com',
    user:'b700d9620d432e',
    password:'242e7901',
    database:'heroku_692921114c854d5'
})

connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected")
    }
    else{
        
        console.log(err.message)
    }
})
//connection.end()

module.exports=connection;