async function setupAllText() {
  setupAllHeightText();
}

async function setupAllHeightText() {
  const data = {
    text: "15 ft. up",
    strokeWidth: 0,
    x: 7050,
    y: 6159,
    hidden: true,
    interface: true,
    locked: true,
    author: game.user,
    shape: {
      type: "r",
      width: 283,
      height: 107,
    },
  };

  const FLOOR_J = game.scenes.get("o3zbh5CXtTQiWKwZ");
  // Floor J Swamp
  //J15
  // 15 ft. up
  setupText(
    {
      text: "15 ft. up",
      x: 7050,
      y: 6159,
      shape: {
        width: 283,
        height: 107,
        type: "r",
      },
    },
    FLOOR_J
  );

  // 20 ft. up
  setupText(
    {
      text: "20 ft. up",
      x: 7069,
      y: 5100,
      shape: {
        width: 216,
        height: 103,
        type: "r",
      },
    },
    FLOOR_J
  );

  // 25 ft. up
  setupText(
    {
      text: "25 ft. up",
      x: 7191,
      y: 3759,
      shape: {
        width: 216,
        height: 103,
        type: "r",
      },
    },
    FLOOR_J
  );
}

async function setupText(data, scene) {
  const drawingData = {
    author: game.user,
    hidden: data.hidden ?? true,
    interface: data.interface ?? true,
    locked: data.locked ?? true,
    strokeWidth: data.strokeWidth ?? 0,
    text: data.text,
    x: data.x,
    y: data.y,
    shape: data.shape,
  };
  await DrawingDocument.create(drawingData, { parent: scene });
}

export async function createRotateTilesPuzzle() {
  const FLOOR_J = game.scenes.get("o3zbh5CXtTQiWKwZ");
  const levers = [
    {
      x: 7564,
      y: 6065,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["group_1", "pipe_2"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: false,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 100,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "SAQeitUId8CFAhlv",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "XODHzp5qdcOzgY4S",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:group_1,pipe_2",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> group_1,pipe_2',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "JaszD9XCRt8tcwmV",
            },
          ],
          files: [],
        },
      },
    },
    {
      x: 7416,
      y: 5914,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["pipe_1", "group_1"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: true,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 100,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "bCxnGA5l2ImnvhEd",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "IlBm1T421zUKrjxJ",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:pipe_1,group_1",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> pipe_1,group_1',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "6dRJGvqgkbeGIc5M",
            },
          ],
          files: [],
        },
      },
    },
    {
      x: 7566,
      y: 4867,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["group_2", "pipe_2"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: false,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 50,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "SAQeitUId8CFAhlv",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "XODHzp5qdcOzgY4S",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:group_2,pipe_2",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> group_2,pipe_2',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "JaszD9XCRt8tcwmV",
            },
          ],
          files: [],
        },
      },
    },
    {
      x: 7418,
      y: 4718,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["pipe_1", "group_2"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: false,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 50,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "SAQeitUId8CFAhlv",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "XODHzp5qdcOzgY4S",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:pipe_1,group_2",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> pipe_1,group_2',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "JaszD9XCRt8tcwmV",
            },
          ],
          files: [],
        },
      },
    },
    {
      x: 7565,
      y: 3964,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["pipe_2", "group_3"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: false,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 50,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "SAQeitUId8CFAhlv",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "XODHzp5qdcOzgY4S",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:pipe_2,group_3",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> pipe_2,group_3',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "JaszD9XCRt8tcwmV",
            },
          ],
          files: [],
        },
      },
    },
    {
      x: 7718,
      y: 3891,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["pipe_3", "group_3"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: false,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 50,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "SAQeitUId8CFAhlv",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "XODHzp5qdcOzgY4S",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:pipe_3,group_3",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> pipe_3,group_3',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "JaszD9XCRt8tcwmV",
            },
          ],
          files: [],
        },
      },
    },
    {
      x: 7417,
      y: 3711,
      width: 167,
      height: 167,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/box_lever.webp",
      },
      flags: {
        tagger: {
          tags: ["pipe_1", "group_3"],
        },
        "monks-active-tiles": {
          name: "",
          active: true,
          record: false,
          restriction: "all",
          controlled: "all",
          trigger: ["", "rightclick"],
          allowpaused: false,
          usealpha: false,
          pointer: false,
          vision: false,
          pertoken: false,
          minrequired: 0,
          cooldown: 2,
          chance: 50,
          fileindex: 0,
          actions: [
            {
              action: "distance",
              data: {
                entity: {
                  id: "token",
                  name: "Triggering Token",
                },
                measure: "lte",
                distance: {
                  value: 1,
                  var: "sq",
                },
                from: "edge",
                continue: "within",
              },
              id: "SAQeitUId8CFAhlv",
            },
            {
              action: "playsound",
              data: {
                audiofile: "sounds/doors/industrial/open.ogg",
                audiofor: "everyone",
                volume: 1,
                loop: false,
                fade: 0,
                scenerestrict: false,
                prevent: false,
                delay: false,
                playlist: true,
              },
              id: "XODHzp5qdcOzgY4S",
            },
            {
              action: "rotation",
              data: {
                entity: {
                  id: "tagger:pipe_1,group_3",
                  match: "any",
                  scene: "_active",
                  name: '<i class="fas fa-tag fa-sm"></i> pipe_1,group_3',
                },
                rotation: "+ 90",
                duration: 2,
              },
              id: "JaszD9XCRt8tcwmV",
            },
          ],
          files: [],
        },
      },
    },
  ];

  const lever_base =
    "modules/abomination-vaults-addons/assets/assets/box_big_blank.webp";

  const lever_bg = [
    {
      x: 7330,
      y: 5867,
      width: 494,
      height: 440,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/j16_level_bg_1.webp",
      },
    },
    {
      x: 7346,
      y: 4681,
      width: 518,
      height: 483,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/j16_level_bg_2.png",
      },
    },
    {
      x: 7382,
      y: 3707,
      width: 553,
      height: 445,
      texture: {
        src: "modules/abomination-vaults-addons/assets/assets/j16_level_bg_3.png",
      },
    },
  ];

  //Lever BG
  for (const tile of lever_bg) {
    createTile({ ...tile, locked: true, sort: 1 }, FLOOR_J);
  }
  //Lever Base
  for (const tile of levers) {
    createTile(
      {
        ...tile,
        locked: true,
        sort: 2,
        texture: {
          src: lever_base,
        },
        flags: undefined,
      },
      FLOOR_J
    );
  }

  //Lever
  for (const tile of levers) {
    createTile(
      {
        ...tile,
        locked: true,
        sort: 3,
      },
      FLOOR_J
    );
  }

  ui.notifications.notify("Lever Puzzle on Floor J in room J16 has been added");
}

async function createTile(data, scene) {
  const tileData = {
    author: game.user,
    locked: true,
    ...data,
  };
  await TileDocument.create(tileData, { parent: scene });
}
