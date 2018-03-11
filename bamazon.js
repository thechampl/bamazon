const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bamazon'
});
const query = connection.query;

const questions = [
    {
        type: "input",
        message: "Select an ID to buy: ",
        name: "itemID"
    },
    {
        type:"input",
        message: "How much would you like to buy?",
        name: "itemAmount"
    }
]


connection.connect(function(err){
    if (err){throw err};
console.log("Connected as ID .." + connection.threadId)
showProducts();
});


function showProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (i=0; i < res.length; i++)
      console.log(`Item ID: ${res[i].item_id}, Product: ${res[i].product_name}, Department: ${res[i].department_name}, Price: $${res[i].price}, Stock ${res[i].stock_quanity}`);
      connection.end();
      promptUser()
    });
  }

function promptUser(){

    inquirer.prompt(questions[0]).then(function(inquirerResponse){
var userChoice = inquirerResponse.itemID;
    inquirer.prompt(questions[1]).then(function(inquirerResponse){
var userAmount = inquirerResponse.itemAmount
whereClause = `UPDATE products SET stock_quanity =- '${userAmount}' WHERE item_id = '${userChoice}'`

updateQuery(whereClause)
console.log("Your Purchase was successful!")
showProducts();

});



    });
}