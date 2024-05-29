import { c as create_ssr_component, s as subscribe, e as escape, d as each, a as add_attribute, f as add_classes, n as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { p as pages, e as email, b as phone, c as companyName, s as services } from "../../chunks/config.js";
import { p as page } from "../../chunks/stores.js";
const global = "";
const nav = "";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return ` <nav class="${[escape("", true), ""].join(" ").trim()}"><div class="container"> <a href="/" class="logo" data-svelte-h="svelte-wmeh3o"><svg width="148" height="178" viewBox="0 0 148 178" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Svelte Logo</title><path d="M138.234 23.4733C121.76 -0.104537 89.2235 -7.09314 65.6996 7.89466L24.3936 34.2271C18.8106 37.7373 14.0216 42.3741 10.3329 47.8409C6.64416 53.3077 4.13695 59.4841 2.97158 65.9752C1.00129 76.9074 2.73374 88.1844 7.89465 98.0211C4.35771 103.386 1.94525 109.412 0.803081 115.735C-0.373506 122.356 -0.216258 129.146 1.2656 135.705C2.74746 142.265 5.52411 148.462 9.43271 153.935C25.9063 177.516 58.4448 184.506 81.9657 169.513L123.281 143.181C128.863 139.67 133.65 135.033 137.337 129.566C141.024 124.099 143.53 117.923 144.694 111.433C146.667 100.502 144.939 89.2242 139.783 79.3853C143.318 74.0206 145.729 67.9953 146.87 61.673C148.048 55.052 147.892 48.2624 146.41 41.7027C144.928 35.1429 142.151 28.9452 138.242 23.4733" fill="#FF3E00"></path><path d="M61.6635 156.154C55.1618 157.844 48.298 157.498 41.999 155.163C35.7001 152.828 30.2693 148.617 26.4401 143.097C24.09 139.807 22.4204 136.08 21.5294 132.136C20.6383 128.192 20.5436 124.11 21.2509 120.129C21.4903 118.822 21.8201 117.533 22.2378 116.272L23.0155 113.896L25.1333 115.45C30.0198 119.043 35.4839 121.775 41.2901 123.528L42.825 123.994L42.684 125.527C42.4976 127.706 43.0885 129.88 44.352 131.665C45.505 133.329 47.1411 134.599 49.0391 135.303C50.9372 136.007 53.0056 136.111 54.9648 135.601C55.8611 135.363 56.7158 134.989 57.4992 134.493L98.8131 108.157C99.8242 107.521 100.692 106.681 101.36 105.69C102.028 104.7 102.483 103.581 102.695 102.406C102.907 101.205 102.878 99.9751 102.609 98.7863C102.341 97.5976 101.838 96.4743 101.13 95.4819C99.9773 93.8181 98.3413 92.5482 96.4434 91.8437C94.5455 91.1392 92.4772 91.0341 90.5177 91.5425C89.6214 91.781 88.7667 92.1549 87.9833 92.6513L72.2177 102.702C69.6232 104.35 66.7922 105.593 63.8225 106.386C57.3208 108.076 50.4569 107.731 44.1579 105.396C37.8589 103.061 32.4282 98.8491 28.5991 93.3293C26.2483 90.0393 24.5782 86.313 23.6869 82.3689C22.7955 78.4248 22.7008 74.3424 23.4083 70.3613C24.1104 66.4581 25.6194 62.7444 27.8388 59.4577C30.0582 56.171 32.9392 53.3837 36.2974 51.2741L77.616 24.9432C80.2099 23.2926 83.041 22.0485 86.0112 21.2541C92.5129 19.5641 99.3767 19.9099 105.676 22.2448C111.975 24.5798 117.405 28.7914 121.235 34.311C123.585 37.6012 125.255 41.3276 126.146 45.2716C127.038 49.2156 127.132 53.2978 126.425 57.279C126.184 58.5857 125.854 59.8743 125.437 61.1361L124.659 63.5121L122.543 61.9613C117.657 58.368 112.193 55.6359 106.386 53.8829L104.85 53.4172L104.992 51.8839C105.178 49.7039 104.588 47.5283 103.326 45.7412C102.173 44.0774 100.537 42.8077 98.6386 42.1038C96.7406 41.3998 94.6723 41.2955 92.7131 41.8049C91.8167 42.0433 90.9621 42.4172 90.1787 42.9137L48.8537 69.2509C47.8428 69.8868 46.9757 70.7267 46.3077 71.7167C45.6398 72.7068 45.1857 73.8253 44.9745 75.0008C44.7616 76.201 44.79 77.4316 45.0582 78.6207C45.3263 79.8098 45.8289 80.9334 46.5363 81.9261C47.6897 83.5897 49.3257 84.8595 51.2235 85.5639C53.1213 86.2684 55.1896 86.3736 57.1491 85.8655C58.0453 85.6265 58.8998 85.2527 59.6835 84.7567L75.4475 74.7109C78.0409 73.0597 80.8722 71.816 83.8427 71.0234C90.3442 69.3332 97.2078 69.679 103.507 72.014C109.805 74.3489 115.236 78.5607 119.065 84.0803C121.415 87.3703 123.085 91.0966 123.977 95.0407C124.868 98.9848 124.963 103.067 124.255 107.048C123.555 110.951 122.047 114.666 119.83 117.953C117.613 121.241 114.734 124.03 111.377 126.142L70.0587 152.465C67.465 154.116 64.6338 155.36 61.6635 156.154Z" fill="white"></path></svg></a>  <ul class="${["nav-links", ""].join(" ").trim()}">${each(pages, ({ name, path }) => {
    return `<li class="nav-link"><a${add_attribute("href", path, 0)}${add_classes(($page.url.pathname === path ? "active" : "").trim())}>${escape(name)}</a> </li>`;
  })} <li class=""><a href="/contact" class="btn" data-svelte-h="svelte-1ksk6cc">Learn More</a></li></ul>  <button class="${["toggle", ""].join(" ").trim()}" aria-label="Toggle" data-svelte-h="svelte-18fxit1"><span></span> <span></span> <span></span></button></div></nav>`;
});
const footer = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<footer><div class="container"><div class="item" data-svelte-h="svelte-1yasp7p"><a href="/" class="logo"><svg width="148" height="178" viewBox="0 0 148 178" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Svelte Logo</title><path d="M138.234 23.4733C121.76 -0.104537 89.2235 -7.09314 65.6996 7.89466L24.3936 34.2271C18.8106 37.7373 14.0216 42.3741 10.3329 47.8409C6.64416 53.3077 4.13695 59.4841 2.97158 65.9752C1.00129 76.9074 2.73374 88.1844 7.89465 98.0211C4.35771 103.386 1.94525 109.412 0.803081 115.735C-0.373506 122.356 -0.216258 129.146 1.2656 135.705C2.74746 142.265 5.52411 148.462 9.43271 153.935C25.9063 177.516 58.4448 184.506 81.9657 169.513L123.281 143.181C128.863 139.67 133.65 135.033 137.337 129.566C141.024 124.099 143.53 117.923 144.694 111.433C146.667 100.502 144.939 89.2242 139.783 79.3853C143.318 74.0206 145.729 67.9953 146.87 61.673C148.048 55.052 147.892 48.2624 146.41 41.7027C144.928 35.1429 142.151 28.9452 138.242 23.4733" fill="#FF3E00"></path><path d="M61.6635 156.154C55.1618 157.844 48.298 157.498 41.999 155.163C35.7001 152.828 30.2693 148.617 26.4401 143.097C24.09 139.807 22.4204 136.08 21.5294 132.136C20.6383 128.192 20.5436 124.11 21.2509 120.129C21.4903 118.822 21.8201 117.533 22.2378 116.272L23.0155 113.896L25.1333 115.45C30.0198 119.043 35.4839 121.775 41.2901 123.528L42.825 123.994L42.684 125.527C42.4976 127.706 43.0885 129.88 44.352 131.665C45.505 133.329 47.1411 134.599 49.0391 135.303C50.9372 136.007 53.0056 136.111 54.9648 135.601C55.8611 135.363 56.7158 134.989 57.4992 134.493L98.8131 108.157C99.8242 107.521 100.692 106.681 101.36 105.69C102.028 104.7 102.483 103.581 102.695 102.406C102.907 101.205 102.878 99.9751 102.609 98.7863C102.341 97.5976 101.838 96.4743 101.13 95.4819C99.9773 93.8181 98.3413 92.5482 96.4434 91.8437C94.5455 91.1392 92.4772 91.0341 90.5177 91.5425C89.6214 91.781 88.7667 92.1549 87.9833 92.6513L72.2177 102.702C69.6232 104.35 66.7922 105.593 63.8225 106.386C57.3208 108.076 50.4569 107.731 44.1579 105.396C37.8589 103.061 32.4282 98.8491 28.5991 93.3293C26.2483 90.0393 24.5782 86.313 23.6869 82.3689C22.7955 78.4248 22.7008 74.3424 23.4083 70.3613C24.1104 66.4581 25.6194 62.7444 27.8388 59.4577C30.0582 56.171 32.9392 53.3837 36.2974 51.2741L77.616 24.9432C80.2099 23.2926 83.041 22.0485 86.0112 21.2541C92.5129 19.5641 99.3767 19.9099 105.676 22.2448C111.975 24.5798 117.405 28.7914 121.235 34.311C123.585 37.6012 125.255 41.3276 126.146 45.2716C127.038 49.2156 127.132 53.2978 126.425 57.279C126.184 58.5857 125.854 59.8743 125.437 61.1361L124.659 63.5121L122.543 61.9613C117.657 58.368 112.193 55.6359 106.386 53.8829L104.85 53.4172L104.992 51.8839C105.178 49.7039 104.588 47.5283 103.326 45.7412C102.173 44.0774 100.537 42.8077 98.6386 42.1038C96.7406 41.3998 94.6723 41.2955 92.7131 41.8049C91.8167 42.0433 90.9621 42.4172 90.1787 42.9137L48.8537 69.2509C47.8428 69.8868 46.9757 70.7267 46.3077 71.7167C45.6398 72.7068 45.1857 73.8253 44.9745 75.0008C44.7616 76.201 44.79 77.4316 45.0582 78.6207C45.3263 79.8098 45.8289 80.9334 46.5363 81.9261C47.6897 83.5897 49.3257 84.8595 51.2235 85.5639C53.1213 86.2684 55.1896 86.3736 57.1491 85.8655C58.0453 85.6265 58.8998 85.2527 59.6835 84.7567L75.4475 74.7109C78.0409 73.0597 80.8722 71.816 83.8427 71.0234C90.3442 69.3332 97.2078 69.679 103.507 72.014C109.805 74.3489 115.236 78.5607 119.065 84.0803C121.415 87.3703 123.085 91.0966 123.977 95.0407C124.868 98.9848 124.963 103.067 124.255 107.048C123.555 110.951 122.047 114.666 119.83 117.953C117.613 121.241 114.734 124.03 111.377 126.142L70.0587 152.465C67.465 154.116 64.6338 155.36 61.6635 156.154Z" fill="white"></path></svg> <p class="slogan">INK Bros is Tulsa&#39;s choice for custom apparel services, specializing in top-notch screen
          printing, embroidery, and more to bring your unique designs to life.</p></a></div> <div class="wrap"> <div class="item"><h2 data-svelte-h="svelte-13pb927">Sitemap</h2> <ul> ${each(pages, ({ name, path }) => {
    return `<li class="link"><a${add_attribute("href", path, 0)}${add_classes(($page.url.pathname === path ? "active" : "").trim())}>${escape(name)}</a> </li>`;
  })}</ul></div>  <div class="item"><h2 data-svelte-h="svelte-iwvpsi">Services</h2> <ul>${each(services, (service) => {
    return `<li><a href="/services">${escape(service.name)}</a> </li>`;
  })}</ul></div>  <div class="item"><h2 data-svelte-h="svelte-18h9zxm">Contact</h2> <ul><li><a class="mail" href="${"mailto:" + escape(email, true)}">Email: ${escape(email)}</a></li> <li><a href="${"tel:" + escape(phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", ""), true)}"><span data-svelte-h="svelte-cwv3kw">Phone: </span>${escape(phone)}</a></li> <li data-svelte-h="svelte-9yarkr"><div class="socials"><a href="https://www.facebook.com/profile.php?id=100091290063493" class="icon fb" target="_blank"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><path d="M14.4361 25V13.5972H18.262L18.836 9.15195H14.4361V6.31434C14.4361 5.02775 14.7919 4.15095 16.639 4.15095L18.9909 4.14999V0.174037C18.5842 0.121182 17.188 0 15.563 0C12.1698 0 9.84668 2.07121 9.84668 5.87409V9.15195H6.00916V13.5972H9.84668V25H14.4361Z" fill="currentcolor"></path></svg> <span class="screenreader">Follow us on Facebook</span></a> <a href="https://www.instagram.com/ink_bros_custom_apparel/" class="icon" target="_blank"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.9756 7.35007C24.917 6.02172 24.7022 5.1085 24.3945 4.31717C24.077 3.4772 23.5887 2.72518 22.9488 2.10002C22.3237 1.46513 21.5667 0.971793 20.7364 0.659308C19.9405 0.351593 19.0321 0.136784 17.7037 0.0782166C16.3655 0.0146895 15.9406 0 12.5464 0C9.15217 0 8.72732 0.0146895 7.39401 0.0732565C6.06567 0.131824 5.15244 0.346824 4.36131 0.654348C3.52115 0.971793 2.76913 1.46017 2.14397 2.10002C1.50908 2.72518 1.01593 3.48216 0.703255 4.3124C0.395539 5.1085 0.18073 6.01676 0.122163 7.34511C0.0586357 8.68338 0.0439453 9.10822 0.0439453 12.5024C0.0439453 15.8967 0.0586357 16.3215 0.117203 17.6548C0.17577 18.9832 0.39077 19.8964 0.698485 20.6877C1.01593 21.5277 1.50908 22.2797 2.14397 22.9049C2.76913 23.5398 3.52611 24.0331 4.35635 24.3456C5.15244 24.6533 6.06071 24.8681 7.38925 24.9267C8.72236 24.9854 9.1474 24.9999 12.5416 24.9999C15.9358 24.9999 16.3607 24.9854 17.694 24.9267C19.0223 24.8681 19.9356 24.6533 20.7267 24.3456C22.4068 23.696 23.7352 22.3677 24.3848 20.6877C24.6923 19.8916 24.9073 18.9832 24.9658 17.6548C25.0244 16.3215 25.0391 15.8967 25.0391 12.5024C25.0391 9.10822 25.0341 8.68338 24.9756 7.35007ZM22.7243 17.5571C22.6705 18.7781 22.4654 19.4374 22.2945 19.8769C21.8744 20.966 21.01 21.8304 19.9209 22.2505C19.4813 22.4214 18.8173 22.6265 17.6011 22.6801C16.2825 22.7389 15.887 22.7534 12.5513 22.7534C9.2157 22.7534 8.81527 22.7389 7.50142 22.6801C6.28048 22.6265 5.62117 22.4214 5.18163 22.2505C4.63965 22.0502 4.14631 21.7328 3.74588 21.3176C3.33076 20.9123 3.01331 20.4239 2.813 19.8819C2.64207 19.4424 2.43699 18.7781 2.38338 17.5621C2.32463 16.2435 2.31013 15.8478 2.31013 12.5122C2.31013 9.17652 2.32463 8.77609 2.38338 7.46243C2.43699 6.24149 2.64207 5.58218 2.813 5.14264C3.01331 4.60047 3.33076 4.10732 3.75084 3.7067C4.15604 3.29158 4.64442 2.97414 5.18659 2.77402C5.62613 2.60309 6.2904 2.39801 7.50638 2.34421C8.825 2.28564 9.22066 2.27095 12.5561 2.27095C15.8967 2.27095 16.2922 2.28564 17.606 2.34421C18.827 2.39801 19.4863 2.60309 19.9258 2.77402C20.4678 2.97414 20.9612 3.29158 21.3616 3.7067C21.7767 4.11209 22.0942 4.60047 22.2945 5.14264C22.4654 5.58218 22.6705 6.24626 22.7243 7.46243C22.7828 8.78105 22.7975 9.17652 22.7975 12.5122C22.7975 15.8478 22.7828 16.2385 22.7243 17.5571ZM12.5464 6.08029C9.00089 6.08029 6.12424 8.95675 6.12424 12.5024C6.12424 16.0481 9.00089 18.9246 12.5464 18.9246C16.0921 18.9246 18.9685 16.0481 18.9685 12.5024C18.9685 8.95675 16.0921 6.08029 12.5464 6.08029ZM12.5464 16.6683C10.2462 16.6683 8.3805 14.8028 8.3805 12.5024C8.3805 10.2021 10.2462 8.33655 12.5464 8.33655C14.8467 8.33655 16.7123 10.2021 16.7123 12.5024C16.7123 14.8028 14.8467 16.6683 12.5464 16.6683ZM19.2225 7.32565C20.0506 7.32565 20.7219 6.65432 20.7219 5.82637C20.7219 4.99823 20.0506 4.32709 19.2225 4.32709C18.3945 4.32709 17.7232 4.99823 17.7232 5.82637C17.7232 6.65432 18.3945 7.32565 19.2225 7.32565Z" fill="currentcolor"></path></svg> <span class="screenreader">Follow us on Instagram</span></a></div></li></ul></div></div></div> <p class="credit">Custom Coded &amp; Designed by <a href="https://www.rivaswebdesigns.com/" target="_blank" data-svelte-h="svelte-dvmu6x">Rivas Web Designs</a>
    | ${escape(companyName)} ©2023</p></footer>`;
});
const ToTop_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fixed.svelte-1c2gtcx.svelte-1c2gtcx{position:fixed;bottom:1em;right:1em;display:flex;flex-direction:column;z-index:500}.fixed.svelte-1c2gtcx button.svelte-1c2gtcx{font:inherit;border:0;background:var(--primary-color);width:2em;height:2em;display:flex;justify-content:center;align-items:center;transition:color 0.33s ease, background-color 0.33s ease, opacity 0.33s ease;border-radius:0.2em;color:#212121;opacity:1}.fixed.svelte-1c2gtcx button svg.svelte-1c2gtcx{width:1.25em;height:auto;display:block}.fixed.svelte-1c2gtcx button.svelte-1c2gtcx:hover{color:#fff;background-color:var(--secondary-color)}.fixed.svelte-1c2gtcx button.hide.svelte-1c2gtcx{opacity:0}",
  map: null
};
const ToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="fixed svelte-1c2gtcx"><button class="${escape(null_to_empty("hide"), true) + " svelte-1c2gtcx"}"><svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1c2gtcx"><path d="M12.5 0.907227L0 13.4072L2.94795 16.3551L12.5 6.80303L22.0521 16.3551L25 13.4072L12.5 0.907227Z" fill="currentcolor"></path></svg> <span class="screenreader" data-svelte-h="svelte-1ktqy1f">Back to top</span></button> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(ToTop, "ToTop").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};