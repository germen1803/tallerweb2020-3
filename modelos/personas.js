'use stric'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PersonasSchema = Schema (
    {
        nombre: String,
        rut: String,
        telefonos: [{descripcion: String, numero:{type: Number}}]
    }
)

module.exports = mongoose.model('personas', PersonasSchema)