const addNamesToAssetList = (assetList, components) => {
	return Object.entries(assetList).map(([componentId, url]) => {
		return {
			name: components[componentId].name,
			url,
		};
	});
};

module.exports = { addNamesToAssetList };
