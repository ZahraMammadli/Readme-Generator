const inquirer = require("inquirer");
const fs = require("fs");

// Promting user to generate answers

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
  ]);
};
