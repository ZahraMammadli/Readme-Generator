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
  .then((answers) => {
    let title = answers.title;
    let description = answers.description;
    console.log(title);
    fs.writeFileSync("README.md", readmeGenerator(title, description));
  });

const readmeGenerator = ({ title, description }) => `#${title}
    ##Description
    ${description}
    `;
