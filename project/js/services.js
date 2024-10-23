const mysql = require('mysql');

//Create a connection to the database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Mangopet190!',
    database: ''
});

//Connect to the database 

connection.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to the database!");
})

var services = function(app){
    app.post('write-record')
}

