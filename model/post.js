const express=require('express')
const connection=require('../connection')
const path=require('path')
const bodyParser = require('body-parser')
//const { parse } = require('path')
const registerPost=express.Router()

registerPost.post('/model/post',(req,res)=>{
    //res.send(JSON.stringify(req.body))
    const name=(req.body.name);
    const pass=(req.body.pass);
    const email=(req.body.email);
    const phone=(req.body.phone);
    const adress=(req.body.adress);
    connection.query("INSERT INTO users VALUES (NULL,2,?,?,?,?,?)",[name,pass,email,phone,adress],(err,result,fields)=>{
        if (err) throw err;
        console.log("veri tabanına yazma işlemi başarılı")
        //res.send("başarı ile kaydedildi")
    })
    req.session.registerFlash={
        message:'Kayıt İşlemi Başarılı. Giriş Yapabilirsiniz'
    }
    res.redirect('/login')
})

registerPost.post('/model/register',(req,res)=>{
    //res.send(JSON.stringify(req.body))
    const pass=(req.body.pass);
    const email=(req.body.email);
    //let squery="Select * from users where email='"+veri[i].email+"' and pass='"+veri[i].pass+"'"
    connection.query("Select * from users where email='"+email+"' and pass='"+pass+"'",(err, results, fields)=>{
        if (err) throw err.message;
        const veri=JSON.parse(JSON.stringify(results))
        //console.log(veri[0])
       if(veri[0]){
        const userId=veri[0].user_id;
           req.session.idUser=userId
           res.redirect('/panel?id='+userId)
        }else{
            req.session.sessionFlash={
                message:"Kullanıcı adı veya parola hatalı!"
            }
            res.redirect('/login')
        }
        // const veri=JSON.parse(JSON.stringify(results))
        // for(var i=0;i<veri.length;i++){
        //     if((email==veri[i].email)&&(pass==veri[i].pass)){
        //         res.redirect('/panel')
        //         console.log("girş yaptın") 
        //     }
        // }
        //console.log("kullanıcı bilgileri yanlı")
        //res.redirect('/login')
    }) 
    
})

    module.exports=registerPost;