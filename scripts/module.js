import { belcorraAttacks } from "./animations/BelcorraAttacks.js";
import { belcorraDeath } from "./animations/Chapter 10/BelcorraDeath.js";
import { belcorraDeathLegacy } from "./animations/Chapter 10/BelcorraDeathLegacy.js";
import { gauntlightCollapse } from "./animations/Chapter 10/GauntlightCollapse.js";
import { breakingTheSeal } from "./animations/Chapter 4/BreakingTheSeal.js";
import { nhimbalothPresence } from "./animations/NhimbalothPresence.js";
import { nhimbalothSymbol } from "./animations/NhimbalothSymbol.js";
import { titleCardDialog } from "./animations/TitleCard.js";
import { setupGauntlightRevenge } from "./revengeOfTheGauntlightSetup.js";
import {
  addTextForFloorA,
  addTextForFloorB,
  addTextForFloorD,
  addTextForFloorE,
  addTextForFloorF,
  addTextForFloorG,
  addTextForFloorH,
  addTextForFloorJ,
  createRotateTilesPuzzle,
  setupAllHeightTextDialog,
} from "./sceneSetup.js";

export const MODULE_ID = "abomination-vaults-addons";
export const MODULE_NAME = "Abomination Vaults: Addons";

Hooks.once("init", async function () {
  game.settings.register(MODULE_ID, "prison-door-flame", {
    name: game.i18n.localize(
      `${MODULE_ID}.module-settings.prison-door-flame.name`
    ),
    hint: game.i18n.localize(
      `${MODULE_ID}.module-settings.prison-door-flame.hint`
    ),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
});

Hooks.on("ready", () => {
  game.abomVaultAddons = {
    animations: {
      belcorraAttacks: belcorraAttacks,
      belcorraDeath: belcorraDeath,
      belcorraDeathLegacy: belcorraDeathLegacy,
      gauntlightCollapse: gauntlightCollapse,
      nhimbalothPresence: nhimbalothPresence,
      nhimbalothSymbol: nhimbalothSymbol,
      breakingTheSeal: breakingTheSeal,
      titleCardDialog: titleCardDialog,
    },
    setup: {
      scenes: {
        j: {
          createRotateTilesPuzzle: createRotateTilesPuzzle,
        },
        otari: {
          setupGauntlightRevenge: setupGauntlightRevenge,
        },
      },
      labels: {
        dialog: setupAllHeightTextDialog,
        floor: {
          a: addTextForFloorA,
          b: addTextForFloorB,
          d: addTextForFloorD,
          e: addTextForFloorE,
          f: addTextForFloorF,
          g: addTextForFloorG,
          h: addTextForFloorH,
          j: addTextForFloorJ,
        },
      },
    },
  };

  Hooks.on("updateWall", async (wall, update) => {
    if (!game.settings.get(MODULE_ID, "prison-door-flame")) return;
    if (canvas.scene.id !== "lKRTHUBDXYzwd80e") return; // Check if on demon floor
    if (update?.ds !== 1 && update?.ds !== 0) return; // If not open door
    const point1 = { x: wall.c[0], y: wall.c[1] };
    const point2 = { x: wall.c[2], y: wall.c[3] };
    const dist = new Ray(point1, point2).distance;
    const lightSize =
      (((dist / canvas.grid.size) * canvas.grid.distance) / 2) * 1.2;
      let light;
    if (game.user.isGM) {
      light = await AmbientLightDocument.create(
        {
          x: (point1.x + point2.x) / 2,
          y: (point1.y + point2.y) / 2,
          config: {
            color: "#ff9500",
            coloration: 1,
            bright: lightSize,
            dim: lightSize,
          },
          walls: false,
        },
        { parent: game.scenes.get("lKRTHUBDXYzwd80e") }
      );
    }
    new Sequence()
      .effect()
      .file("jb2a.wall_of_fire.100x100.yellow")
      .fadeIn(250, { ease: "easeInQuint" })
      .atLocation(point1)
      .stretchTo(point2)
      .scale({ x: 1.0, y: 1.5 })
      .duration(2000)
      .fadeOut(250, { ease: "easeOutQuint" })
      .aboveLighting()
      .opacity(0.6)
      .waitUntilFinished()
      .thenDo(async function () {
        if (game.user.isGM) {
          light.delete();
        }
      })
      .play({ preload: true });
  });
});
