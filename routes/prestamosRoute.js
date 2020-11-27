'use strict'

var express = require('express')

var prestamosController = require('../controllers/prestamosController')

var api = express.Router()

api.post('/prestamos', prestamosController.guardarPrestamos)
api.get('/prestamos/buscar', prestamosController.buscarPrestamoPersona)


module.exports = api