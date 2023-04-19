require('dotenv').config();
const { figmaAxios } = require('./figmaAxios');

const FIGMA_DOC_ID = process.env.FIGMA_DOC_ID;

const fetchComponentsFromFrame = async (frame) => {
	const nodeData = await figmaAxios(`files/${FIGMA_DOC_ID}/nodes?ids=${frame.id}`);

	return nodeData.data.nodes[frame.id].components;
};

module.exports = { fetchComponentsFromFrame };
