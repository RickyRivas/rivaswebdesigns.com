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
      <p>Please enter your information and we'll get in touch asap.</p>
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
      <div class="video-container">
        <svg
          class="ipad-vector"
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="1298"
          height="857"
          viewBox="0 0 1298 857">
          <path
            fill="url(#a)"
            d="M1239.02 0H58.988C26.408 0 0 26.418 0 59.01v738.98C0 830.582 26.408 857 58.988 857H1239.01c32.58 0 58.99-26.418 58.99-59.01V59.01C1298 26.418 1271.59 0 1239.01 0h.01Zm26.54 797.996c0 14.641-11.91 26.548-26.54 26.548H58.988c-14.635 0-26.538-11.907-26.538-26.548V59.01c0-14.64 11.903-26.548 26.538-26.548H1239.01c14.64 0 26.54 11.908 26.54 26.548v738.98l.01.006Z" />
          <defs>
            <linearGradient
              id="a"
              x1="1170.4"
              x2="127.215"
              y1="950.096"
              y2="-92.697"
              gradientUnits="userSpaceOnUse">
              <stop />
              <stop offset=".58" stop-color="#040101" />
              <stop offset="1" stop-color="#0D0505" />
            </linearGradient>
          </defs>
        </svg>

        <div class="video-wrap">
          <video id="herovid" preload="none" autoplay loop muted playsinline poster="">
            <source type="video/mp4" src="/video/hero-video.mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>

  <BizPartners />

  <HomeServices />

  <section id="home-feature">
    <SubHeading text="Make more money" version="grey" />
    <div class="container">
      <div class="mod">
        <h2>Improving online presences for small businesses since 2021</h2>
        <p>
          Your goals are our goals. We use web conversion funnels and the latest design trends to
          turn your website browsers into paying customers. Our years of experience in the web
          development industry allow us to deliver top-notch websites that look great and function
          on any device from phones to desktops.
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
              Elevate your business by reaching your target audience, converting them into customers
              through effective SEO strategies, engaging content, precise PPC campaigns, and lead
              management that yields high-quality leads.
            </p>
          </div>
        </a>
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Grow your brand</h3>
            <p>
              We offer end-to-end marketing services that allow you to focus on your core business
              while we manage all your marketing needs. Our comprehensive approach helps your brand
              gain visibility and influence in your industry.
            </p>
          </div>
        </a>
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Improve your reputation</h3>
            <p>
              Having a good online reputation is crucial as 90% of people rely on service reviews.
              We can help you by increasing your reviews, registering in relevant directories, and
              monitoring your online reputation.
            </p>
          </div>
        </a>
        <a href="/" class="item">
          <div class="icon"></div>
          <div class="inner-mod">
            <h3>Increase Revenue</h3>
            <p>
              Our ROI-oriented approach, lead-generating content, and conversion strategies can help
              your business achieve its goals and increase revenue every year.
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <HomeAbout />
</main>
