<script>
  // components
  import SEO from "./../lib/components/SEO.svelte"

  // stores
  import { business } from "$lib/config"
  import { onMount } from "svelte"
  import HomeServices from "$lib/sections/HomeServices.svelte"
  import BizPartners from "$lib/sections/BizPartners.svelte"

  onMount(() => {
    // Netlify blog invite redirect
    if (location.href.indexOf("#invite_token") != -1) {
      var urlSplit = document.URL.split("#")
      window.location = `/admin/#${urlSplit[1]}`
    }
  })
</script>

<SEO
  title="{business.name} | {business.industry} | {business.cityAndState}"
  description={business.homepage.metaDescription}
  canonical={business.canonical}
  siteName={business.name}
  imageURL={business.ogImage}
  index={true}
  twitter={true}
  openGraph={true}
  schemaOrg={false}
  logo=""
  author=""
  name="" />

<main>
  <section id="landing">
    <div class="content">
      <h1>Small Business Web Development & Design</h1>
      <p class="subheading">
        We are a Tulsa Web Design agency that provides custom-coded, professionally designed
        websites that deliver premium results. No WordPress or Page-builders.
      </p>
      <a href="/" class="btn">Read the docs</a>
    </div>
  </section>

  <BizPartners />

  <HomeServices />
</main>
