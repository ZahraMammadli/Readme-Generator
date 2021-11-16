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
    console.log(title);
    let readmefile = readmeGenerator(answers);
    fs.writeFileSync("README.md",readmefile)
    
  });

const readmeGenerator = ({ title, description }) => {
  `#${title}

    ##${description}
    `;
};
