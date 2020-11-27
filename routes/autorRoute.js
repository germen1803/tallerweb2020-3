'use strict'

var express = require('express')

var autorController = require('../controllers/autorControllers')

var api = express.Router()

api.post('/autor', autorController.guardarAutor)
api.put('/autorbyID/:id', autorController.putAutor)
api.delete('/autorbyID/:id',autorController.deleteAutor)

module.exports = api