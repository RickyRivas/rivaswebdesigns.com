<script>
  import LeftShape from "$lib/icons/LeftShape.svelte"
  import RightShape from "$lib/icons/RightShape.svelte"
  export let text,
    version = "white"
</script>

<span class="subheading {version}">
  <LeftShape />
  {text}
  <RightShape />
</span>
