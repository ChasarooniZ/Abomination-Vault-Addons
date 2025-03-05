import { belcorraAttacks } from "./animations/BelcorraAttacks.js";
import { belcorraDeath } from "./animations/Chapter 10/BelcorraDeath.js";
import { gauntlightCollapse } from "./animations/Chapter 10/GauntlightCollapse.js";
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

Hooks.on("ready", () => {
  game.abomVaultAddons = {
    animations: {
      belcorraAttacks: belcorraAttacks,
      belcorraDeath: belcorraDeath,
      gauntlightCollapse: gauntlightCollapse,
      nhimbalothPresence: nhimbalothPresence,
      nhimbalothSymbol: nhimbalothSymbol,
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
