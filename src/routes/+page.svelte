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
    <h1>Small Business Web Development & Design</h1>
    <p class="subheading">
      We are a Tulsa Web Design agency that provides custom-coded, professionally designed websites
      that deliver premium results. No WordPress or Page-builders.
    </p>
    <a href="/" class="btn">Read the docs</a>
    <div class="video-wrapper">
      <video id="herovid" preload="none" autoplay loop muted playsinline poster="">
        <source type="video/mp4" src="/video/hero-video.mp4" />
      </video>
    </div>
  </section>

  <BizPartners />

  <HomeServices />

  <section id="img-right">
    <div class="container">
      <div class="mod">
        <h2>Websites that attract the right clients and increase revenue.</h2>
        <p>
          We use web conversion funnels and the latest design trends to turn your website browsers
          into paying customers. Our years of experience in the web development industry allow us to
          deliver top-notch websites that look great and function on any device from phones to
          desktops.
        </p>
        <p>
          Our standard 5-page website package is $150 per month. Our website subscription includes
          24/7 customer service with your personal developer, on-page search engine optimization
          (SEO), analytics, Google business profile optimization, lifetime updates, and more. We do
          everything for you so that you can focus on your business. Nothing beats the peace of mind
          of knowing that your web needs are always taken care of.
        </p>
        <a href="/" class="btn">Free Consultation</a>
      </div>

      <img
        class="decor"
        src="/laptop.svg"
        alt="Laptop"
        width="838"
        height="470"
        loading="lazy"
        decoding="async"
        fetchpriority="low" />
    </div>
  </section>
</main>
