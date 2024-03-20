const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000

// connect to database

mongoose.connect('mongodb://127.0.0.1:27017/shorturl')

const db = mongoose.connection;
db.on('error', ()=> {
    console.log('Not connected');
})
db.once('open',()=> {
    console.log("Connected");
})


app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true }))

// Define Routes

const urlRouter = require('./routes/Url.route')
app.use('/', urlRouter)

app.listen(PORT, ()=>{
    console.log("server is running");
})
