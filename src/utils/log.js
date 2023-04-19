const chalk = require('chalk');

const log = {
	blue: (msg) => console.log(chalk.blue(msg)),
	green: (msg) => console.log(chalk.green(msg)),
	yellow: (msg) => console.log(chalk.yellow(msg)),
	yellowOut: (msg) => process.stdout.write(chalk.yellow(msg)),
};

module.exports = { log };
