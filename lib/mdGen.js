const { writeFile } = require('fs');

module.exports = data => {
    let output = `
# ${data.title}
${data.license=='None' ? '' : `![${data.license}](https://img.shields.io/badge/Lincense-${data.license}-blue)`}

## Description
${data.description }

${data.imgPath ? `![app_image](${data.imgPath})` : ''}

## Table of Contents
${data.installation ? '- [Installation](#installation)' : ''}
${data.usage ? '- [Usage](#usage)' : ''}
${data.contributors ? '- [Credits](#credits)' : ''}
${data.license ? '- [License](#license)' : ''}
${data.features ? '- [Features](#features)' : ''}
${data.tests ? '- [Tests](#tests)' : ''}
${data.email ? '- [Contact](#contact)' : ''}

${data.installation ? `## Installation
${data.installation}` : ''}

${data.usage ? `## Usage
${data.usage}` : ''}

${data.contributors ? `## Credits
${data.contributors}` : ''}

${data.license=='None' ? '' : `## License
${data.license}`}

${data.features ? `## Features
${data.features}` : ''}

${data.tests ? `## Tests
${data.tests}` : ''}

${data.email ? `## Contact
If there are any questions of concerns, I can be reached at:
[github: ${data.github}](https://github.com/${data.github})` : ''}
[email: ${data.email}](mailto:${data.email})`;

writeFile('dist/README.md', output, err => {
    if(err) throw err;
    console.log('Professinal README.md created!!!');
});
}