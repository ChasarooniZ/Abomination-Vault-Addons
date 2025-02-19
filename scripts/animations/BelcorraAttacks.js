export async function belcorraAttacks(volume = 1) {
  const flyInTime = 1.5 * 1000;
  const belcorraWarning =
    "modules/pf2e-abomination-vaults/assets/audio/motifs/belcorra-warning.ogg";
  const belcorraWail = Sequencer.Helpers.random_array_element([
    "modules/pf2e-abomination-vaults/assets/audio/fx/Belcorra-wail-01.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/fx/Belcorra-wail-02.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/fx/Belcorra-wail-03.ogg",
    "modules/pf2e-abomination-vaults/assets/audio/fx/Belcorra-wail-04.ogg",
  ]);
  const impact = "jb2a.explosion.08.blue";

  let token = canvas.tokens.controlled[0];

  if (!token) {
    const sequence = new Sequence()
      .crosshair()
      .gridHighlight()
      .callback(
        Sequencer.Crosshair.CALLBACKS.PLACED,
        async function (crosshair) {
          const position = crosshair.source;
          const actorName = "Belcorra Haruvex";

          const actor = game.actors.getName(actorName);
          if (!actor) {
            ui.notifications.error(`"${actorName}" not found.`);
            return;
          }

          let tokenData = {
            name: actor.name,
            x: position.x - position.width / 2,
            y: position.y - position.height / 2,
            hidden: true,
            actorId: actor.id,
            actorLink: true,
          };
          tokenData = foundry.utils.mergeObject(
            tokenData,
            actor.prototypeToken
          );

          const createdTokens = await canvas.scene.createEmbeddedDocuments(
            "Token",
            [tokenData]
          );
          if (createdTokens && createdTokens.length > 0) {
            token = canvas.tokens.get(createdTokens[0].id);
          } else {
            ui.notifications.error("Failed to create Belcorra token");
          }
        }
      );

    await sequence.play();

    // Wait a moment to ensure the token is fully created and available
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  if (!token) {
    ui.notifications.error("No token available for the sequence.");
    return;
  }

  const belcorraArt = token.document.ring.enabled
    ? token.document.ring.subject.texture || token.document.texture.src
    : token.document.texture.src;

  await Sequencer.Preloader.preloadForClients([
    belcorraWarning,
    belcorraWail,
    impact,
    belcorraArt,
  ]);

  const easing = "easeOutQuart";

  new Sequence()
    .animation()
    .on(token)
    .opacity(0)
    .waitUntilFinished()
    .animation()
    .on(token)
    .show()
    .canvasPan()
    .atLocation(token)
    .duration(2000)
    .scale(1)
    .lockView(12500)
    .sound()
    .file(belcorraWarning)
    .volume(volume)
    .duration(15 * 1000)
    .fadeOutAudio(2000)
    .waitUntilFinished(-5 * 1000)
    .sound()
    .file(belcorraWail)
    .volume(volume)
    .duration(10 * 1000)
    .fadeOutAudio(2000)
    .waitUntilFinished(-8 * 1000)
    .effect()
    .file(impact)
    .atLocation(token)
    .filter("ColorMatrix", { hue: -20, saturate: 1 })
    .filter("Glow", { color: 0x00fbff, distance: 1, outerStrength: 2 })
    .scaleToObject(3)
    .belowTokens()
    .delay(flyInTime - 400)
    .playIf(game.modules.get("jb2a_patreon")?.active)
    .effect()
    .file(belcorraArt)
    .atLocation(token)
    .scaleToObject(1.5)
    .screenSpace()
    .screenSpaceAboveUI()
    .animateProperty("sprite", "position.y", {
      from: Sequencer.Helpers.random_array_element([-6, 6]),
      to: 0,
      duration: flyInTime,
      gridUnits: true,
      ease: easing,
      delay: 0,
    })
    .animateProperty("sprite", "position.x", {
      from: -8,
      to: 0,
      duration: flyInTime,
      gridUnits: true,
      ease: easing,
      delay: 0,
    })
    .duration(flyInTime + 500)
    .fadeOut(200)
    .scaleIn(3, flyInTime, { ease: easing, delay: 0 })
    .waitUntilFinished(-500)
    .animation()
    .on(token)
    .fadeIn(200)
    .opacity(1)
    .play();
}
