const figlet = require('figlet');
const { prompt } = require('inquirer');
const { questions, mdGen } = require('./lib');

const init = () => prompt(questions).then(mdGen);

(() => {
    figlet(`
-----------
| Professional   |
| ReadMe                         |
| Generator             |
| Node + Js                |
-----------`,
{ whitespaceBreak: false },
(err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);

    init();
});
})();