require('dotenv').config();

const { FIGMA_DOC_ID, ICON_PAGE, WEB_REGEX } = require('./constants');
const { figmaAxios, getAssetsFromFrame, log } = require('./utils');

log.blue(`🐣 Fetching assets\n`);
log.blue(`Fetching Figma File: ${FIGMA_DOC_ID}...`);

figmaAxios(`files/${FIGMA_DOC_ID}`).then(async (res) => {
	log.green(`✅ Fetched Figma File: ${res.data.name}\n`);

	const file = res.data;
	const iconPage = file.document.children.find((page) => page.name.includes(ICON_PAGE));
	const iconFrames = iconPage.children.filter((frame) => WEB_REGEX.test(frame.name));

	const iconFramesString = `[${iconFrames.map((frame) => frame.name).join(', ')}]`;
	log.green(`Found ${iconFrames.length} frames to fetch assets from: ${iconFramesString}`);

	for (const frame of iconFrames) {
		await getAssetsFromFrame(frame);
	}

	log.green(`\n🚀 Finished fetching assets`);
});
