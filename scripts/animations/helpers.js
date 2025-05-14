export function jb2aVersion() {
  return game.modules.get("jb2a_patreon")?.active
    ? "patreon"
    : game.modules.get("JB2A_DnD5e")?.active
    ? "free"
    : "none";
}

export function hasSequencer() {
  return game.modules.has("sequencer");
}

export function hasPF2eGraphics() {
  return game.modules.has("pf2e-graphics");
}

const MODULE_ID_TO_NAME = {
  jb2a: "JB2a",
  sequencer: "Sequencer",
  "pf2e-graphics": "PF2e Graphics",
};

export function missingModulesError(modules) {
  let missing = [];
  for (const module of modules) {
    let isPresent = false;
    if (module === "jb2a") {
      isPresent = jb2aVersion() !== "none";
    } else {
      isPresent = game.modules.has(module);
    }

    if (!isPresent) missing.push(MODULE_ID_TO_NAME[module] || module);
  }

  if (missing > 0) {
    ui.notifications.error(
      `This macro won't work as you are missing the following modules: <b>${missing.join(
        ", "
      )}</b>`
    );
    return true;
  }
  return false;
}
