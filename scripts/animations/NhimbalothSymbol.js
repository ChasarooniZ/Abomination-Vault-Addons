import { MODULE_NAME } from "../module.js";

export function nhimbalothSymbol({ duration = 1.5, volume = 0.5, scale = 1 }) {
  const file =
    "modules/pf2e-abomination-vaults/assets/journal-images/icons/symbol-nhimbaloth.webp";
  duration *= 1000;
  new Sequence({ moduleName: MODULE_NAME, softFail: true })
    .sound()
    .file(
      "modules/abomination-vaults-addons/assets/sounds/Riser%20Space%20Oddity%2000*.ogg"
    )
    .volume(volume)
    .effect()
    .file(file)
    .fadeIn(duration / 4, { ease: "easeInSine" })
    .scaleIn(0.5, duration / 8, { ease: "easeInSine" })
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.5, y: 0.5 })
    .scale(0.2 * scale)
    .screenSpaceScale({ fitY: true, ratioX: true })
    //.loopProperty("sprite", "rotation", { values: [0, 15, 0, -15, 0], duration: 25, delay: 500, ease: "easeInSine"})
    .loopProperty("spriteContainer", "position.x", {
      values: [0, 15, 0, -15, 0],
      duration: 25,
      delay: 500,
      screenSpace: true,
      ease: "easeInSine",
    })
    .duration(duration)
    .fadeOut(duration / 4, { ease: "easeOutSine" })
    .play();
}
