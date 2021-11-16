const inquirer = require("inquirer");
const fs = require("fs");

// Promting user to generate answers

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title??",
      name: "title",
    },
  ])
  .then((answers) => {
    let title = answers.title;
    console.log(title);
  });
