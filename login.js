const express=require("express");
const connection=require("./connection");
const Router=express.Router()

let sqlquery="Select * from users"

Router.get("/",(req,res)=>{
    // connection.connect((err)=>{
    //     if (err) throw err;
        connection.query(sqlquery,(err, results, fields)=>{
            if (err) throw err.message;
            res.send(results);
        })
    //})
    //res.send("Login page Wellcome")
    //console.log("burası login sayfası")
})

module.exports=Router;
