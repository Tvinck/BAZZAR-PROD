// Соло-игра: вся логика в index.html. Этот модуль — обязательный стаб для платформы.
export const meta = { game: "retro-90s-shop", minPlayers: 1, maxPlayers: 1 };
export function setup() { return {}; }
export function validateAction() { return { ok: true }; }
export function applyAction(state) { return state; }
export function isGameOver() { return { over: false }; }
export function viewFor(state) { return state; }
