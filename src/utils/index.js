const { addNamesToAssetList } = require('./addNamesToAssetList.js');
const { clearStdoutLine } = require('./clearStdoutLine.js');
const { fetchAsset } = require('./fetchAsset.js');
const { fetchAssets } = require('./fetchAssets.js');
const { fetchComponentsFromFrame } = require('./fetchComponentsFromFrame.js');
const { figmaAxios } = require('./figmaAxios.js');
const { getAssetsFromFrame } = require('./getAssetsFromFrame.js');
const { log } = require('./log.js');

module.exports = {
	addNamesToAssetList,
	clearStdoutLine,
	fetchAsset,
	fetchAssets,
	fetchComponentsFromFrame,
	figmaAxios,
	getAssetsFromFrame,
	log,
};
