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
      name: "license",
      choices: ["MIT", "GPLv3", "GPL", "Apache", "NoLicense"],
    },
    {
      type: "input",
      message: "Enter your Github Username",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email",
    },
  ])
  .then((answers) => fs.writeFileSync("README.md", readmeGenerator(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));

//  Function to create template readme file using inputs
const readmeGenerator = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  github,
  email,
}) => `
    #${title}
    ${licensebadge(license)}

    ##Description
    ${description}

    ##Table of Content
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contribution](#Contribution)
    - [Testing](#Testing)
    - [License](#License)
    - [Questions](#Questions)

    ##Installation guidelines
    ${installation}

    ##Usage
    ${usage}

    ##Contribution 
    ${contribution}

    ##Testing
    ${test}

    ##License
    ${icense}

    ##Questions
    If you have any questions feel to reach checkout my github profile 
    ${github}
    or reach me out via the email:
    ${email}
    `;

// Function to create badges

const licensebadge = (license) => {
  let badge = "";
  if (license === "MIT") {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GPLv3") {
    badge = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "GPL") {
    badge = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else if (license === "Apache") {
    badge = `![Apache license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else {
    license = "N/A";
  }
  return badge;
};
