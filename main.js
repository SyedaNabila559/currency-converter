#! /usr/ bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue(`\nwelcome to code with Nabila currency converter\n`));
// Define the list of currencies and their exchange rate
let exchangeRate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, //European Currency (Euro)
    "JYP": 113, // Japenese Currency (yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70, //Pakistan Rupees
};
// Prompt the user to select currencies to convert from and to 
let userAns = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "select the currency to convert from :",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    }
]);
//  Perfoam currency conversion by using formula
let fromAmount = exchangeRate[userAns.fromCurrency];
let toAmount = exchangeRate[userAns.toCurrency];
let amount = userAns.amount;
// Formula of coversion
let baseAmount = amount / fromAmount;
let converetedAmount = baseAmount * toAmount;
// Display the converted amount
console.log(`covertedAmount = ${chalk.greenBright(converetedAmount.toFixed(2))})`);
