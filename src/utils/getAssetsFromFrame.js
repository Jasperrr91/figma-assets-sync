const { FIGMA_DOC_ID } = require('../constants');
const { addNamesToAssetList } = require('./addNamesToAssetList');
const { fetchAssets } = require('./fetchAssets');
const { fetchComponentsFromFrame } = require('./fetchComponentsFromFrame');
const { figmaAxios } = require('./figmaAxios');
const { log } = require('./log.js');

const getAssetsFromFrame = async (frame) => {
	const { name } = frame;
	log.blue(`\t⚙️ Fetching asset list from ${name}...`);

	const components = await fetchComponentsFromFrame(frame);
	const componentIds = Object.keys(components).toString();

	const frameData = await figmaAxios(`images/${FIGMA_DOC_ID}/?ids=${componentIds}&format=svg`);
	const assetList = frameData.data.images;
	const assetListWithNames = addNamesToAssetList(assetList, components);
	const assetCount = Object.keys(assetList).length;

	log.blue(`\tFetching ${assetCount} assets from ${name}`);
	await fetchAssets({ assetCount, assetList: assetListWithNames, frameName: name });

	log.green(`\t✅ Fetched ${assetCount} assets for ${name}`);
};

module.exports = { getAssetsFromFrame };
