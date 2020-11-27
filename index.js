'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var libros_routes = require('./routes/librosRoute')
var autor_routes = require('./routes/autorRoute')
var autor_libros_routes = require('./routes/autor_librosRoute')
var personas_routes = require('./routes/personasRoute')
var prestamos_routes = require('./routes/prestamosRoute')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', libros_routes)
app.use('/api', autor_routes)
app.use('/api', autor_libros_routes)
app.use('/api', personas_routes)
app.use('/api', prestamos_routes)

mongoose.connect('mongodb+srv://germanial:german92@cluster0.iqpg3.mongodb.net/TallerWeb2020-3?retryWrites=true&w=majority',(err,res)=>{
    if(err){
        console.log("NO CONECTA")
    }
    app.listen(4000,()=>{
        console.log("Esta corriendo en puerto 4000")
    })
})