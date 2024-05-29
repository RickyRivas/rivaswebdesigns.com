<script lang="ts">
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import LogoVector from "$lib/LogoVector.svelte"

  let isActive = false

  function toggleNav() {
    if (window.innerWidth > 1023) return
    isActive = !isActive
  }

  // add class to header when user scrolls 100px
  let y: any
</script>

<svelte:window bind:scrollY={y} />

<nav id="mainnav" class:active={isActive} class={y >= 100 ? "scroll" : ""}>
  <div class="container">
    <!-- Logo -->
    <a id="logo" href="/">
      <LogoVector />
    </a>

    <!-- Nav links -->
    <ul class="nav-links" class:active={isActive}>
      <li class="nav-link" class:active={$page.url.pathname === "/"}>
        <a href="/" on:click={toggleNav}>home</a>
      </li>
      {#each business.interiorPages as { name, path }}
        <li class="nav-link" class:active={$page.url.pathname.startsWith(path)}>
          <a href={path} on:click={toggleNav}>{name}</a>
        </li>
      {/each}
      {#if business.includeBlog}
        <li
          class="nav-link"
          class:active={$page.url.pathname === "/blog" || $page.url.pathname.startsWith("/blog")}>
          <a href="/blog" on:click={toggleNav}>Blog</a>
        </li>
      {/if}
    </ul>

    <!-- Toggle -->
    <button id="nav-toggle" aria-label="Toggle" class:active={isActive} on:click={toggleNav}>
      <span />
      <span />
      <span />
    </button>
  </div>
</nav>
