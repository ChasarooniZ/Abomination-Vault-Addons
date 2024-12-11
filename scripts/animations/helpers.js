export function jb2aVersion() {
    return game.modules.get("jb2a_patreon")?.active ? 'patreon' : (game.modules.get("JB2A_DnD5e")?.active ? 'free' : 'none');
}