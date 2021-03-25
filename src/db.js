const mysql = require("mysql2");
const pass = ""
const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: pass,
  database: "todo"
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to dabase works!");
});

module.exports = db;
