import { sum } from "./add.js";
import inquirer from "inquirer";
import { sub } from "./sub.js"
import { div } from "./div.js";
import { multi } from "./multi.js";

let num1 = await inquirer.prompt({
    message: "enter your first number",
    type: "number",
    name: "firstnum"

})
let num2 = await inquirer.prompt({
    message: "enter your second number",
    type: "number",
    name: "secondnum"

})
let operators = await inquirer.prompt({
    type: "list",
    name: "operator",
   message: "select the operator you want perform",
    choices:["addition","subtriction","division","multiplication"],


})

if ( operators.operator === "addition"){
    console.log(num1.firstnum + num2.secondnum)
}
else if ( operators.operator === "subtriction"){
    console.log(num1.firstnum - num2.secondnum)
}
else if ( operators.operator === "division"){
    console.log(num1.firstnum / num2.secondnum)
}
else if ( operators.operator === "multiplication"){
    console.log(num1.firstnum * num2.secondnum)
}
else { 
    console.log("something wents wrong")
}
