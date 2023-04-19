const axios = require('axios');

const { FIGMA_API_KEY } = require('../constants.js');

const options = {
	baseURL: 'https://api.figma.com/v1/',
	headers: {
		'X-Figma-Token': FIGMA_API_KEY,
	},
};

const figmaAxios = axios.create(options);

module.exports = { figmaAxios };
