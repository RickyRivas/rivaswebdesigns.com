import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { S as SubNavigation } from "../../../chunks/SubNavigation.js";
import { b as business } from "../../../chunks/config.js";
import { p as page } from "../../../chunks/stores.js";
import { S as SEO } from "../../../chunks/SEO.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const thisPage = business.interiorPages.find((p) => p.path === $page.route.id);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: thisPage?.title,
      description: thisPage?.description,
      imageURL: thisPage?.imageURL,
      canonical: $page.url.href,
      siteName: business.name,
      index: true,
      twitter: true,
      openGraph: true,
      schemaOrg: false,
      logo: "",
      author: "",
      name: ""
    },
    {},
    {}
  )} ${validate_component(SubNavigation, "SubNavigation").$$render($$result, { pageTitle: thisPage?.title }, {}, {})} <main data-svelte-h="svelte-168w4dz"><h1>services</h1></main>`;
});
export {
  Page as default
};
