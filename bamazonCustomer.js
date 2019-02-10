
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "F@ltu123",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res[0]);
        connection.end();
    });
}

var inquirer = require('inquirer');
function question() {
    inquirer
        .prompt([{
            name: 'products',
            message: "Please enter the ID of the product that you wish to buy?",
            type: 'input'
        },

        {
            name: 'products',
            message: "how many units of the product they would like to buy?",
            type: 'input'
        }
        ])




    //.then(function (answer) {
    // // based on their answer, either call the bid or the post functions
    // if (answer.postOrBid === "POST") {
    //     postAuction();
    // }
    // else if (answer.postOrBid === "BID") {
    //     bidAuction();
    // } else {
    //     connection.end();
    // }
    //});
}
question();