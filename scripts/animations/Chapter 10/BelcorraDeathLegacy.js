import { MODULE_NAME } from "../../module.js";
import { jb2aVersion, missingModulesError } from "../helpers.js";

/** This Macro was originally Written by Maple */
export async function belcorraDeathLegacy() {
	if (missingModulesError(["jb2a", "sequencer"])) return;
	const BELCORRA = "Belcorra Haruvex";
	const token = canvas.tokens.placeables.find(t => t.name === BELCORRA);
	const version = jb2aVersion();

	const files = {
		wind: "jb2a.wind_stream.white",
		smokeRing: "jb2a.markers.smoke.ring.loop.bluepurple",
		strands: {
			patreon: "jb2a.energy_strands.in.blue.01.1",
			free: "jb2a.energy_strands.in.green.01.1",
		},
		skull: {
			patreon: "jb2a.toll_the_dead.blue.skull_smoke",
			free: "jb2a.toll_the_dead.green.skull_smoke",
		},
	};

	const sfx = {
		wind: "modules/pf2e-abomination-vaults/assets/audio/ambience/wind-in-the-rocks.ogg",
		nhimbaloth: [
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/1N.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/2H.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/3I.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/4M.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/5B.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/6A.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/7L.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/8O.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/9T.ogg",
			"modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/010H.ogg",
		],
		belcorraScream:
      "modules/pf2e-abomination-vaults/assets/audio/fx/Belcorra-wail-01.ogg",
	};

	const useSFX = true;

	// await Sequencer.Preloader.preloadForClients([
	//     files.wind,
	//     files.smokeRing,
	//     files.strands[version],
	//     files.skull[version],
	// ])

	// if (useSFX) {
	//     await Sequencer.Preloader.preloadForClients([
	//         sfx.wind,
	//         ...sfx.nhimbaloth,
	//         sfx.belcorraScream
	//     ])
	// }

	await new Sequence({ moduleName: MODULE_NAME, softFail: true })
		.canvasPan()
		.shake({ duration: 23000, strength: 3 })
		.effect()
		.file(files.wind)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.duration(20000)
		.fadeOut(5000)
		.scale(6)
		.sound()
		.file(sfx.wind)
		.volume(0.5)
		.duration(21000)
		.fadeOutAudio(5000)
		.effect()
		.file(files.smokeRing)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(7)
		.duration(21000)
		.sound()
		.file(sfx.nhimbaloth[0])
		.volume(0.8)
		.duration(23000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.effect()
		.file(files.smokeRing)
		.delay(1000)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(6)
		.duration(20000)
		.sound()
		.file(sfx.nhimbaloth[1])
		.volume(0.8)
		.delay(1000)
		.duration(22000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.sound()
		.file(sfx.nhimbaloth[2])
		.volume(0.8)
		.delay(1000)
		.duration(22000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.effect()
		.file(files.smokeRing)
		.delay(2000)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(5)
		.duration(19000)
		.sound()
		.file(sfx.nhimbaloth[3])
		.volume(0.8)
		.delay(2000)
		.duration(21000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.effect()
		.file(files.smokeRing)
		.delay(3000)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(4)
		.duration(18000)
		.sound()
		.file(sfx.nhimbaloth[4])
		.volume(0.8)
		.delay(3000)
		.duration(19000)
		.fadeInAudio(5000)
		.sound()
		.file(sfx.nhimbaloth[5])
		.volume(0.8)
		.delay(3000)
		.duration(20000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.effect()
		.file(files.smokeRing)
		.delay(4000)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(3)
		.duration(17000)
		.sound()
		.file(sfx.nhimbaloth[6])
		.volume(0.8)
		.delay(4000)
		.duration(19000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.effect()
		.file(files.smokeRing)
		.delay(5000)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(2)
		.duration(16000)
		.sound()
		.file(sfx.nhimbaloth[7])
		.volume(0.8)
		.delay(5000)
		.duration(18000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.sound()
		.file(sfx.nhimbaloth[8])
		.volume(0.8)
		.delay(5000)
		.duration(18000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.effect()
		.file(files.smokeRing)
		.delay(6000)
		.atLocation(token)
		.aboveLighting()
		.fadeIn(5000)
		.scale(1)
		.duration(15000)
		.sound()
		.file(sfx.nhimbaloth[9])
		.volume(0.8)
		.delay(6000)
		.duration(17000)
		.fadeInAudio(5000)
		.fadeOutAudio(1000)
		.waitUntilFinished(-3000)
		.effect()
		.file(files.strands[version])
		.filter("ColorMatrix", { hue: version === "free" ? 110 : 0 })
		.scale(3)
		.atLocation(token)
		.aboveLighting()
		.duration(3000)
		.waitUntilFinished(-300)
		.effect()
		.file(files.skull[version])
		.filter("ColorMatrix", { hue: version === "free" ? 110 : 0 })
		.atLocation(token)
		.aboveLighting()
		.scale(2)
		.sound()
		.file(sfx.belcorraScream)
		.delay(-1000)
		.volume(0.6)
		.play({ preload: true });

	token.document.delete();
}
