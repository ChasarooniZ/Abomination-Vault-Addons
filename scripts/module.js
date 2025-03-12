import { belcorraAttacks } from "./animations/BelcorraAttacks.js";
import { belcorraDeath } from "./animations/Chapter 10/BelcorraDeath.js";
import { belcorraDeathLegacy } from "./animations/Chapter 10/BelcorraDeathLegacy.js";
import { gauntlightCollapse } from "./animations/Chapter 10/GauntlightCollapse.js";
import { breakingTheSeal } from "./animations/Chapter 4/BreakingTheSeal.js";
import { nhimbalothPresence } from "./animations/NhimbalothPresence.js";
import { nhimbalothSymbol } from "./animations/NhimbalothSymbol.js";
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
    },
    setup: {
      scenes: {
        j: {
          createRotateTilesPuzzle: createRotateTilesPuzzle,
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
});
