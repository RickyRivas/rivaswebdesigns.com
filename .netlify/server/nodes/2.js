import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.skGKlRvx.js","_app/immutable/chunks/scheduler.CzFAJfHp.js","_app/immutable/chunks/index.ihCg-pK8.js","_app/immutable/chunks/forms.URTU2NU9.js","_app/immutable/chunks/entry.CDngjC46.js","_app/immutable/chunks/SEO.D2wbkodA.js","_app/immutable/chunks/stores.C2EayGlm.js","_app/immutable/chunks/config.gYU2Ydat.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
export const stylesheets = [];
export const fonts = [];
