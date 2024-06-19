<script>
  // components
  import SEO from "./../lib/components/SEO.svelte"
  import { register } from "swiper/element/bundle"
  import { addClassInView, removeClassInView } from "$lib/utils"

  // stores
  import { business } from "$lib/config"
  import { onMount } from "svelte"
  import HomeServices from "$lib/sections/HomeServices.svelte"
  import BizPartners from "$lib/sections/BizPartners.svelte"
  import HomeAbout from "$lib/sections/HomeAbout.svelte"
  import { enhance } from "$app/forms"
  import SubHeading from "$lib/components/SubHeading.svelte"
  import { fade } from "svelte/transition"
  import AnimateCounter from "$lib/components/AnimateCounter.svelte"

  let email
  let showModal = false
  let message
  let featureSection

  let startTimer

  // swiper
  // register swiper web components
  register()
  let phoneSwiper, laptopSwiper, devicesSwiperControlLeft, devicesSwiperControlRight
  const laptopSwiperSlides = [
    { src: "/portfolio/inkbro-slide.jpg", width: "660", height: "435", alt: "" },
    { src: "/portfolio/inkbro-slide.jpg", width: "660", height: "435", alt: "" },
    { src: "/portfolio/inkbro-slide.jpg", width: "660", height: "435", alt: "" },
  ]

  const phoneSwiperSlides = [
    { src: "/portfolio/inkbro-phone.jpg", width: "180", height: "284", alt: "" },
    { src: "/portfolio/inkbro-phone.jpg", width: "180", height: "284", alt: "" },
    { src: "/portfolio/inkbro-phone.jpg", width: "180", height: "284", alt: "" },
  ]

  onMount(() => {
    // Netlify blog invite redirect
    if (location.href.indexOf("#invite_token") != -1) {
      var urlSplit = document.URL.split("#")
      window.location = `/admin/#${urlSplit[1]}`
    }

    // initialize on mount so swiper web component can be able to query select the controls
    laptopSwiper.initialize()
    phoneSwiper.initialize()

    // sync slideshows
    laptopSwiper.swiper.controller.control = phoneSwiper.swiper
    phoneSwiper.swiper.controller.control = laptopSwiper.swiper

    addClassInView(document.querySelector("#why"), "active", ".5")
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
      <!-- Custom sliders -->
      <div class="devices-sliders">
        <!-- laptop -->
        <div class="laptop">
          <!-- Img -->
          <img
            class="device-vector"
            src="/laptop.svg"
            alt="Laptop"
            width="838"
            height="470"
            loading="lazy"
            decoding="async"
            fetchpriority="low" />

          <!-- Swiper -->
          <swiper-container
            bind:this={laptopSwiper}
            init="false"
            class="laptop-swiper"
            loop="true"
            navigation={{ prevEl: ".devices-swiper-prev", nextEl: ".devices-swiper-next" }}>
            {#each laptopSwiperSlides as { src, width, height, alt }}
              <swiper-slide>
                <img {src} {alt} {width} {height} decoding="async" fetchpriority="high" />
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>

        <!-- phone -->
        <div class="phone">
          <svg
            class="device-vector"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="284"
            fill="none"
            viewBox="0 0 150 284">
            <path
              fill="#333"
              fill-rule="evenodd"
              d="M19.195 0h111.611C141.406 0 150 8.594 150 19.195v245.569c0 10.601-8.594 19.194-19.194 19.194H19.194C8.595 283.958 0 275.365 0 264.764V19.194C0 8.595 8.594 0 19.195 0Zm122.637 264.764V19.2c0-6.088-4.944-11.032-11.032-11.032H19.2c-6.088 0-11.032 4.944-11.032 11.032v245.558c0 6.088 4.944 11.032 11.032 11.032h111.606c6.082 0 11.026-4.938 11.026-11.026Z"
              clip-rule="evenodd" />
          </svg>
          <swiper-container bind:this={phoneSwiper} init="false" class=".phone-swiper" loop="true">
            {#each phoneSwiperSlides as { src, width, height, alt }}
              <swiper-slide>
                <img {src} {alt} {width} {height} decoding="async" fetchpriority="high" />
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>

        <!-- controls -->
        <div class="devices-swiper-controls">
          <button
            class="devices-swiper-prev"
            aria-label="previous slide"
            bind:this={devicesSwiperControlLeft}>
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 50 50">
              <path
                class="shape"
                fill="currentcolor"
                d="M31.32 25.39H21.042l3.654 3.654-1.098 1.116L18 24.562 23.598 19l1.098 1.116-3.672 3.654H31.32v1.62Z" />
              <path
                class="show"
                stroke="currentcolor"
                d="M49.5 25c0 13.531-10.969 24.5-24.5 24.5S.5 38.531.5 25 11.469.5 25 .5 49.5 11.469 49.5 25Z" />
              <path
                class="draw"
                stroke="currentcolor"
                stroke-width="1.5px"
                d="M49.5 25c0 13.531-10.969 24.5-24.5 24.5S.5 38.531.5 25 11.469.5 25 .5 49.5 11.469 49.5 25Z" />
            </svg>
          </button>
          <button
            class="devices-swiper-next"
            aria-label="next slide"
            bind:this={devicesSwiperControlRight}>
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 50 50">
              <path
                class="shape"
                fill="currentcolor"
                d="M18 25.39h10.278l-3.654 3.654 1.098 1.116 5.598-5.598L25.722 19l-1.098 1.116 3.672 3.654H18v1.62Z" />
              <path
                class="show"
                stroke="currentcolor"
                d="M49.5 25c0 13.531-10.969 24.5-24.5 24.5S.5 38.531.5 25 11.469.5 25 .5 49.5 11.469 49.5 25Z" />
              <path
                class="draw"
                stroke-width="1.5px"
                stroke="currentcolor"
                d="M49.5 25c0 13.531-10.969 24.5-24.5 24.5S.5 38.531.5 25 11.469.5 25 .5 49.5 11.469 49.5 25Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <BizPartners />

  <HomeServices />

  <section id="home-feature" bind:this={featureSection}>
    <SubHeading text="Our Subscription" version="grey" />
    <div class="container">
      <div class="mod">
        <h2>Our complete Subscription Solution Designed for Small Businesses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nobis. Soluta laborum
          recusandae saepe at optio? Blanditiis totam repellat quis nisi consequatur, iure sit
          necessitatibus tempora consequuntur exercitationem quidem accusamus ratione illum debitis
          soluta ab voluptate. At consequatur ex dignissimos nesciunt dolores porro libero dicta
          natus eligendi, voluptates voluptas totam!
        </p>
      </div>

      <div class="items">
        <div class="item">
          <h3>5 pages with a contact form</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia deserunt, delectus non
            vero voluptatibus consequatur!
          </p>
        </div>
        <div class="item">
          <h3>SEO & Performance</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia deserunt, delectus non
            vero voluptatibus consequatur!
          </p>
        </div>
        <div class="item">
          <h3>hosting, unlimited edits, and 24/7 support</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia deserunt, delectus non
            vero voluptatibus consequatur!
          </p>
        </div>
        <div class="item">
          <h3>Zero limits to our designs. Dark mode included on all websites.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia deserunt, delectus non
            vero voluptatibus consequatur!
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="why">
    <SubHeading text="The big question" version="blue" />
    <div class="container">
      <div class="mod">
        <h2>Why should you choose us?</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ullam impedit adipisci
          vitae et labore dolore ipsam temporibus reiciendis! Eius omnis corrupti similique! Nisi
          eveniet perferendis fuga eligendi saepe deleniti blanditiis praesentium possimus laborum
          earum culpa doloremque, vero explicabo voluptate quidem asperiores facilis fugiat in?
          Deserunt numquam quas sit voluptas?
        </p>
        <a href="/" class="btn">contact us</a>
      </div>

      <div class="decor">
        <div class="item">
          <h3 class="topic">
            <span class="trait"> 3+</span>
            years <br /> experience
          </h3>
        </div>
        <div class="item">
          <h3 class="topic">
            <span class="trait"> 100%</span>
            customer <br /> satisfaction
          </h3>
        </div>
        <div class="item">
          <h3 class="topic">
            <span class="trait"> 175+</span>
            websites <br /> built
          </h3>
        </div>
        <div class="item">
          <h3 class="topic">
            <span class="trait"> 20+ </span>
            Satisfied <br /> Clients
          </h3>
        </div>
      </div>
    </div>
  </section>

  <HomeAbout />
</main>
