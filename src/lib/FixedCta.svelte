<a href="/contact" class="fixed-cta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
    <path
      id="textpath"
      fill="none"
      d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25Z" />
    <text text-anchor="start">
      <textPath xlink:href="#textpath">• &nbsp;&nbsp;Let's discuss a new project</textPath>
    </text>
  </svg>
</a>

<style lang="less">
  .fixed-cta {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
    font-size: 20px;
    bottom: 1em;
    right: 1em;
    width: (125/20em);
    height: (125/20em);
    border-radius: 50%;
    background: var(--primary)
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' viewBox='0 0 25 25'%3E%3Cpath fill='%23fff' d='M7.813 17.969a2.344 2.344 0 0 1 2.343 2.343v.782l3.54-2.657a2.352 2.352 0 0 1 1.406-.468h6.773c.43 0 .781-.352.781-.782V3.126a.783.783 0 0 0-.781-.781H3.125a.784.784 0 0 0-.781.781v14.063c0 .43.351.78.781.78h4.688Zm2.343 6.054-.01.01-.249.186-.835.625a.789.789 0 0 1-.82.073.769.769 0 0 1-.43-.698v-3.906H3.126A3.128 3.128 0 0 1 0 17.188V3.124A3.128 3.128 0 0 1 3.125 0h18.75A3.128 3.128 0 0 1 25 3.125v14.063a3.128 3.128 0 0 1-3.125 3.125h-6.773l-4.946 3.71Z'/%3E%3C/svg%3E ")
      center no-repeat;
    background-size: (40/20em);
    transition:
      transform 0.33s ease,
      background-color 0.33s ease;
    &:hover {
      transform: scale(1.1);
      background-color: var(--secondary);
    }
  }

  svg {
    overflow: visible;
    width: (85/20em);
    height: (85/20em);
    animation: rotate 20s linear infinite;

    text {
      fill: white;
      font-family: "Mona Sans";
      font-weight: 400;
      font-size: (9/20em);
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 0.05px;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
