const express = require("express")
const bodyParser = require('body-parser')
    //const connection=require("./connection")
    //const Login=require("./login")
const Router = require("./router/routers")
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')

const app = express()
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //res den dönen değeri body içinde alabilmek için yazılmalı
    // parse application/json
app.use(bodyParser.json())
    //app.set('view engine','ejs')


//app.set('views',path.join(__dirname,'views'))
app.use('/assets', express.static(path.join(__dirname, 'assets'))) //static olarak sayfaları dışarıya açmak için

// app.get("/login",(req,res)=>{
//     res.sendFile(path.join(__dirname,'views/admin/login.html'))
// })
//app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'Özel-Anahtar',
    resave: false,
    saveUninitialized: true,
    //cookie: { maxAge: 60000 }

}))
app.use((req, res, next) => {
    res.locals.sessionFlash = req.session.sessionFlash
    delete req.session.sessionFlash
    res.locals.registerFlash = req.session.registerFlash
    delete req.session.registerFlash
    next()
})
app.use("/", Router)

app.listen(process.env.PORT || 1453, () => {
    console.log('Example app listening on post 1453!')
});
//update denemeeee