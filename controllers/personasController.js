'use strict'
var Personas = require('../modelos/personas')

function guardarPersonas (req, res) {
    console.log("Guardando Personas")
    let personas = new Personas()
    personas.nombre = req.body.nombre
    personas.rut = req.body.rut
    personas.telefonos = req.body.telefonos

    personas.save((err, guardadoPersona)=>
    {
        res.status(200).send({PersonasGuardado: guardadoPersona})
    })
}

function putPersonas(req, res) {
    let idpersonas = req.params.id
    let update = req.body
    Personas.findByIdAndUpdate(idpersonas, update, (err, personasUpdated) => {
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!personasUpdated) return res.status(404).send({message:'Error la persona no existe'})

        res.status(200).send({personas: personasUpdated})
    })
}

function deletePersonas(req, res) {

    let idpersonas = req.params.id
    Personas.findById(idpersonas,(err,personas)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!personas) return res.status(404).send({message:'Error la persona no existe'})

        personas.remove(err => {
            if(err) return res.status(500).send({message:'error al realizar la peticion'})
            res.status(200).send({message: 'La persona ha sido eliminada'})
        })
    })
}

module.exports = {
    guardarPersonas,
    putPersonas,
    deletePersonas
}