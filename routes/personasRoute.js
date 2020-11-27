'use strict'

var express = require('express')

var personasController = require('../controllers/personasController')

var api = express.Router()

api.post('/personas', personasController.guardarPersonas)
api.put('/personasbyID/:id', personasController.putPersonas)
api.delete('/personasbyID/:id', personasController.deletePersonas)

module.exports = api