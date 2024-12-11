import { belcorraDeath } from "./animations/Chapter 10/BelcorraDeath.js"
import { gauntlightCollapse } from "./animations/Chapter 10/GauntlightCollapse.js"

Hooks.on("ready", () => {
    game.abomVaultAddons = {
        animations: {
            belcorraDeath: belcorraDeath,
            gauntlightCollapse: gauntlightCollapse
        }
    }
})