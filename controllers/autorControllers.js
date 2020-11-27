'use strict'

var Autor = require('../modelos/autor')

function guardarAutor (req, res) {
    console.log("Guardando autor")

    let autor = new Autor()
    autor.nombre = req.body.nombre
    autor.nacionalidad = req.body.nacionalidad

    autor.save((err, guardadoAutor)=>
    {
        res.status(200).send({autorGuardado: guardadoAutor})
    })
}

/*
function put(req,res) {

    let idautor = req.params.id
    Autor.findById(idautor,(err,persona)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!persona) return res.status(404).send({message:'Error el autor no existe'})
    })
}
*/

function putAutor(req, res) {
    let idautor = req.params.id
    let update = req.body
    Autor.findByIdAndUpdate(idautor, update, (err, autorUpdated)=>
    {
        if(err) return res.stauts(500).send({message: 'Error al realizar la peticion'})
        if(!autorUpdated) return res.status(404).send({message: 'Error, el autor no existe'})

        res.status(200).send({autor: autorUpdated})
    })
}

function deleteAutor(req, res) {

    let idautor = req.params.id
    Autor.findById(idautor,(err,autor)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!autor) return res.status(404).send({message:'Error el autor no existe'})

        autor.remove(err => {
            if(err) return res.status(500).send({message:'error al realizar la peticion'})
            res.status(200).send({message: 'El autor ha sido eliminado'})
        })
    })
}

module.exports = {
    guardarAutor,
    putAutor,
    deleteAutor
}