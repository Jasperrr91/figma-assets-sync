const axios = require('axios');
const fs = require('fs');
const path = require('path');

const { ASSETS_FOLDER } = require('../constants');
const { clearStdoutLine } = require('./clearStdoutLine');
const { log } = require('./log');

const fetchAsset = async ({ assetCount, currentAsset, folderName, name, url }) => {
	const fileName = `${name}.svg`;
	const filePath = path.join(__dirname, ASSETS_FOLDER, folderName, fileName);

	clearStdoutLine();

	const fileExists = fs.existsSync(filePath);
	if (fileExists) {
		fs.unlinkSync(filePath);
	}

	log.yellow(
		`\t⚙️ ${currentAsset}/${assetCount}: ${fileExists ? 'updating' : 'creating'} ${fileName}...`
	);

	const svg = (await axios(url)).data;
	fs.writeFileSync(filePath, svg);
};

module.exports = { fetchAsset };
