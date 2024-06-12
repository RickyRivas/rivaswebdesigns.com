import * as universal from '../entries/pages/faq/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/faq/+page.js";
export const imports = ["_app/immutable/nodes/7.D_s0zxPm.js","_app/immutable/chunks/scheduler.CzFAJfHp.js","_app/immutable/chunks/index.ihCg-pK8.js","_app/immutable/chunks/SubNavigation.BTeMpYV5.js","_app/immutable/chunks/config.gYU2Ydat.js","_app/immutable/chunks/stores.C2EayGlm.js","_app/immutable/chunks/entry.CDngjC46.js","_app/immutable/chunks/SEO.D2wbkodA.js"];
export const stylesheets = ["_app/immutable/assets/SubNavigation.BlAn1WAA.css"];
export const fonts = [];
