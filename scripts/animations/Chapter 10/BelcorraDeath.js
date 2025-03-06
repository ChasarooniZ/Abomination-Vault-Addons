import { jb2aVersion } from "../helpers.js";

const files = {
  wind: "jb2a.wind_stream.white",
  smokeRing: "jb2a.markers.smoke.ring.loop.bluepurple",
  strands: {
    patreon: "jb2a.energy_strands.in.blue.01.1",
    free: "jb2a.energy_strands.in.green.01.1",
  },
  skull: {
    patreon: "jb2a.toll_the_dead.blue.skull_smoke",
    free: "jb2a.toll_the_dead.green.skull_smoke",
  },
  portal: "jb2a.sphere_of_annihilation.600px.purple",
  eye: "jb2a.twinkling_stars.points04.orange",
  body: "jb2a.template_circle.aura.01.complete.small.bluepurple",
};

const sfx = {
  wind: "modules/pf2e-abomination-vaults/assets/audio/ambience/wind-in-the-rocks.ogg",
  nhimbaloth: [
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/1N.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/2H.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/3I.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/4M.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/5B.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/6A.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/7L.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/8O.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/9T.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/motifs/whispering-reeds/010H.ogg",
  ],
  belcorraScream:
    "modules/pf2e-abomination-vaults/assets/audio/fx/Belcorra-wail-01.ogg",
  belcorraEaten:
    "modules/abomination-vaults-addons/assets/sounds/Impact%20Anvil%20001-002.ogg",
  portal:
    "modules/abomination-vaults-addons/assets/sounds/Quantum%20Fluctuations%20Loop%20-%20(Reverse%20Reverb).ogg",
  fall: "modules/abomination-vaults-addons/assets/sounds/Musical%20Suspense%20Chorus%201.ogg",
};

const duration = {
  portal: {
    loop: 15 * 1000,
    intro: 1.5 * 1000,
    outro: 1.5 * 1000,
  },
};

const arms = [
  { offset: { x: 1.3, y: 0 }, flip: false },
  { offset: { x: 0.6, y: 0.9 }, flip: false },
  { offset: { x: 0.8, y: -0.8 }, flip: false },
  { offset: { x: -1.3, y: 0 }, flip: true },
  { offset: { x: -0.6, y: 0.9 }, flip: true },
  { offset: { x: -0.8, y: -0.8 }, flip: true },
  { offset: { x: 0, y: -1.35 }, flip: false, top: true },
];

/** This Macro was originally Written by @Maple
 * The Nhimbaloth portal stuff was written by @ChasarooniZ
 */
export async function belcorraDeath() {
  const BELCORRA = "Belcorra Haruvex";
  const token = canvas.tokens.placeables.find((t) => t.name === BELCORRA);
  const version = jb2aVersion();
  if (version === "none") {
    ui.notifications.error("Need Some form of JB2a");
    return;
  }

  const art = token?.document?.ring?.enabled
    ? token?.document?.ring?.subject?.texture ?? token?.document?.texture?.src
    : token?.document?.texture?.src || "icons/svg/cowled.svg";

  const useSFX = true;

  duration.belcorraSlideUp = duration.portal.loop / 3;

  const delay = {
    belcorra: {
      slideUP: duration.portal.intro + 500,
    },
  };

  await Sequencer.Preloader.preloadForClients([
    files.wind,
    files.smokeRing,
    files.strands[version],
    files.skull[version],
    files.portal,
    files.eye,
    files.body,
  ]);

  if (useSFX) {
    await Sequencer.Preloader.preloadForClients([
      sfx.wind,
      ...sfx.nhimbaloth,
      sfx.belcorraScream,
      sfx.belcorraEaten,
      sfx.fall,
      sfx.portal,
    ]);
  }

  const seq = new Sequence({ softFail: true })
    // Shaky Cam
    .canvasPan()
    .shake({ duration: 23000 + duration.portal.loop, strength: 3 })
    .effect()

    // Wind
    .file(files.wind)
    .name("AV:A | BD: Wind")
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .duration(20000 + duration.portal.loop)
    .fadeOut(5000)
    .scale(6)

    // Wind SFX
    .sound()
    .file(sfx.wind)
    .volume(0.5)
    .duration(21000 + duration.portal.loop)
    .fadeOutAudio(5000)

    // Smoke Ring 1
    .effect()
    .name("AV:A | BD: Smoke Ring 1")
    .file(files.smokeRing)
    .fadeOut(1500)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(7)
    .duration(21000 + duration.portal.loop)

    // Nhim Ambience 1
    .sound()
    .file(sfx.nhimbaloth[0])
    .volume(0.8)
    .duration(23000 + duration.portal.loop)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)

    // Smoke Ring 2
    .effect()
    .name("AV:A | BD: Smoke Ring 2")
    .file(files.smokeRing)
    .fadeOut(1500)
    .delay(1000)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(6)
    .duration(20000 + duration.portal.loop)

    // Nhim Ambience 2 & 3
    .sound()
    .file(sfx.nhimbaloth[1])
    .volume(0.8)
    .delay(1000)
    .duration(22000 + duration.portal.loop)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)
    .sound()
    .file(sfx.nhimbaloth[2])
    .volume(0.8)
    .delay(1000 + 500)
    .duration(22000 + duration.portal.loop - 500)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)

    // Smoke Ring 3
    .effect()
    .name("AV:A | BD: Smoke Ring 3")
    .file(files.smokeRing)
    .fadeOut(1500)
    .delay(2000)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(5)
    .duration(19000 + duration.portal.loop)

    // Nhim Ambience 4
    .sound()
    .file(sfx.nhimbaloth[3])
    .volume(0.8)
    .delay(2000)
    .duration(21000 + duration.portal.loop)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)

    // Smoke Ring 4
    .effect()
    .name("AV:A | BD: Smoke Ring 4")
    .file(files.smokeRing)
    .fadeOut(1500)
    .delay(3000)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(4)
    .duration(18000 + duration.portal.loop)

    // Nhim Ambience 5 & 6
    .sound()
    .file(sfx.nhimbaloth[4])
    .volume(0.8)
    .delay(3000)
    .duration(19000 + duration.portal.loop)
    .fadeInAudio(5000)
    .sound()
    .file(sfx.nhimbaloth[5])
    .volume(0.8)
    .delay(3000 + 500)
    .duration(20000 + duration.portal.loop - 500)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)

    // Smoke Ring 5
    .effect()
    .name("AV:A | BD: Smoke Ring 5")
    .file(files.smokeRing)
    .fadeOut(1500)
    .delay(4000)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(3)
    .duration(17000 + duration.portal.loop)

    // Nhim Ambience 7
    .sound()
    .file(sfx.nhimbaloth[6])
    .volume(0.8)
    .delay(4000)
    .duration(19000 + duration.portal.loop)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)

    // Smoke Ring 6
    .effect()
    .name("AV:A | BD: Smoke Ring 6")
    .file(files.smokeRing)
    .fadeOut(1500)
    .delay(5000)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(2)
    .duration(16000 + duration.portal.loop)

    // Nhim Ambience 8 & 9
    .sound()
    .file(sfx.nhimbaloth[7])
    .volume(0.8)
    .delay(5000)
    .duration(18000 + duration.portal.loop)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)
    .sound()
    .file(sfx.nhimbaloth[8])
    .volume(0.8)
    .delay(5000 + 500)
    .duration(18000 + duration.portal.loop - 500)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)

    // Smoke Ring 6
    .effect()
    .name("AV:A | BD: Smoke Ring 6")
    .file(files.smokeRing)
    .fadeOut(1500)
    .delay(6000)
    .atLocation(token)
    .aboveLighting()
    .fadeIn(5000)
    .scale(1)
    .duration(15000 + duration.portal.loop)

    // Nhim Ambience 10
    .sound()
    .file(sfx.nhimbaloth[9])
    .volume(0.8)
    .delay(6000)
    .duration(17000 + duration.portal.loop)
    .fadeInAudio(5000)
    .fadeOutAudio(1000)
    .waitUntilFinished(-3000 - duration.portal.loop)

    //Belcorra Stunt Double
    .effect()
    .name("AV:A | BD: Belc. Stunt Double")
    .attachTo(token, { bindAlpha: false })
    .aboveLighting()
    .scaleToObject(1)
    .scale({
      x: token?.document?.texture?.scaleX ?? 0,
      y: token?.document?.texture?.scaleY ?? 0,
    })
    .file(art)
    .duration(duration.portal.loop)
    .zIndex(3)
    .animateProperty("spriteContainer", "position.y", {
      from: 0,
      to: -1,
      duration: duration.belcorraSlideUp,
      gridUnits: true,
      delay: delay.belcorra.slideUP,
      ease: "easeOutCubic",
    })
    .animateProperty("spriteContainer", "rotation", {
      from: 0,
      to: 35,
      duration: duration.belcorraSlideUp,
      ease: "easeOutQuint",
      fromEnd: false,
      delay: delay.belcorra.slideUP,
    })
    .animateProperty("spriteContainer", "scale.y", {
      from: 1,
      to: 1.25,
      duration: duration.belcorraSlideUp,
      delay: delay.belcorra.slideUP,
      ease: "easeOutCubic",
    })
    .animateProperty("spriteContainer", "scale.x", {
      from: 1,
      to: 1.25,
      duration: duration.belcorraSlideUp,
      delay: delay.belcorra.slideUP,
      ease: "easeOutCubic",
    })
    .animateProperty("spriteContainer", "scale.y", {
      from: 1.25,
      to: 0.4,
      duration: duration.belcorraSlideUp * 1.25,
      delay: delay.belcorra.slideUP * 2.1,
      // ease: "easeOutQuint",
    })
    .animateProperty("spriteContainer", "scale.x", {
      from: 1.25,
      to: 0.4,
      duration: duration.belcorraSlideUp * 1.25,
      delay: delay.belcorra.slideUP * 2.1,
      // ease: "easeOutQuint",
    })
    .fadeOut(duration.belcorraSlideUp, { ease: "easeOutCubic" })
    .animateProperty("spriteContainer", "scale.y", {
      from: 1,
      to: 0,
      duration: duration.belcorraSlideUp,
      ease: "easeOutCubic",
      fromEnd: true,
    })
    .animateProperty("spriteContainer", "scale.x", {
      from: 1,
      to: 0,
      duration: duration.belcorraSlideUp,
      ease: "easeOutCubic",
      fromEnd: true,
    })
    // Hide token 
    .animation()
        .on(token)
        .delay(delay.belcorra.slideUP)
        .hide()

    // Portal
    .effect()
    .name("AV:A | BD: Portal")
    .scaleIn(0, duration.portal.intro, { ease: "easeOutSine" })
    .file(files.portal)
    .filter("ColorMatrix", { hue: -95 })
    .atLocation(token, { offset: { x: 0, y: -1 }, gridUnits: true })
    .aboveLighting()
    .belowTokens()
    .duration(duration.portal.loop * 1.1)
    .scaleOut(0, duration.portal.outro, { ease: "easeInCubic" })
    .scaleToObject(15)
    .zIndex(-1)

    //Portal Sound
    .sound()
    .file(sfx.portal)
    .fadeInAudio(duration.portal.intro, { ease: "easeOutSine" })
    .volume(0.5)
    .duration(duration.portal.loop * 1.1)
    .fadeOutAudio(duration.portal.outro, { ease: "easeInCubic" })

    // Nhimbaloth Eye
    .effect()
    .name("AV:A | BD: Nhim Eye")
    .atLocation(token, { offset: { x: 0, y: -2 }, gridUnits: true })
    .file(files.eye)
    .fadeIn(1000)
    .fadeOut(1000)
    .delay(duration.portal.intro)
    .scaleIn(0, 1000, { ease: "easeOutSine" })
    .aboveLighting()
    .scale(1)
    .filter("ColorMatrix", { hue: 20, saturate: 1 })
    .filter("Glow", {
      distance: 10,
      outerStrength: 5,
      color: 0xebb33c,
      quality: 0.2,
      knockout: false,
    })
    .playbackRate(1 / 3)
    .delay(duration.portal.intro - 250)
    .duration((duration.portal.loop - duration.portal.intro) / 3)
    .zIndex(1)

    // Nhimbaloth Body
    .effect()
    .name("AV:A | BD: Nhim Body")
    .atLocation(token, { offset: { x: 0, y: -2 }, gridUnits: true })
    .scaleIn(0, 1000, { ease: "easeOutCubic" })
    .file(files.body)
    .fadeIn(1000, { ease: "easeOutCubic" })
    .fadeOut(1000, { ease: "easeOutCubic" })
    .delay(duration.portal.intro)
    .aboveLighting()
    .zIndex(0)
    .playbackRate(1 / 2)
    .duration((duration.portal.loop - duration.portal.intro) / 2)
    .opacity(0.3)
    .scale(1)

    // Belcorra Fall SFX
    .sound()
    .file(sfx.fall)
    .delay((duration.portal.loop * 0.7) / 3 + duration.portal.intro * 4)
    .volume(1)

    // Final Strand Attacks
    .effect()
    .name("AV:A | BD: Nhim Final Arms")
    .file(files.strands.free)
    .filter("ColorMatrix", { hue: 85 })
    .atLocation(token, { offset: { x: 0, y: -1 }, gridUnits: true })
    .delay((duration.portal.loop * 0.7) / 3 + duration.portal.intro * 4)
    .aboveLighting()
    .scaleOut(0.5, 1500)
    .scaleToObject(1)
    .zIndex(4)

    // Belcorra Eaten Shake
    .canvasPan()
    .delay((duration.portal.loop * 0.7) / 3 + duration.portal.intro * 5.2)
    .shake({ strength: 35 })

    // Belcorra Eaten SFX
    .sound()
    .file(sfx.belcorraEaten)
    .delay((duration.portal.loop * 0.7) / 3 + duration.portal.intro * 5.2)
    .volume(0.8)

    // Belcorra Death FX
    .effect()
    .name("AV:A | BD: Belc. Death Skull")
    .file(files.skull[version])
    .filter("ColorMatrix", { hue: version === "free" ? 110 : 0 })
    .atLocation(token, { offset: { x: 0, y: -1 }, gridUnits: true })
    .aboveLighting()
    .delay((duration.portal.loop * 0.7) / 3 + duration.portal.intro * 5.5)
    .scaleToObject(2)
    .zIndex(4)

    // Belcorra Death SFX
    .sound()
    .file(sfx.belcorraScream)
    .delay(
      (duration.portal.loop * 0.7) / 3 + duration.portal.intro * 5.5 - 1000
    )
    .volume(0.6);

  //Arms Attack 1
  for (const arm of arms) {
    addArm(seq, arm.offset, token, arm.flip, !!arm?.top);
  }

  //Arms Attack 2
  for (const arm of arms) {
    addArm(
      seq,
      arm.offset,
      token,
      arm.flip,
      !!arm?.top,
      (duration.portal.loop * 0.7) / 3
    );
  }
  await seq.play();

  await token.document.delete();
}

function addArm(seq, offset, token, flip = false, top = false, delay = 0) {
  const armOffset = Sequencer.Helpers.random_int_between(0, 6) * 100;
  seq
    .effect()
    .name(`AV:A BD: Nhim Arm ${!delay ? 1 : 2} - [${offset.x}, ${offset.y}]`)
    .atLocation(token, {
      offset: { x: 0 + offset.x, y: -2.2 + offset.y },
      gridUnits: true,
    })
    .mirrorY(flip)
    .filter("ColorMatrix", { hue: -95 })
    .delay(duration.portal.intro - armOffset + delay)
    .stretchTo(token, { offset: { x: 0, y: !delay ? 0 : -1 }, gridUnits: true })
    .file(
      top
        ? "jb2a.energy_strands.range.standard.purple.03"
        : "jb2a.energy_strands.range.standard.purple.04"
    )
    .playbackRate(1 / 2)
    .aboveLighting()
    .zIndex(2);

  if (delay !== 0)
    seq.duration(
      (duration.portal.loop - duration.portal.intro + armOffset - delay) / 2
    );
}
