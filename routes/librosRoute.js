'use strict'

//Carga de modulo de express para crear rutas
var express = require('express')

//Carga de controlador
var librosController = require('../controllers/librosControllers')

//Llamada al router
var api = express.Router()

//API's
api.post('/libros', librosController.guardarLibros)
api.put('/librosbyID/:id', librosController.putLibros)
api.delete('/librosbyID/:id', librosController.deleteLibros)

module.exports = api