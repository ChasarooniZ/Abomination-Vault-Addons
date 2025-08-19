import { MODULE_NAME } from "../../module.js";
import { missingModulesError } from "../helpers.js";

/**
 * Written by @ChasarooniZ
 * Requires Jb2A Premium & Pf2e Graphics
 * @param {useSFX: boolean} param0
 */
export async function breakingTheSeal({ useSFX = true, volume = 1 }) {
  if (missingModulesError(["jb2a", "sequencer", "pf2e-graphics"])) return;
  const pos = {
    altar: { x: 3525, y: 2925 },
    artifact: {
      otari: { x: 3562.5, y: 2887.5 },
      vol: { x: 3562.5, y: 2962.5 },
      aesphena: { x: 3487.5, y: 2887.5 },
      zarmavdian: { x: 3487.5, y: 2962.5 },
    },
    target: [
      { x: 3369, y: 6039 },
      { x: 3476, y: 5993 },
      { x: 3602, y: 5993 },
      { x: 3697, y: 6056 },
    ],
    shield: { x: 3518, y: 6611 },
  };

  const art = {
    ice: "jb2a.shield_themed.below.ice.01.blue",
    item_flash: {
      file: "jb2a.cast_shape.circle.single01.blue",
      offset: { otari: -20, zarmavdian: 20, aesphena: -145, vol: 65 },
    },
    altar_shield: "jb2a.shield.02.loop.yellow",
    beam2: {
      file: "jb2a.ranged.beam.002.03.orange",
      offset: { otari: -175, zarmavdian: -100, aesphena: 65, vol: -35 },
    },
    shield: {
      exist: "jb2a.shield.01.loop.blue",
      explode: "jb2a.shield.01.outro_explode.blue",
    },
    artifacts: {
      otari: "jb2a.magic_signs.rune.divination.complete.blue",
      zarmavdian: "jb2a.magic_signs.rune.illusion.complete.yellow",
      aesphena: "jb2a.magic_signs.rune.necromancy.complete.grey",
      vol: "jb2a.magic_signs.rune.evocation.complete.red",
    },
  };

  const sfx = {
    flash: [
      "graphics-sfx.magic.holy.protection.01",
      "graphics-sfx.magic.holy.protection.02",
      "graphics-sfx.magic.holy.protection.03",
      "graphics-sfx.magic.holy.protection.04",
    ],
    aura: "graphics-sfx.magic.dark.loop.bells.grave.01",
    beam: {
      start: "graphics-sfx.magic.dark.bolt.cast.01.01",
      loop: [
        "graphics-sfx.magic.fire.cast.loop.02",
        "graphics-sfx.magic.arcane.loop.01",
      ],
      end: "graphics-sfx.magic.earth.magnet.burst.01",
    },
    barrierDrop: "graphics-sfx.magic.dark.break.mana.01.02",
  };

  const beamDelay = 3000 + 1500 + 1500;

  const permShieldName = "AV:A Perm Shield";

  const altarDuration = 15 * 1000;

  const pan2Pos = {
    x: (pos.altar.x + (pos.target[0].x + pos.target[3].x) / 2) / 2,
    y: (pos.altar.y + (pos.target[0].y + pos.target[3].y) / 2) / 2,
  };

  // await Sequencer.Preloader.preloadForClients([
  //   art.ice,
  //   art.item_flash.file,
  //   art.altar_shield,
  //   art.beam2.file,
  //   art.shield.exist,
  //   art.shield.explode,
  //   art.artifacts.otari,
  //   art.artifacts.zarmavdian,
  //   art.artifacts.aesphena,
  //   art.artifacts.vol,
  // ]);
  // if (useSFX) {
  //   await Sequencer.Preloader.preloadForClients([
  //     ...sfx.flash,
  //     sfx.aura,
  //     sfx.beam.start,
  //     ...sfx.beam.loop,
  //     sfx.beam.end,
  //     sfx.barrierDrop,
  //   ]);
  // }

  new Sequence({ moduleName: MODULE_NAME, softFail: true })
    // Pan to artifacts
    .canvasPan()
    .atLocation(pos.altar) // Set the location
    .duration(1000) // Pan over 1 second
    .scale(3.5 / 5) // Zoom in
    .lockView(beamDelay - 1000)

    // Pan to beam
    .canvasPan()
    .atLocation(pan2Pos) // Set the location
    .duration(1000) // Pan over 1 second
    .scale(0.25) // Zoom out
    .delay(beamDelay + 1000)
    .lockView(2000)

    // Shake on Impact
    .canvasPan()
    .delay(beamDelay + 1000)
    .shake({
      duration: 3000,
      strength: 8,
      rotation: false,
      fadeInDuration: 250,
      fadeOutDuration: 250,
    })

    // Pan back to altar
    .canvasPan()
    .atLocation(pos.altar) // Set the location
    .duration(5000) // Pan over 5 second
    .scale(4 / 5) // Zoom in
    .delay(beamDelay + 1000 + 3000 + 3000)

    // Shield Altar
    .effect()
    .atLocation(pos.altar)
    .fadeIn(1000)
    .fadeOut(1000)
    .file(art.altar_shield)
    .duration(altarDuration)
    .opacity(0.9)
    .filter("ColorMatrix", { hue: 5 })
    .scale(0.75)

    //Aura Ice
    .effect()
    .delay(400)
    .fadeIn(400)
    .fadeOut(400)
    .atLocation(pos.altar)
    .file(art.ice)
    .duration(altarDuration)
    .opacity(0.4)
    .filter("ColorMatrix", { hue: 125 })
    .scale(1)

    // Flash SFX
    .sound()
    .playIf(useSFX)
    .file(sfx.flash[0])
    .volume(volume * 0.75)
    .delay(0 + 1500 + 200)

    .sound()
    .playIf(useSFX)
    .file(sfx.flash[1])
    .volume(volume * 0.75)
    .delay(500 + 1500 + 200)

    .sound()
    .playIf(useSFX)
    .file(sfx.flash[2])
    .volume(volume * 0.75)
    .delay(1000 + 1500 + 200)

    .sound()
    .playIf(useSFX)
    .file(sfx.flash[3])
    .volume(volume * 0.75)
    .delay(1500 + 1500 + 200)

    //Flash
    .effect()
    .file(art.item_flash.file)
    .atLocation(pos.artifact.aesphena)
    .filter("ColorMatrix", { saturate: -1 })
    .playbackRate(0.8)
    .scale(1 / 10)
    .delay(0 + 1500)

    .effect()
    .file(art.item_flash.file)
    .atLocation(pos.artifact.otari)
    .filter("ColorMatrix", { hue: art.item_flash.offset.otari })
    .playbackRate(0.8)
    .scale(1 / 10)
    .delay(500 + 1500)

    .effect()
    .file(art.item_flash.file)
    .atLocation(pos.artifact.zarmavdian)
    .filter("ColorMatrix", { hue: 180 })
    .playbackRate(0.8)
    .scale(1 / 10)
    .delay(1000 + 1500)

    .effect()
    .file(art.item_flash.file)
    .atLocation(pos.artifact.vol)
    .filter("ColorMatrix", { hue: art.item_flash.offset.vol })
    .playbackRate(0.8)
    .scale(1 / 10)
    .delay(1500 + 1500)

    // Aura SFX
    .sound()
    .playIf(useSFX)
    .file(sfx.aura)
    .volume(volume * 0.8)
    .delay(1500)
    .fadeInAudio(1500)
    .fadeOutAudio(1000)
    .duration(1800 + 1000 + 1500 + 2000)

    // Shield
    .effect()
    .file(art.shield.exist)
    .atLocation(pos.shield)
    .scale(3.28)
    .persist()
    .name(permShieldName)

    // Artifacts
    .effect()
    .file(art.artifacts.aesphena)
    .atLocation(pos.artifact.aesphena)
    .duration(9000)
    .scale(1 / 10)
    .delay(1500)
    .effect()
    .file(art.artifacts.otari)
    .atLocation(pos.artifact.otari)
    .duration(9000 - 250)
    .scale(1 / 10)
    .delay(500 + 1500)
    .effect()
    .file(art.artifacts.zarmavdian)
    .atLocation(pos.artifact.zarmavdian)
    .duration(9000 - 500)
    .scale(1 / 10)
    .delay(1000 + 1500)
    .effect()
    .file(art.artifacts.vol)
    .atLocation(pos.artifact.vol)
    .duration(9000 - 750)
    .scale(1 / 10)
    .delay(1500 + 1500)

    //beam SFX Start
    .sound()
    .playIf(useSFX)
    .delay(beamDelay + 600)
    .file(sfx.beam.start)
    .volume(volume * 0.8)

    //Beam SFX Playing
    .sound()
    .playIf(useSFX)
    .delay(beamDelay + 1800)
    .file(sfx.beam.loop[0])
    .volume(volume * 0.5)
    .duration(2500)
    .fadeOutAudio(500)

    // Beam sfx playing 2
    .sound()
    .playIf(useSFX)
    .delay(beamDelay + 1800)
    .file(sfx.beam.loop[1])
    .volume(volume * 0.5)
    .duration(2500)
    .fadeOutAudio(500)

    // beam SFX END
    .sound()
    .playIf(useSFX)
    .file(sfx.beam.end)
    .delay(beamDelay + 1800 + 1000)
    .volume(volume * 0.6)

    // beams
    .effect()
    .delay(beamDelay)
    .file(art.beam2.file)
    .filter("ColorMatrix", { saturate: -1 })
    .atLocation(pos.artifact.aesphena)
    .stretchTo(pos.target[0])
    .playbackRate(0.67)

    .effect()
    .delay(beamDelay)
    .file(art.beam2.file)
    .filter("ColorMatrix", { hue: 25 })
    .atLocation(pos.artifact.zarmavdian)
    .stretchTo(pos.target[1])
    .playbackRate(0.67)
    .zIndex(1)

    .effect()
    .delay(beamDelay)
    .file(art.beam2.file)
    .filter("ColorMatrix", { hue: art.beam2.offset.vol })
    .atLocation(pos.artifact.vol)
    .stretchTo(pos.target[2])
    .playbackRate(0.67)
    .zIndex(1)

    .effect()
    .delay(beamDelay)
    .file(art.beam2.file)
    .filter("ColorMatrix", { hue: 170 })
    .atLocation(pos.artifact.otari)
    .stretchTo(pos.target[3])
    .playbackRate(0.67)
    .waitUntilFinished()

    // Remove Perm shield remove the Shield Effect passive
    .thenDo(async function () {
      const macro = game.macros.getName(`D12 - Breaking the Seal`);
      if (macro) await macro.execute();
      Sequencer.EffectManager.endEffects({ name: permShieldName });
    })
    // Play shield explode effect
    .effect()
    .fadeIn(800)
    .playbackRate(0.75)
    .file(art.shield.explode)
    .atLocation(pos.shield)
    .scale(3.28)

    // Shield Break SFX
    .sound()
    .playIf(useSFX)
    .file(sfx.barrierDrop)
    .delay(700)

    // Shake on Break
    .canvasPan()
    .delay(1000)
    .shake()
    .wait(1000)
    .thenDo(async function () {
      const otariMusicPlaylist = game.playlists.get("4Fn06CzSICmDmJaP");
      const memoriesOfRoseguard =
        otariMusicPlaylist.sounds.get("dGPqLCTn84VUduYH");
      await otariMusicPlaylist.playSound(memoriesOfRoseguard);
    })
    .play({ preload: true });
}
