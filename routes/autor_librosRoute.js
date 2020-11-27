'use strict'

var express = require('express')

var autor_librosController = require('../controllers/autor_librosController')

var api = express.Router()

api.post('/autor_libros', autor_librosController.guardarAutorLibros)
api.get('/autor_libros', autor_librosController.buscarAutorLibros)
api.get('/autor_libros/buscar',autor_librosController.buscarAutorPrestado)

module.exports = api