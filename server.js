const express = require('express')
const app = express()
const path = require('path')
// const api = require('./server/routes/api')
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true }) //Make a DB
// const bodyParser = require('body-parser')


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
// app.use( '/', api )


const port = process.env.PORT || 3300
app.listen(port, function(){
console.log(`Running server on port ` + port)})