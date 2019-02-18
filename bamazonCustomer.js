//create required variables so the code works
require("dotenv").config();
var mysql = require('mysql');
var PASSWORD = process.env.PASSWORD;
//console.log(PASSWORD);
var inquirer = require('inquirer');
//global variables for user input quantity, user's total cost.
// create variable for updating stock_quantity
var userChoiceID = 0;
var quantity = 0;
var totalQuantity = 0;
var userPrice = 0;

//MySQL config to get connected
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: PASSWORD,
    database: "bamazonDB"
});
//connect to the database function 
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    questions();

});
//Ask the user which item they want 
//Show the item_id, product_name, and price.
//get user response and check in the stock for availability
//show user their selection quantity.
//show user the total cost
function questions() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log('Welcome to Bamazon!');

        inquirer

            .prompt([

                {
                    name: 'item_id',
                    type: 'input',
                    message: "Please enter the ID of the product that you wish to buy?"

                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: "How many units of the product they would like to buy?"

                }
                //function to response after the input has been logged
                //User choses an item_id, quantity(make it integer) and then User can see their total quantity, total price.  
            ]).then(function (answer) {
                userChoiceID = parseInt(answer.item_id);
                quantity = parseInt(answer.quantity);
                userPrice = res[userChoiceID - 1].price;
                totalQuantity = res[userChoiceID - 1].stock_quantity - quantity;
                //console.log(totalQuantity);
                getQuantityProduct(userChoiceID);

            });
    })
}

//When user choses the item, check if the item is in stock and also check if we have the quantity that user choose.
//If the stock Quantity less then what user desires for then show them a message.
//if stock available then add the total quantity and price for the user
//subtract the quantity from database and update new stock quantity.
function getQuantityProduct(userChoiceID) {
    connection.query("SELECT stock_quantity FROM products WHERE ?",
        {
            item_id: userChoiceID
        },

        function (err, res) {
            if (err) throw err;
            if (quantity > res[0].stock_quantity) {
                console.log("Sorry we are out of stock.");
            } else if (quantity <= res[0].stock_quantity) {
                updateTable(totalQuantity, userChoiceID);
            }
        })
}

// Update the table and which iteams to update.
function updateTable(totalQuantity, userChoiceID) {
    connection.query("UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: totalQuantity
            },
            {
                item_id: userChoiceID
            }
        ],
        function (err, res) {
            if (err) throw err;
            var totalCost = quantity * userPrice;
            console.log("Your total is: " + '$' + totalCost);

        })
}



