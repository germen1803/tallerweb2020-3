'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Autor_LibroSchema = Schema (
    {
        autor: {type: Schema.ObjectId, ref: 'autor'},
        libros: {type: Schema.ObjectId, ref: 'libros'}
    }
)

module.exports = mongoose.model('autor_libros', Autor_LibroSchema)