import { belcorraAttacks } from "./animations/BelcorraAttacks.js";
import { belcorraDeath } from "./animations/Chapter 10/BelcorraDeath.js";
import { gauntlightCollapse } from "./animations/Chapter 10/GauntlightCollapse.js";
import { nhimbalothPresence } from "./animations/NhimbalothPresence.js";
import { nhimbalothSymbol } from "./animations/NhimbalothSymbol.js";

Hooks.on("ready", () => {
  game.abomVaultAddons = {
    animations: {
      belcorraAttacks: belcorraAttacks,
      belcorraDeath: belcorraDeath,
      gauntlightCollapse: gauntlightCollapse,
      nhimbalothPresence: nhimbalothPresence,
      nhimbalothSymbol: nhimbalothSymbol,
    },
  };
});
