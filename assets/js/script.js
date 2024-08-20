let inputs;
let license;
let reload = false;

const getCode = () =>{

if(reload) return window.location.reload();

reload = true;

btn.style = 'background:yellow;color:black';
btn.innerHTML = 'Restart'
title.innerText = 'Copy code into a markdown file\n and save in your repository.';
title.style.color = '#c9c94e';

inputs = document.querySelectorAll('input:not([type="radio"])');
license = document.querySelector('input[name="license"]:checked')?.value;

console.log(license==undefined ? 'passed' : 'falied');

main.innerHTML = `
<textarea>
# ${inputs[0].value}
${license=='None' ? '' : 
license==undefined ? '' : `![${license}](https://img.shields.io/badge/License-${license}-blue)`}

${inputs[10].value ? `## Website: 
[website](${inputs[10].value})` : ''}

## Description
${inputs[1].value }

${inputs[2].value ? `![app_image](${inputs[2].value})` : ''}

## Table of Contents
${inputs[3].value ? '- [Installation](#installation)' : ''}
${inputs[4].value ? '- [Usage](#usage)' : ''}
${inputs[5].value ? '- [Credits](#credits)' : ''}
${license == 'None' ? '' : license == undefined ? '' : '- [License](#license)'}
${inputs[6].value ? '- [Features](#features)' : ''}
${inputs[7].value ? '- [Tests](#tests)' : ''}
${inputs[8].value ? '- [Contact](#contact)' : ''}

${inputs[3].value ? `## Installation
${inputs[3].value}` : ''}

${inputs[4].value ? `## Usage
${inputs[4].value}` : ''}

${inputs[5].value ? `## Credits
${inputs[5].value}` : ''}

${license == 'None' ? '' : license == undefined ? '' : `## License
${license}`}

${inputs[6].value ? `## Features
${inputs[6].value}` : ''}

${inputs[7].value ? `## Tests
${inputs[7].value}` : ''}

${inputs[8].value ? `## Contact
If there are any questions or concerns, I can be reached at:
##### [github: ${inputs[9].value}](https://github.com/${inputs[9].value})
##### [email: ${inputs[8].value}](mailto:${inputs[8].value})` : ''}
</textarea>    
`};

// getCode();