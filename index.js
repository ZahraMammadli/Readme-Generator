const inquirer = require("inquirer");
const fs = require("fs");

// Promting user to generate answers

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your project title",
      name: "title",
    },
    {
      type: "input",
      message: "Enter description of your project",
      name: "description",
    },
  ])
  .then((answers) => fs.writeFileSync("README.md", readmeGenerator(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));

const readmeGenerator = ({ title, description }) => `
    #${title}
    ##Description
    ${description}
    `;
