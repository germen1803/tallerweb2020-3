'use strict'
const {populate} = require('../modelos/autor_libros')
var Autor_Libros = require('../modelos/autor_libros')
var Prestamos = require('../modelos/prestamos')
var Autor = require('../modelos/autor')

function guardarAutorLibros (req, res) {
    console.log("Guardando Autores y Libros")
    let autor_libros = new Autor_Libros()
    autor_libros.autor = req.body.idAutor
    autor_libros.libros = req.body.idLibros

    autor_libros.save((err, guardadoAutorLibro)=>
    {
        res.status(200).send({AutorLibroGuardado: guardadoAutorLibro})
    })
}

function buscarAutorLibros (req, res) {

    let idAutor = req.query.idAutor

    Autor_Libros.find({autor: idAutor})
    .populate('autor','nombre')
    .populate('libros','nombre idioma anio')
    .exec((err, resultado)=>
    {
        res.status(200).send({resultado})
    })
}


//Nombre de los autores de libros que fueron prestados a una persona específica
async function buscarAutorPrestado (req, res){

    var autores = []

    try{
        let libros = await Prestamos.find({personas: '5fbf29784024f469292a57e1'}).populate('libros') //En prestamos buscará una persona en específico y los libros que se prestó a esa persona

        for(let doc of libros){
            let data = await Autor.findOne({"_id": doc.libros.autor})
            autores.push(data.nombre)
        }
        res.send({Autores: autores})
    }catch (err) {
        res.send(err)
    }

}


module.exports = {
    guardarAutorLibros,
    buscarAutorLibros,
    buscarAutorPrestado
}