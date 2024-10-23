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


//Insert record to account table
const account = {first_name: 'Stephanie', last_name: 'Gonzalez', email:'sgonzalez1280@gmail.com', password: 'Vsunny291$'};
connection.query('INSERT INTO Accounts SET ?', account, (err, result) => {
    if(err) throw err;
    console.log("Account insert successful!");
})