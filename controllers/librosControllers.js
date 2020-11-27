'use strict'

//Carga del modelo
var Libros = require('../modelos/libros');

//Funcion para guardar

function guardarLibros (req, res) {

    console.log("Guardando libro")

    let libros = new Libros()
    libros.nombre = req.body.nombre
    libros.idioma = req.body.idioma
    libros.idioma = req.body.codigo
    libros.anio = req.body.anio
    libros.autor = req.body.idAutor

    libros.save((err, guardadoLibro)=>
    {
        res.status(200).send({libroGuardado: guardadoLibro})
    })
}

function putLibros(req, res) {
    let idlibros = req.params.id
    let update = req.body
    Libros.findByIdAndUpdate(idlibros, update, (err, librosUpdated) => {
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!librosUpdated) return res.status(404).send({message:'Error el libro no existe'})

        res.status(200).send({libros: librosUpdated})
    })
}

function deleteLibros(req, res) {

    let idlibros = req.params.id
    Libros.findById(idlibros,(err,libros)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!libros) return res.status(404).send({message:'Error el libro no existe'})

        libros.remove(err => {
            if(err) return res.status(500).send({message:'error al realizar la peticion'})
            res.status(200).send({message: 'El libro ha sido eliminado'})
        })
    })
}

module.exports = {
    guardarLibros,
    putLibros,
    deleteLibros
}