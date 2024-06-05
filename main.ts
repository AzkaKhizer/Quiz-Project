#! /usr/bin/env node

import inquirer from "inquirer"

const quiz: {
    Question1:string;
    Question2:string;
    Question3:string;
    Question4:string;
    Question5:string;
} = await inquirer.prompt(
    [
        {
            name:"Question1",
            type:"list",
            message:"What is the correct way to check if two values are not equal in typescript?",
            choices:["a==b","a===b","a=b","a!==b"]
        },
        {
            name:"Question2",
            type:"list",
            message:"Which of the following characters is commonly allowed in variable names in typescript?",
            choices:["$","@","#","&"]
        },
        {
            name:"Question3",
            type:"list",
            message:"Which operator is commonly used for string concatenation in typescript?",
            choices:["+","-","*","/"]
        },
        {
            name:"Question4",
            type:"list",
            message:"In typescript, which symbol is commonly used to terminate a statement?",
            choices:[".",":",";",","]
        },
        {
            name:"Question5",
            type:"list",
            message:"Which method of inquirer.js is used to start the prompt interface and receive user input",
            choices:["start()","prompt()","init()","run()"]
        }
    ]
)
let score:number = 0;
switch(quiz.Question1){
    case "a!==b":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");

}
switch(quiz.Question2){
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
}
switch (quiz.Question3){
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");
}
switch(quiz.Question4){
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");
}
switch(quiz.Question5){
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect!")
}
console.log(`Score: ${score}`);