'use strict'
const { populate } = require('../modelos/prestamos')
var Prestamos = require('../modelos/prestamos')
var Persona = require('../modelos/personas')

function guardarPrestamos (req, res) {
    let prestamos = new Prestamos()
    prestamos.personas = req.body.idPersona
    prestamos.libro = req.body.idLibro
    prestamos.fecha = req.body.fecha

    prestamos.save((err, guardadoPrestamo)=>
    {
        res.status(200).send({PrestamosGuardado: guardadoPrestamo})
    })
}

function buscarPrestamoPersona (req, res) {

    let rut_ingresado = req.query.rut

    var idPersona

    Persona.find({rut: rut_ingresado},(err, personas)=>{

        if(err) return res.status(500).send({message: 'Error al realizar la petición'})
        if(!personas) return res.status(404).send({message: 'Error! La persona no existe'})


        idPersona = personas[0]._id

        Prestamos.find({personas: idPersona})
        .populate('libros','nombre codigo')
        .exec((err, resultado)=>
        {
            res.status(200).send(resultado)
        })

    })
}

module.exports = {
    guardarPrestamos,
    buscarPrestamoPersona,
}