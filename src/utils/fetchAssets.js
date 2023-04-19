const fs = require('fs');
const path = require('path');

const { ASSETS_FOLDER, WEB_REGEX } = require('../constants.js');
const { clearStdoutLine } = require('./clearStdoutLine.js');
const { fetchAsset } = require('./fetchAsset.js');

const fetchAssets = async ({ assetCount, assetList, frameName }) => {
	let currentAsset = 0;

	const folderName = frameName.match(WEB_REGEX)[1];
	fs.mkdirSync(path.join(__dirname, ASSETS_FOLDER, folderName), { recursive: true });

	for (const { name, url } of assetList) {
		currentAsset++;
		fetchAsset({
			assetCount,
			currentAsset,
			folderName,
			name,
			url,
		});
	}

	clearStdoutLine();
};

module.exports = { fetchAssets };
