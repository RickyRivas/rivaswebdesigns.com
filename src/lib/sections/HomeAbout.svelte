<script>
  import LeftShape from "$lib/icons/LeftShape.svelte"
  import RightShape from "$lib/icons/RightShape.svelte"
</script>

<section id="home-about">
  <span class="subheading green">
    <LeftShape />
    meet the founder
    <RightShape />
  </span>
  <!-- <h2>About the founder</h2> -->
  <div class="container">
    <div class="decor">
      <img
        class="headshot"
        src="/rickyrivas.jpg"
        alt="Ricky Rivas"
        width="500"
        height="667"
        loading="lazy"
        decoding="async"
        fetchpriority="low" />
    </div>
    <div class="mod">
      <h3>Ricky Rivas</h3>
      <span class="title">Web Developer & Founder</span>
      <p>
        I'm a Web Developer based in Tulsa, Oklahoma. I've always been passionate about technology.
        I went to university for Business Administration after high school in 2017 but decided to
        learn how to build software on my own. I wrote my first line of code in early 2021. After a
        year of learning and building websites for friends and family, I started building websites
        professionally for a web agency in Seattle, Washington, and also for my own clients. Today,
        I've built (and still building) hundreds of websites and enjoy learning something new in the
        web development world every day.
      </p>
      <a href="/" class="btn">Learn more</a>
    </div>
  </div>
</section>
