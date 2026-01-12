import { MODULE_NAME } from "../module.js";
import { missingModulesError } from "./helpers.js";

export async function titleCardDialog() {
	if (missingModulesError(["sequencer"])) return;
	new foundry.applications.api.DialogV2({
		window: { title: "Choose Intro Animation Mode" },
		content: `
    <label><input type="radio" name="choice" value="default" checked>Default</label>
    <label><input type="radio" name="choice" value="belcorra">Belcorra</label>
    <label><input type="radio" name="choice" value="volluk">Volluk</label>
    <label><input type="radio" name="choice" value="jafaki">Jafaki</label>
    <label><input type="radio" name="choice" value="urevian">Urevian</label>
    <label><input type="radio" name="choice" value="caliddo">Caliddo</label>
  `,
		buttons: [
			{
				action: "start",
				label: "Start",
				default: true,
				callback: (event, button, dialog) => button.form.elements.choice.value,
			},
			{
				action: "cancel",
				label: "Cancel",
			},
		],
		submit: (result) => {
			if (result === "cancel") console.log("User picked all options.");
			else titleCard(result);
		},
	}).render({ force: true });

	function titleCard(mode = "default") {
		const art
      = "modules/pf2e-abomination-vaults/styles/assets/abomination-vaults-logo-final.webp";
		const bg_sfx
      = "modules/abomination-vaults-addons/assets/sounds/av-intro-sfx-ducked.ogg";
		const av_sfxs = [
			"modules/abomination-vaults-addons/assets/sounds/ward_e_sexton_av_1.ogg",
			"modules/abomination-vaults-addons/assets/sounds/ward_e_sexton_av_2.ogg",
			"modules/abomination-vaults-addons/assets/sounds/ward_e_sexton_av_3.ogg",
		];

		const seq = new Sequence({ moduleName: MODULE_NAME, softFail: true })
			.sound()
			.file(bg_sfx)
			.sound()
			.file(Sequencer.Helpers.random_array_element(av_sfxs))
			.delay(264)
			.effect()
			.file(art)
			.duration(3800)
			.fadeIn(500, { ease: "easeOutCubic" })
			.fadeOut(2500)
			.screenSpace()
			.screenSpaceAboveUI()
			.screenSpaceScale({ fitY: true, ratioX: true })
			.scale(0.7);
		if (mode !== "default") {
			let color = 0x32A6A8;
			if (mode === "belcorra") {
				color = 0x32A6A8;
			} else if (mode === "urevian") {
				color = 0xF03316;
			} else if (mode === "volluk") {
				color = 0xEED36E;
			} else if (mode === "jafaki") {
				color = 0xEF8B51;
			} else if (mode === "caliddo") {
				color = 0x53874A;
			}
			seq.filter("Glow", {
				distance: 30,
				outerStrength: 4,
				innerStrength: 0,
				color,
				quality: 0.1,
				knockout: false,
			});
		}
		seq.play({ preload: true });
	}
}
