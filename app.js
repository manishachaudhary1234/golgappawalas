// var express = require('express');
// let mysql = require('mysql');
// var app = express();

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345678',
//   database: 'golgappawalas',
// });

// connection.connect(function (err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
//   connection.query(
//     "INSERT INTO customers  VALUES ('1234567890', 'Manoj')",
//     function (err, res) {
//       if (err) {
//         console.log('error: ', err);
//       } else {
//         console.log(res.insertId);
//       }
//     }
//   );
//   console.log('Connected to the MySQL server.');
// });

// app.get('/url', (req, res, next) => {
//   res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
// });
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
