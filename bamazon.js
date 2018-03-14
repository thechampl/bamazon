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
    },
    {
        type:"confirm",
        message: "Would you like to buy another product?",
        name: "buyAnother"
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

      promptUser()
   
    });
  }

  function updateQuery(whereClause){
      connection.query(whereClause, function(error,results,fields){
          if (error) throw (error);
          if (results.affectedRows > 0){
              console.log("Updated")
          }
      })
    }

function promptUser(){

    inquirer.prompt(questions[0]).then(function(inquirerResponse){
var userChoice = (inquirerResponse.itemID -1);

    inquirer.prompt(questions[1]).then(function(inquirerResponse){
var userAmount = inquirerResponse.itemAmount
whereClause = `UPDATE products SET stock_quanity = stock_quanity - '${userAmount}' WHERE item_id = '${userChoice}'`
connection.query("SELECT * FROM products", function(err, res) {
    if(err) throw(err);
var totalPurchase = userAmount * `${res[userChoice].price}`
updateQuery(whereClause)
console.log("Your Purchase was successful!")
console.log("You spent $" + totalPurchase)})
// inquirer.prompt(questions[2]).then(function(inquirerResponse){
// if(inquirerResponse === "Yes"){
// showProducts();
// }

// else if (inquirerResponse === "No"){
//     console.log("See you next time!")
//     connection.end();
// }
// });


});



    });
}