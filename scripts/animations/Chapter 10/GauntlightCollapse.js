import { MODULE_NAME } from "../../module.js";
import { jb2aVersion, missingModulesError } from "../helpers.js";

/** This Macro was originally Written by Maple */
export async function gauntlightCollapse() {
	if (missingModulesError(["jb2a", "sequencer"])) return;
	const X = 3525;
	const Y = 7725;

	const secs = 60;
	const min = 500;
	const max = 1500;

	const version = jb2aVersion();

	const files = {
		rocks: {
			patreon: "jb2a.falling_rocks.side.1x1.black",
			free: "jb2a.falling_rocks.side.1x1.grey",
		},
		explosion: "jb2a.explosion.01.orange",
		ground: "jb2a.impact.ground_crack.03.orange",
	};

	// await Sequencer.Preloader.preloadForClients([
	//   files.rocks[version],
	//   files.explosion,
	//   files.ground,
	// ]);

	const combined = await new Sequence({ moduleName: MODULE_NAME, softFail: true })
		.canvasPan()
		.shake({ duration: secs * 1000, strength: 2 })
		.effect()
		.file(files.rocks[version])
		.atLocation({ x: X, y: Y }, { randomOffset: 20 })
		.randomSpriteRotation()
		.repeats(secs, min, max)
		.effect()
		.file(files.explosion)
		.atLocation({ x: X, y: Y }, { randomOffset: 20 })
		.randomSpriteRotation()
		.scale(0.8, 1.2)
		.repeats(5 * secs, min / 5, max / 5)
		.effect()
		.file(files.ground)
		.filter("ColorMatrix", { hue: 125 })
		.atLocation({ x: X, y: Y }, { randomOffset: 20 })
		.scale(2, 3)
		.randomSpriteRotation()
		.delay((secs * 1000) / 2)
		.repeats(secs / 4, 2 * min, 2 * max);

	combined.waitUntilFinished().thenDo(() => {
		canvas.scene.walls.get("dGADBiiXkczwVORj").update({ ds: 2 });
		canvas.scene.walls.get("Lm2yIpWzawiFKDQS").update({ ds: 2 });
	});

	combined.play({ preload: true });
}
