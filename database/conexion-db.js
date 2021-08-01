const mysql = require('mysql');
const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_prueba'
}); // deberia estar en el archivo de .env(se suele escribir en mayuscula porq son constantes generales como id)
//process.env.PASSWORD -- process seria lo global
// PASSWORD = RÑVRNRGN3RNN (.env)

module.exports= DB;