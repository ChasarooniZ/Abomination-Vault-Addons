export async function nhimbalothPresence({
  duration = 15,
  volume = 0.5,
  fadeInDuration = 1,
  fadeOutDuration = 1,
  sfx = "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/010H.ogg",
}) {
  const tentacle = "jb2a.arms_of_hadar.dark_purple";

  const filter = { hue: -100 };
  duration *= 1000;
  fadeInDuration *= 1000;
  fadeOutDuration *= 1000;

  await Sequencer.Preloader.preloadForClients([
    tentacle,
    game.modules.get("jb2a_patreon")?.active
      ? "jb2a.screen_overlay.01.bad_omen.dark_black"
      : "",
  ]);

  new Sequence()
    .sound()
    .file(sfx)
    .fadeInAudio(fadeInDuration)
    .fadeOutAudio(fadeOutDuration)
    .volume(volume)
    .duration(duration)
    .playIf(game.modules.get("jb2a_patreon")?.active)
    .effect()
    .file("jb2a.screen_overlay.01.bad_omen.dark_black")
    .fadeIn(fadeInDuration / 2)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.5, y: 0.5 })
    .screenSpaceScale({ fitX: true, ratioY: true })
    .duration(duration)
    //Right
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 1.1, y: 0.5 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    //Left
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: -0.1, y: 0.5 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    //Top 1
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.25, y: -0.1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    //Top 2
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.75, y: -0.1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    //Bot 1
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.85, y: 1.1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    //Bot 2
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.5, y: 1.1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    //Bot 3
    .effect()
    .file(tentacle)
    .fadeIn(fadeInDuration)
    .fadeOut(fadeOutDuration)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0.15, y: 1.1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .duration(duration)
    .filter("ColorMatrix", filter)
    .play();
}
