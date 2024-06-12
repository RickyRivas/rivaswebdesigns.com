import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.BvSdhUAK.js","_app/immutable/chunks/scheduler.CzFAJfHp.js","_app/immutable/chunks/index.ihCg-pK8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/SubNavigation.BTeMpYV5.js","_app/immutable/chunks/SEO.D2wbkodA.js","_app/immutable/chunks/stores.C2EayGlm.js","_app/immutable/chunks/entry.CDngjC46.js","_app/immutable/chunks/config.gYU2Ydat.js"];
export const stylesheets = ["_app/immutable/assets/SubNavigation.BlAn1WAA.css"];
export const fonts = [];
