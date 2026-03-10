const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '55q2w3e4A!',
    database: 'cadastro_usuario'
});

module.exports = db;
