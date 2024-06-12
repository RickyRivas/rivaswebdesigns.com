import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SEO } from "../../../../chunks/SEO.js";
import { S as SubNavigation } from "../../../../chunks/SubNavigation.js";
import { b as business } from "../../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { author, date, description, imageAlt, tags, thumbnail, title } = data.postData;
  const { path, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SubNavigation, "SubNavigation").$$render($$result, { pageTitle: title }, {}, {})} ${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title,
      description,
      author,
      siteName: business.name,
      canonical: `${business.canonical}/${path}`,
      imageURL: thumbnail,
      index: true,
      twitter: true,
      openGraph: true,
      schemaOrg: false
    },
    {},
    {}
  )} <main><section id="blog-post"><div class="container"><div id="content">${validate_component(Content, "Content").$$render($$result, {}, {}, {})}</div></div></section></main>`;
});
export {
  Page as default
};
