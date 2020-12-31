// Set up MySQL connection.
const mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
  host: "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "h3pzf92zah7jxv5r",
  password: "wp9i26uo7duvnbj2",
  database: "euch4zsve8bpubrv"
  });
};

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// })

connection.connect();
module.exports = connection;
