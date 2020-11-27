'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PrestamosSchema = Schema (
    {
        personas:{type: Schema.ObjectId, ref: 'personas'},
        libros:{type: Schema.ObjectId, ref: 'libros'},
        fecha: String
    }
)

module.exports = mongoose.model('prestamos', PrestamosSchema)