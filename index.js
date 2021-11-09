/**
 * Checkbox list examples
 */

"use strict";
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter a title",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a github Username",
      name: "github",
    },
  ])
  .then(function (answers) {
    let readmeContent = `![Username] ${answers.github}`;
    console.log(readmeContent);
  });

// .then((answers) => {
//   console.log(JSON.stringify(answers, null, "  "));
// });
