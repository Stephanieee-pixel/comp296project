const mysql = require('mysql');

//Create a connection to the database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Mangopet190!',
    database: 'mydb'
});

//Connect to the database 

connection.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to MySQL!");
})

var services = function(app){
    app.post('/write-record', function(req, res){
       
        var data = {
            productName: req.body.productName,
            description: req.body.description,
            price: req.body.price,
            availability: req.body.availability,
            reviews: req.body.reviews

        };

        connection.query("INSERT INTO books SET ?", data, function(err){
            if(err){
                return res.status (201).send(JSON.stringify({msg: "Error" + err}));
            } else{
                return res.status (200).send(JSON.stringify({msg: "SUCCESS"}));

            }

        });
    });
};

module.exports = services;


//Insert record to account table
const account = {first_name: 'Stephanie', last_name: 'Gonzalez', email:'sgonzalez1280@gmail.com', password: 'Vsunny291$'};
connection.query('INSERT INTO Accounts SET ?', account, (err, result) => {
    if(err) throw err;
    console.log("Account insert successful!");
})