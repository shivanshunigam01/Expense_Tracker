const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'expense_tracker',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 3306
});


pool.getConnection()
    .then(connection => {
        console.log('Database Connected!');
        connection.release();
    })
    .catch(err => {
        console.error(' DB Connection Error:', err.message);
        process.exit(1);
    });


pool.on('enqueue', function (sequence) {
    if (sequence.sql) {
        console.log('[MySQL Procedure Called] =>', sequence.sql);
    }
});


module.exports = pool;
