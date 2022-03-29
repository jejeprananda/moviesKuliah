const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: '',
    database: 'db_movie',
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;