const mysql = require('mysql2/promise'); // ✅ use the promise version

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin', 
  database: 'expense_tracker',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306 // change this to 3307 if using XAMPP
});

// Test the connection on startup
pool.getConnection()
  .then(connection => {
    console.log('Database Connected!');
    connection.release(); // release back to pool
  })
  .catch(err => {
    console.error(' DB Connection Error:', err.message);
    process.exit(1); // stop the app if DB fails
  });

module.exports = pool;
