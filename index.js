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
    {
      type: "input",
      message: "Enter Installation Guidance",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage information",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter contribution guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: "Enter test instructions",
      name: "test",
    },
    {
      type: "list",
      message: "Please choose licence from the list",
      name: "test",
      choices: ["MIT", "Apache", "GNU", "Mozilla Public", "Eclipse"],
    },
  ])
  .then((answers) => fs.writeFileSync("README.md", readmeGenerator(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));

const readmeGenerator = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
}) => `
    #${title}

    ##Description
    ${description}

    ##Installation guidelines
    ${installation}

    ##Usage Information
    ${usage}

    ##Contribution guidelines 
    ${contribution}

    ##Test Instructions
    ${test}

    ##License
    ${license}
    `;
