/* 
req,res------
*/
const DB = require('../database/conexion-db.js');

const getArticulos = (req, res) => {
    //res.send('esto es un GET');
    const SQLsentense = 'SELECT * FROM articulos'
    DB.query(SQLsentense, (error, row) => {
        if (error) {
            console.log(error);
        } else {
            res.json({
                row
            })
        }
    })
}
const postArticulos = (req, res) => {
    const { nombre, precio } = req.body;
    const SQLsentense = 'INSERT INTO articulos SET ?' // ese ? significa que despues va a venir algo --- ? = seria el objeto{nombre,precio}
    //const object = {nombre, precio}
    DB.query(SQLsentense, [{ nombre, precio }], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json({
                result
            })
        }
    })
};
const putArticulos = (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    const SQLsentense = 'UPDATE articulos SET nombre = ?, precio = ?  WHERE id = ? '
    // [se colocaran los datos de acuerdo se lo requiera ]
    DB.query(SQLsentense, [nombre, precio, id], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json({
                mensaje: 'se modifico el articulo',
                result
            });
        }
    })
}

const deleteArticulos = (req, res) => {
    const { id } = req.params;
    const SQLsentense = 'DELETE FROM articulos WHERE  id = ?'
    DB.query(SQLsentense, [id], (error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.json({
                mensaje: 'se elimino el articulo',
                result
            });
        }
    })
}

module.exports = {
    getArticulos,
    postArticulos,
    putArticulos,
    deleteArticulos
};
