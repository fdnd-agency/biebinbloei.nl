import * as server from '../entries/pages/stekjes_overzicht/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stekjes_overzicht/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/stekjes_overzicht/+page.server.js";
export const imports = ["_app/immutable/nodes/8.28d7aec7.js","_app/immutable/chunks/scheduler.b3201d0c.js","_app/immutable/chunks/index.12f54fa1.js","_app/immutable/chunks/TheMaking4.svelte_svelte_type_style_lang.7014530c.js","_app/immutable/chunks/MobileMenu.962e516a.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Location.svelte_svelte_type_style_lang.c352f193.js","_app/immutable/chunks/vectorplant.9c23bb20.js"];
export const stylesheets = ["_app/immutable/assets/8.0908c524.css","_app/immutable/assets/TheMaking4.cefca861.css","_app/immutable/assets/MobileMenu.35b5299f.css","_app/immutable/assets/Location.f3244557.css"];
export const fonts = [];
