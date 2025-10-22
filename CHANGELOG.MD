# 1.3.2 - Let there be Dark 2: Electric Boogaloo

- `Updates`
  - Properly fixed bug with `Prison's Flames` animation not automatically removing the light (🐛💻 @YoSoy-Ed)
  - 
# 1.3.1 - Let there be Dark

- `Updates`
  - Fixed bug with `Prison's Flames` animation not automatically removing the light (🐛 @YoSoy-Ed)

# 1.3.0 - Some Cultists

- **Added**
  - **Nhimbaloth Cultist** (1) - Reflavored Cultist
  - **Nhimblaoth Cult Leader** (7) - Reflavored Cult Leader
  - **Nhmbaloth Hunter** (6) - Reflavored Monster Hunter

# 1.2.2 - Fixes

- `Updates`
  - Fixed bug where `Will o' Wisp Swarm` was accidentally replacing `Will O Wisps`
  - Cleaned up the packs

# 1.2.1 - cleaning

- `Updates`
  - `Break the Seal` now preloads the animation
  - Cleaned up the packs

# 1.2.0 - Missing Maps

- **Added**
  - `Blades for Glades` battlemap
  - `Odd Stories` battlemap

# 1.1.0 - Tapestries

- **Added**
  - `Lore Through Tapestries` - Tapestry descriptions depicting Belcorra's life (@Tight-Branch8678)

# 1.0.0 - Mastermind Update

- **Updates**
  - Updated to Foundry VTT version `13`
  - Fixed issue with perm issions for the Prison floor fire (🐛 @thejoester
    )

# 0.13.3 - Preloading and Macro Fixes

- `Updates`
  - For all Sequencer Macros added preloading
  - Added more detailed errors when you're missing modules necessary for some macros (🐛 @naurgul)

# 0.13.2 - Fixing Maps

- `Fixed`
  - Fixed the `Log Fume` maps not linking their images properly (@foo)

# 0.13.1 - Scythe Trap Tooltip

- `Updated`
  - `Helper Drawing Setup Dialog`
    - Added drawings to indicate where the `Shuffling Scythe Blades` hazard sections are for `Scythe Shuffle` (@YoSoy-Ed)

# 0.13.0 - Prison Door Flame

- `Added`
  - `Prison's Flames`
    - Added the Flame effect on doors for the `Prison` floor as described in the module
    - Can be disabled in the module settings
  - `Otari Fishery Map`
    - Made by @Eternus

# 0.12.0 - Gauntlight's Revenge

- `Added`
  - **Gauntlight's Revenge** (chasarooni)
    - A final set piece featuring our party chasing down an animated Gauntlight as it races towards Otari!
    - Meant as a last hurrah, and a show of the bonds the players have made throughout this journey <3
  - **Ghost Queen's Reflection**
    - Adds a replacement for the mimic encounter (@weepingminotaur)
  - **Otari Market Map**
    - A map for the Otari Market
- `Updated`
  - Removed preloading as it cause issues with running animations
  - Lowered `Will-'o-wisp Swarm` Opacity to `0.5` (@MrPeach774)
  - Fixed description requirements for `Break the Seal`

# 0.11.1 - Fix issue

- Fixed issue with `Break the Seal` animation where one of the beams was on the wrong layer

# 0.11.0 - Breaking the Barrier

- Added a new animation `Break the Seal`
  - This animation plays an animation for when the Roseguard artifacts are gathered and activates the Break the Seal macro built into the module
- `Fixes`
  - Old animations now `softfail` (So if you are missing assets they should still run)

# 0.10.1 - Fixes to Drawings

- Added some fixes for the drawing dialog (actually shows percent, and checkboxes now actually affect what gets run) (🐛 @DoctorDrake)

# 0.10.0 - Nhimbaloth Makes an appearance

- `Update`
  - Updated the `BelcorraDeath` macro to show a little more Nhim.
  - The previous `BelcorraDeath` macro is still available via the api with `await game.abomVaultAddons.animations.belcorraDeathLegacy()`

# 0.9.0 - Helpful Little Drawings

- Added a new setup macro `Helper Drawing Setup Dialog`
  - This macro will ask what floors you want to ask text for
  - It will add some helper text `Drawings` to the floors
  - This includes some Height Indicators and clarifications on details of the room that are easy to miss due to how it looks visually

# 0.8.1 - Journals & Fixes

- Added Journal entry pages for `Rotation Puzzle` and `Swarm of Will o' Wisp`
- Fixed issue where `Swarm of Will O' Wisp`'s ID was colliding with `Will o' Wisp`'s (🐛 @Kras Mazov)

# 0.8.0 - Rotation Puzzle

- `Map Update Macro`
  - Added a new macro `Setup Rotation Puzzle` (for floor J)
  - Note, to interact with levers you need to right click on them with a token selected within 1 grid square
  - Will setup tiles to make a working rotation puzzle as described in journal `J15`
  - **NOTE:** Requires `Tagger` and `Monk's Active Tiles`
  - **_Credit_** Huge credit to @darkim for working out the idea originally, all this does is recreate their setup to the best off my ability

# 0.7.0 - Log Fumes and Worms

- New Maps
  - `Log Flume Loading Tower` - For loading logs that go down the fume to the Giant's Wheel
  - `Log Flume Down Hill` - A section of the logflume pipe for an encounter while riding down the flume (is enhanced by the TIle Scroll module)
- New Encounter
  - **Belcorra's Pet** - Gave minor guidance on changing up the final encounter with Belcorra to use a statted out version of her deceased and recent member of the incorporeal beings, her pet **Cave Worm**
  - This includes a macro for `Regurgitate` to toss tokens at an enemy (credit to @48787 for the basis for this macro)

# 0.6.1 - Animation Fixes

- The following animations have been fixed (🐛 @Dalvyn)
- `Belcorra Attacks`
- `Gauntlight Collapse`

# 0.6.0 - Nhimbaloth's Symbol

- Added a new animation macro `Nhimbaloth's Symbol`

# 0.5.0 - Nhimbaloth's Presence

- Added a new animation macro `Nhimbaloth's Presence`

# 0.4.0 - Transitions and a Swarm

- Moved every item except for the `Scenes` to an Adventure (the scenes will remain in their own compendium)
  - This is to make the update process smoother especially with the addition of "Changes to the Vaults" esque items
- Added Will-o'-Wisp Swarm (🧠 @Blablablablitz, 🎨@ChasarooniZ)

# 0.3.1 - A Broom Stick

- Updated Animation
  - Belcorra Attacks
    - Changed Easing on scaling to make it move in more vertically

# 0.3.0 - Attack of the 300 Ft Tall Belcorra

- Added Animation
  - Belcorra Attacks (@ChasarooniZ)

# 0.2.0 - Ruins of the Thirsty Alpaca

- Added maps for Ruins of the Thirsty Alpaca and of its rebuild (credit to @Icarus)

# 0.1.1 - Fixes

- Fixed `Gauntlight Collapse` animation not working (@Oshcakes)

# 0.1.0 - Start of a Good thing

- Added Animations
  - Belcorra's Death (@Maple)
  - Gauntlight Collapse (@Maple)

# 0.0.1

- Added Nhimbaloth Curses (@weepingminotaur)
