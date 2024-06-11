<script>
  // components
  import SEO from "./../lib/components/SEO.svelte"

  // stores
  import { business } from "$lib/config"
  import { onMount } from "svelte"
  import HomeServices from "$lib/sections/HomeServices.svelte"
  import BizPartners from "$lib/sections/BizPartners.svelte"
  import HomeAbout from "$lib/sections/HomeAbout.svelte"
  import { enhance } from "$app/forms"
  import SubHeading from "$lib/components/SubHeading.svelte"
  import { fade } from "svelte/transition"

  let email
  let showModal = false
  let message

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

{#if showModal}
  <div class="modal" transition:fade>
    <div class="container">
      <h2>We need a bit more info</h2>
      <form action="/" use:enhance method="POST">
        <div class="form-control">
          <label for="/">
            <input type="text" name="" placeholder="Name" id="" />
          </label>
        </div>
        <div class="form-control">
          <label for="/">
            <input type="email" name="" placeholder="Email" bind:value={email} id="" />
          </label>
        </div>
        <div class="form-control">
          <textarea
            bind:value={message}
            name="message"
            cols="20"
            rows="5"
            placeholder="Message"
            required></textarea>
        </div>
        <button class="btn">Submit</button>
      </form>
      <button
        class="btn close-modal"
        aria-label="close modal"
        on:click={() => {
          showModal = !showModal
        }}>
        x
      </button>
    </div>
  </div>
{/if}

<main>
  <section id="landing">
    <div class="container">
      <div class="section-header">
        <h1>Small Business Web Development & Design</h1>
        <p>
          We are a Tulsa Web Design agency that provides custom-coded, professionally designed
          websites that deliver premium results. No WordPress or Page-builders.
        </p>

        <div class="landing-form">
          <div class="form-control">
            <label for="">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                bind:value={email}
                required />
            </label>
          </div>
          <button
            class="btn"
            on:click={() => {
              showModal = !showModal
            }}>
            Submit</button>
        </div>
      </div>
      <div class="video-wrapper">
        <video id="herovid" preload="none" autoplay loop muted playsinline poster="">
          <source type="video/mp4" src="/video/hero-video.mp4" />
        </video>
      </div>
    </div>
  </section>

  <BizPartners />

  <HomeServices />

  <section id="home-feature">
    <SubHeading text="Why Choose Us" version="grey" />
    <div class="container">
      <div class="mod">
        <h2>Helping small businesses grow</h2>
        <p>
          We use web conversion funnels and the latest design trends to turn your website browsers
          into paying customers. Our years of experience in the web development industry allow us to
          deliver top-notch websites that look great and function on any device from phones to
          desktops.
        </p>
        <a href="/" class="btn">Free Consultation</a>
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

      <div class="benefits">
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Get more clients</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quasi aut? Quod magni
              ea deleniti!
            </p>
          </div>
        </a>
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Grow your brand</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quasi aut? Quod magni
              ea deleniti!
            </p>
          </div>
        </a>
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Improve your reputation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quasi aut? Quod magni
              ea deleniti!
            </p>
          </div>
        </a>
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Increase Revenue</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quasi aut? Quod magni
              ea deleniti!
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <HomeAbout />
</main>
