const express = require('express');
const cors = require('cors');
require('dotenv').config() //lee variables de entorno del archivo .env como contraseñas o puerto, password de base de datos
const DB = require('../database/conexion-db.js');

class Servidor {
    constructor(){
        this.app = express()
        this.port = process.env.EXPRESS_PORT // process porq es una variable de entorno y EXP.. porq en este caso se llama asi
        this.routeAPI = '/api'
        this.middlewares()
        this.routes()
        this.conection()
    }
    middlewares(){
        //middlewares globales
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public')) // crea una ruta en la carpeta public para server web (html/css/javascript)
    }
    routes(){
        this.app.use(this.routeAPI,require('../routes/api.routes.js'));
    }
    conection(){
        DB.connect(error => {
            if (error) {
                console.log(error);
            } else {
                console.log('conexion exitosa con la base de datos');
            }
        })
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`servidor web en: http://localhost:${this.port}`)
            console.log(`api en: http://localhost:${this.port}${this.routeAPI}`)
        }) 
    }
}

module.exports = Servidor;
