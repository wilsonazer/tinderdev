const express  = require('express')
const router  = require('../routes')
const mongoose = require('mongoose')
const cors =  require('cors')

const app  = express()
//connectando com mongodb usando atlas server
mongoose.connect('mongodb+srv://wilson:51241314@cluster0-noxyc.mongodb.net/tinderdev?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})

app.use( cors() )
app.use( express.json() )
app.use( router )


app.listen(3333, ()=>{ 
    console.log('running on port 3333')
})