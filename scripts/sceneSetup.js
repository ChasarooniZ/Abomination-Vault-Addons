function localizeText(str, options = {}) {
	return game.i18n.format(
		`abomination-vaults-addons.drawing-text.${str}`,
		options,
	);
}

async function setupTextandPercent(drawings, floor, pct, maxPct) {
	const increment = maxPct / drawings.length;
	for (const drawData of drawings) {
		pct += increment;
		SceneNavigation.displayProgressBar({
			label: localizeText("progress-text"),
			pct,
		});
		await setupText(drawData, floor);
	}
	return pct;
}

export async function setupAllHeightTextDialog() {
	const floors = ["A", "B", "D", "E", "F", "G", "H", "J"];

	const content = floors
		.map(
			floor => `
    <div class="form-group">
      <label>
        <input type="checkbox" name="floor${floor}" checked>
        ${localizeText("floor")} ${floor}
      </label>
    </div>
  `,
		)
		.join("");

	new Dialog({
		title: localizeText("title"),
		content: `
      <form>
        ${content}
      </form>
    `,
		buttons: {
			submit: {
				icon: "<i class=\"fas fa-check\"></i>",
				label: localizeText("submit"),
				callback: html => processSelectedFloors(html, floors),
			},
			cancel: {
				icon: "<i class=\"fas fa-times\"></i>",
				label: localizeText("cancel"),
			},
		},
		default: "submit",
	}).render(true);
}

async function processSelectedFloors(html, floors) {
	let pct = 0;
	const floorToRun = [];
	for (const floor of floors) {
		const isChecked = html.find(`[name="floor${floor}"]`)[0].checked;
		if (isChecked) floorToRun.push(floor);
	}
	const pctPerRoom = 100 / floorToRun.length;
	if (floorsToRun.includes("A")) pct = await addTextForFloorA(pct, pctPerRoom);
	if (floorsToRun.includes("B")) pct = await addTextForFloorB(pct, pctPerRoom);
	if (floorsToRun.includes("C")) pct = await addTextForFloorD(pct, pctPerRoom);
	if (floorsToRun.includes("D")) pct = await addTextForFloorE(pct, pctPerRoom);
	if (floorsToRun.includes("E")) pct = await addTextForFloorF(pct, pctPerRoom);
	if (floorsToRun.includes("F")) pct = await addTextForFloorG(pct, pctPerRoom);
	if (floorsToRun.includes("G")) pct = await addTextForFloorH(pct, pctPerRoom);
	addTextForFloorJ(pct, pctPerRoom);
}

export async function addTextForFloorA(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("3Nat4ImT49niZUdr");
	// Floor A - Gauntlight Ruins
	const drawings = [
		// A8. Sinkhole
		{
			text: localizeText("ft-down", { feet: "10" }),
			x: 5765.625,
			y: 7584.375,
			shape: {
				width: 183,
				height: 104,
				type: "r",
			},
		},
	];
	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorB(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("3Nat4ImT49niZUdr");
	// Floor B - Servants' Quarters
	const drawings = [
		// B23. Well
		{
			text: localizeText("down-to", { area: "C40" }),
			x: 6113,
			y: 5419,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
	];
	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorD(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("Y4pI9rvbaVvmK2kn");
	// Floor D - Belcorra's Retreat
	const drawings = [
		// D11. Torture Chamber
		// Cage 1
		{
			text: localizeText("ft-up", { feet: "5" }),
			x: 2231.25,
			y: 2512.5,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// Cage 2
		{
			text: localizeText("ft-up", { feet: "5" }),
			x: 2212.5,
			y: 2821.875,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// Cage 3
		{
			text: localizeText("ft-up", { feet: "5" }),
			x: 2212.5,
			y: 3131.25,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// D14. Pavilion
		{
			text: localizeText("ft-down", { feet: "10" }),
			x: 4725,
			y: 5362.5,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// D17. Disposal Pond
		{
			text: localizeText("ft-up", { feet: "20" }),
			x: 4500,
			y: 6628,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
	];
	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorE(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("B9O44gBwHIUTRasQ");
	// Floor E - Arena
	const drawings = [
		// E1. Upper Shaft
		// Gauntlight Hole
		{
			text: localizeText("ft-below", { feet: "80" }),
			x: 5662.5,
			y: 3496.875,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// E10. Grand Concourse
		// Bridge
		{
			text: localizeText("ft-below", { feet: "20" }),
			x: 5588,
			y: 5288,
			shape: {
				width: 304,
				height: 94,
				type: "r",
			},
		},
		// E12. Sentencing Chambers
		// Big Hole 1
		{
			text: localizeText("ft-down", { feet: "55" }),
			x: 6928,
			y: 3028,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// Big Hole 2
		{
			text: localizeText("ft-down", { feet: "55" }),
			x: 7396.875,
			y: 3028.125,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// Small Hole 1
		{
			text: localizeText("ft-down", { feet: "55" }),
			x: 6881.25,
			y: 2559.375,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// Small Hole 2
		{
			text: localizeText("ft-down", { feet: "55" }),
			x: 7171.193808504039,
			y: 2564.8960877951954,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// Small Hole 3
		{
			text: localizeText("ft-down", { feet: "55" }),
			x: 7468.702425015808,
			y: 2565.9536775633856,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// E20. Secret Hallway
		// Shuffling Scythe blade areas
		// 1
		{
			text: "1.",
			x: 6300,
			y: 6478,
			shape: {
				width: 152,
				height: 115,
				type: "r",
			},
		},
		// 2
		{
			text: "2.",
			x: 6919,
			y: 6488,
			shape: {
				width: 152,
				height: 115,
				type: "r",
			},
		},
		// 3
		{
			text: "3.",
			x: 6919,
			y: 6478,
			shape: {
				width: 152,
				height: 115,
				type: "r",
			},
		},
		// 4
		{
			text: "4.",
			x: 6919,
			y: 7097,
			shape: {
				width: 152,
				height: 115,
				type: "r",
			},
		},

		// E26. Arena Balcony
		{
			text: localizeText("ft-down", { feet: "30" }),
			x: 5662.5,
			y: 8531.25,
			shape: {
				width: 244,
				height: 98,
				type: "r",
			},
		},
	];

	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorF(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("2bM6K9jKWHJoYURa");
	// Floor F - Labs
	const drawings = [
		// F1. Central Shaft
		{
			text: localizeText("ft-down", { feet: "40" }),
			x: 5081.25,
			y: 3609.375,
			shape: {
				width: 136,
				height: 170,
				type: "r",
			},
		},
		// F9. Testing Grounds
		{
			text: localizeText("ft-below", { feet: "5" }),
			x: 6488,
			y: 6563,
			shape: {
				width: 136,
				height: 170,
				type: "r",
			},
		},
	];
	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorG(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("lKRTHUBDXYzwd80e");
	// Floor G - Prison
	const drawings = [
		// G7. Summoning Chamber
		// Descending Stairs
		{
			text: localizeText("stair-descending"),
			x: 5868.75,
			y: 4425,
			shape: {
				width: 201,
				height: 173,
				type: "r",
			},
		},
		// G17. Stasis Chambers
		// Catwalk
		{
			text: localizeText("ft-up", { feet: "10" }),
			x: 4940.625,
			y: 6065.625,
			shape: {
				width: 136,
				height: 170,
				type: "r",
			},
		},
		// Illusions
		{
			text: localizeText("illusory-floor-ceil"),
			x: 5184,
			y: 8091,
			shape: {
				width: 201,
				height: 173,
				type: "r",
			},
		},
	];
	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorH(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("MrRFPOICNcpBbfca");
	// Floor H - Decaying Gardens
	const drawings = [
		// H11. Carrion Ambush
		{
			text: localizeText("ft-below", { feet: "20" }),
			x: 6871.875,
			y: 4800,
			shape: {
				width: 201,
				height: 173,
				type: "r",
			},
		},
		// H13. Isolated Cage
		{
			text: localizeText("ft-up", { feet: "30" }),
			x: 6225,
			y: 3918.75,
			shape: {
				width: 201,
				height: 173,
				type: "r",
			},
		},
		// H29. West Garden
		{
			text: localizeText("ft-down", { feet: "100" }),
			x: 4096.875,
			y: 8887.5,
			shape: {
				width: 318,
				height: 111,
				type: "r",
			},
		},
	];
	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

export async function addTextForFloorJ(pct = 0, maxPct = 100) {
	const floor = game.scenes.get("o3zbh5CXtTQiWKwZ");
	// Floor J - Temple
	const drawings = [
		// J15. Swamp
		// 15 ft. up
		{
			text: localizeText("ft-up", { feet: "15" }),
			x: 7050,
			y: 6159,
			shape: {
				width: 283,
				height: 107,
				type: "r",
			},
		},
		// 20 ft. up
		{
			text: localizeText("ft-up", { feet: 20 }),
			x: 7069,
			y: 5100,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// 25 ft. up
		{
			text: localizeText("ft-up", { feet: "25" }),
			x: 7191,
			y: 3759,
			shape: {
				width: 216,
				height: 103,
				type: "r",
			},
		},
		// J16. Perilous Controls
		{
			text: localizeText("not-toxic-air"),
			x: 7772,
			y: 2644,
			shape: {
				width: 307,
				height: 97,
				type: "r",
			},
		},
	];

	return await setupTextandPercent(drawings, floor, pct, maxPct);
}

async function setupText(data, scene) {
	const drawingData = {
		author: game.user,
		hidden: data.hidden ?? true,
		interface: data.interface ?? true,
		locked: data.locked ?? true,
		strokeWidth: data.strokeWidth ?? 0,
		text: data.text,
		x: data.x,
		y: data.y,
		shape: data.shape,
	};
	await DrawingDocument.create(drawingData, { parent: scene });
}

export async function createRotateTilesPuzzle() {
	const FLOOR_J = game.scenes.get("o3zbh5CXtTQiWKwZ");
	const levers = [
		{
			x: 7564,
			y: 6065,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["group_1", "pipe_2"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: false,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 100,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "SAQeitUId8CFAhlv",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "XODHzp5qdcOzgY4S",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:group_1,pipe_2",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> group_1,pipe_2",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "JaszD9XCRt8tcwmV",
						},
					],
					files: [],
				},
			},
		},
		{
			x: 7416,
			y: 5914,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["pipe_1", "group_1"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: true,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 100,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "bCxnGA5l2ImnvhEd",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "IlBm1T421zUKrjxJ",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:pipe_1,group_1",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> pipe_1,group_1",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "6dRJGvqgkbeGIc5M",
						},
					],
					files: [],
				},
			},
		},
		{
			x: 7566,
			y: 4867,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["group_2", "pipe_2"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: false,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 50,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "SAQeitUId8CFAhlv",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "XODHzp5qdcOzgY4S",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:group_2,pipe_2",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> group_2,pipe_2",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "JaszD9XCRt8tcwmV",
						},
					],
					files: [],
				},
			},
		},
		{
			x: 7418,
			y: 4718,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["pipe_1", "group_2"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: false,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 50,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "SAQeitUId8CFAhlv",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "XODHzp5qdcOzgY4S",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:pipe_1,group_2",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> pipe_1,group_2",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "JaszD9XCRt8tcwmV",
						},
					],
					files: [],
				},
			},
		},
		{
			x: 7565,
			y: 3964,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["pipe_2", "group_3"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: false,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 50,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "SAQeitUId8CFAhlv",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "XODHzp5qdcOzgY4S",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:pipe_2,group_3",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> pipe_2,group_3",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "JaszD9XCRt8tcwmV",
						},
					],
					files: [],
				},
			},
		},
		{
			x: 7718,
			y: 3891,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["pipe_3", "group_3"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: false,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 50,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "SAQeitUId8CFAhlv",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "XODHzp5qdcOzgY4S",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:pipe_3,group_3",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> pipe_3,group_3",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "JaszD9XCRt8tcwmV",
						},
					],
					files: [],
				},
			},
		},
		{
			x: 7417,
			y: 3711,
			width: 167,
			height: 167,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
			},
			flags: {
				"tagger": {
					tags: ["pipe_1", "group_3"],
				},
				"monks-active-tiles": {
					name: "",
					active: true,
					record: false,
					restriction: "all",
					controlled: "all",
					trigger: ["", "rightclick"],
					allowpaused: false,
					usealpha: false,
					pointer: false,
					vision: false,
					pertoken: false,
					minrequired: 0,
					cooldown: 2,
					chance: 50,
					fileindex: 0,
					actions: [
						{
							action: "distance",
							data: {
								entity: {
									id: "token",
									name: "Triggering Token",
								},
								measure: "lte",
								distance: {
									value: 1,
									var: "sq",
								},
								from: "edge",
								continue: "within",
							},
							id: "SAQeitUId8CFAhlv",
						},
						{
							action: "playsound",
							data: {
								audiofile: "sounds/doors/industrial/open.ogg",
								audiofor: "everyone",
								volume: 1,
								loop: false,
								fade: 0,
								scenerestrict: false,
								prevent: false,
								delay: false,
								playlist: true,
							},
							id: "XODHzp5qdcOzgY4S",
						},
						{
							action: "rotation",
							data: {
								entity: {
									id: "tagger:pipe_1,group_3",
									match: "any",
									scene: "_active",
									name: "<i class=\"fas fa-tag fa-sm\"></i> pipe_1,group_3",
								},
								rotation: "+ 90",
								duration: 2,
							},
							id: "JaszD9XCRt8tcwmV",
						},
					],
					files: [],
				},
			},
		},
	];

	const lever_base
    = "modules/abomination-vaults-addons/assets/assets/box_big_blank.webp";

	const lever_bg = [
		{
			x: 7330,
			y: 5867,
			width: 494,
			height: 440,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/j16_level_bg_1.webp",
			},
		},
		{
			x: 7346,
			y: 4681,
			width: 518,
			height: 483,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/j16_level_bg_2.png",
			},
		},
		{
			x: 7382,
			y: 3707,
			width: 553,
			height: 445,
			texture: {
				src: "modules/abomination-vaults-addons/assets/assets/j16_level_bg_3.png",
			},
		},
	];

	// Lever BG
	for (const tile of lever_bg) {
		createTile({ ...tile, locked: true, sort: 1 }, FLOOR_J);
	}
	// Lever Base
	for (const tile of levers) {
		createTile(
			{
				...tile,
				locked: true,
				sort: 2,
				texture: {
					src: lever_base,
				},
				flags: undefined,
			},
			FLOOR_J,
		);
	}

	// Lever
	for (const tile of levers) {
		createTile(
			{
				...tile,
				locked: true,
				sort: 3,
			},
			FLOOR_J,
		);
	}

	ui.notifications.notify("Lever Puzzle on Floor J in room J16 has been added");
}

async function createTile(data, scene) {
	const tileData = {
		author: game.user,
		locked: true,
		...data,
	};
	await TileDocument.create(tileData, { parent: scene });
}
