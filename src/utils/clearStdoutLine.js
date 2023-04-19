const clearStdoutLine = () => {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
};

module.exports = { clearStdoutLine };
