require('dotenv').config();

const FIGMA_API_KEY = process.env.FIGMA_API_KEY;
const FIGMA_DOC_ID = process.env.FIGMA_DOC_ID;

const ASSETS_FOLDER = '../icons';
const ICON_PAGE = 'Iconography';
const WEB_REGEX = /^web-(\d+)/;

module.exports = {
	ASSETS_FOLDER,
	FIGMA_API_KEY,
	FIGMA_DOC_ID,
	ICON_PAGE,
	WEB_REGEX,
};
