import * as universal from '../entries/pages/blog/_post_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_post_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[post]/+page.js";
export const imports = ["_app/immutable/nodes/5.-P5MidBi.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.CDngjC46.js","_app/immutable/chunks/scheduler.CzFAJfHp.js","_app/immutable/chunks/index.ihCg-pK8.js","_app/immutable/chunks/SEO.D2wbkodA.js","_app/immutable/chunks/stores.C2EayGlm.js","_app/immutable/chunks/SubNavigation.BTeMpYV5.js","_app/immutable/chunks/config.gYU2Ydat.js"];
export const stylesheets = ["_app/immutable/assets/SubNavigation.BlAn1WAA.css"];
export const fonts = [];
