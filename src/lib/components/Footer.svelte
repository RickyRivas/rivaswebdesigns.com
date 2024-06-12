<script>
  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import Logo from "$lib/LogoVector.svelte"
  import SocialMedia from "./SocialMedia.svelte"
  import Copyright from "$lib/Copyright.svelte"
</script>

<footer>
  <div class="container">
    <!-- TOP -->
    <a href="mailto:{business.email}" class="email">{business.email}</a>

    <!-- MID -->
    <div class="mid">
      <div class="item">
        <a class="logo" href="/">
          <Logo />
        </a>
        <p>
          Modern, hand-coded, and blazing fast websites that deliver premium results for an
          affordable price.
        </p>
        <a href="/" class="btn">Contact us</a>
      </div>
      <div class="item">
        <h2>Menu</h2>
        <ul>
          <!-- pages controled by site config-->
          <li class="link">
            <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
          </li>
          {#each business.interiorPages as { name, path }}
            <li class="link">
              <a href={path} class:active={$page.url.pathname === path}>{name}</a>
            </li>
          {/each}
          {#if business.includeBlog}
            <li class="link">
              <a
                href="/blog"
                class:active={$page.url.pathname === "/blog" ||
                  $page.url.pathname.startsWith("/blog")}>Blog</a>
            </li>
          {/if}
        </ul>
      </div>
      <div class="item">
        <h2>Socials</h2>
        <ul>
          {#each Object.entries(business.socials) as [key, value]}
            {#if value !== "/"}
              <li>
                <a href="/{value}" target="_blank">
                  <span class="screenreader">follow us on</span>
                  {key}</a>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    </div>

    <div class="credit">
      <div class="copyright">
        <Copyright />
      </div>
      <p>Based in Tulsa, Oklahoma</p>
    </div>
  </div>
</footer>
