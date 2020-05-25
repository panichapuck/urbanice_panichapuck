var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'urbanice_db'
})

module.exports = db