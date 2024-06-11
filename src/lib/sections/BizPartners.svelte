<script>
  import UsFlag from "./../icons/UsFlag.svelte"
  import TulsaFlag from "./../icons/TulsaFlag.svelte"
  import { onMount } from "svelte"
  import SubHeading from "$lib/components/SubHeading.svelte"
  let leftLax, rightLax

  onMount(async () => {
    // Parallax Library
    const { default: parallaxMe } = await import("simple-parallax-js")
    const speed = 5

    new parallaxMe(leftLax, {
      orientation: "left", // up - right - down - left - up left - up right - down left - down right
      scale: speed, // need to be above 1
      overflow: true,
      delay: 0, // in seconds
      transition: "", // any CSS transition
      customContainer: "",
      customWrapper: "",
      maxTransition: 0, // it should be a percentage between 1 and 99
    })

    new parallaxMe(rightLax, {
      orientation: "right", // up - right - down - left - up left - up right - down left - down right
      scale: speed, // need to be above 1
      overflow: true,
      delay: 0, // in seconds
      transition: "", // any CSS transition
      customContainer: "",
      customWrapper: "",
      maxTransition: 0, // it should be a percentage between 1 and 99
    })
  })
</script>

<section id="partners">
  <SubHeading text="trusted by agencies and businesses" version="blue" />

  <div class="row" bind:this={leftLax}>
    <div class="item">ink bros custom apparel</div>
    <div class="item">
      <TulsaFlag />
    </div>
    <div class="item">jefes mexican restaurant</div>
  </div>

  <div class="row" bind:this={rightLax}>
    <div class="item">sesame communications</div>
    <div class="item">
      <UsFlag />
    </div>
    <div class="item" style="--index: 4">the recyclement</div>
  </div>
</section>
