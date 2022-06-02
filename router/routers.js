const express=require('express')
const session = require('express-session')
//const connection=require('../connection')
const path=require('path')

//const bodyParser = require('body-parser')
const registerPost=require('../model/post')
const Router=express.Router()

Router.get("/register",(req,res)=>{
    //res.sendFile(path.join(__dirname,'../views/admin/register.html'))
    res.render('admin/register',  {layout:'admin'})
})

Router.get("/login",(req,res)=>{
    ///res.sendFile(path.join(__dirname,'../views/admin/login.html'))
    res.render('admin/login',{layout:'admin'})
})

Router.get('/deneme',(req,res)=>{
    res.render('admin/login')
})

Router.get("/",(req,res)=>{
    res.render('index')
    //res.send("front home")
    console.log("anasayfa")
})

Router.post('/model/post',registerPost)
Router.post('/model/register',registerPost)

Router.get('/panel',(req,res)=>{
    if ((req.session.idUser)&(req.query.id==req.session.idUser)){
        res.render('admin/panel',{layout:''})
    }
    else{
        res.redirect('/login')
    }

})

module.exports=Router;