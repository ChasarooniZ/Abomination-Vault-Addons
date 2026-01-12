const text_sections = [
	{
		shape: { height: 560, width: 560 },
		text: "1",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#ffffff",
		textColor: "#ffffff",
		x: 2250,
		y: 2700,
		interface: true,
		locked: true,
	},
	{
		shape: { height: 560, width: 560 },
		text: "2",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#e0fffa",
		textColor: "#e0fffa",
		x: 2650,
		y: 3088,
		interface: true,
		locked: true,
	},
	{
		shape: { height: 560, width: 560 },
		text: "4",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#70ffe7",
		textColor: "#70ffe7",
		x: 3425,
		y: 3863,
		interface: true,
		locked: true,
	},
	{
		shape: { height: 560, width: 560 },
		text: "5",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#5cffe4",
		textColor: "#5cffe4",
		x: 3813,
		y: 4250,
		interface: true,
		locked: true,
	},
	{
		shape: { height: 560, width: 560 },
		text: "6",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#2effdc",
		textColor: "#2effdc",
		x: 4213,
		y: 4638,
		interface: true,
		locked: true,
	},
	{
		shape: { height: 560, width: 560 },
		text: "3",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#9ffeee",
		textColor: "#9ffeee",
		x: 3038,
		y: 3475,
		interface: true,
		locked: true,
	},
	{
		shape: { height: 560, width: 560 },
		text: "7",
		fontSize: 100,
		rotation: 45,
		strokeColor: "#00ffd5",
		textColor: "#00ffd5",
		x: 4600,
		y: 5025,
		interface: true,
		locked: true,
	},
];

const hole_data = {
	x: 1600,
	y: 2000,
	width: 900,
	height: 900,
	elevation: 200,
	texture: {
		src: "modules/abomination-vaults-addons/assets/assets/hole1.webp",
	},
};

const otari_scene_id = "lQkXSdxvO9CRxohD";

export async function setupGauntlightRevenge() {
	const otari = game.scenes.get(otari_scene_id);
	await placeGauntLightToken();
	for (const text of text_sections) {
		await setupText(text, otari);
	}
	await createTile(hole_data, otari);
	ui.notifications.notify("Gauntlight's Revenge Elements Added");
}

async function placeGauntLightToken() {
	const actorName = "Gauntlight's Revenge";

	const actor = game.actors.getName(actorName);
	let tokenData = {
		name: actor.name,
		x: 1967,
		y: 2317,
		elevation: 200,
		hidden: true,
		actorId: actor.id,
		actorLink: true,
	};
	tokenData = foundry.utils.mergeObject(tokenData, actor.prototypeToken);

	const createdTokens = await canvas.scene.createEmbeddedDocuments("Token", [
		tokenData,
	]);
}

async function setupText(data, scene) {
	await DrawingDocument.create(data, { parent: scene });
}

async function createTile(data, scene) {
	const tileData = {
		author: game.user,
		locked: true,
		...data,
	};
	await TileDocument.create(tileData, { parent: scene });
}
