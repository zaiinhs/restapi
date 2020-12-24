var mysql = require('mysql');

//koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('berhasil');
});

module.exports = conn;