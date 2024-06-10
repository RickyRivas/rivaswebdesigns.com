<script>
  import "./styles.less"

  import Navigation from "$lib/components/Navigation.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import ToTop from "$lib/components/ToTop.svelte"
  import FixedCta from "$lib/FixedCta.svelte"
</script>

<Navigation />
<slot />
<Footer />
<FixedCta />
