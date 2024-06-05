<script>
  import BackgroundVid from "../lib/vid/bgvid.mp4";
  import "../css/bgvid.css";
</script>

<video autoplay muted loop id="myVideo">
  <source src={BackgroundVid} type="video/mp4" />
</video>
<div class="flex justify-center items-center flex-col h-screen relative">
  <!-- Overlay div for background opacity -->

  <!-- Content container -->
  <div class="bg-black bg-opacity-50 w-screen py-4">
    <h1 class="text-9xl max-md:text-7xl font-bold text-center text-white">
      Hi I'm
      <span class="text-sky_blue">Lei</span>
      <span class="text-pink">Ocopio.</span>
    </h1>
    <br />
    <h2 class="text-2xl text-center text-white">SvelteKit and React Developer</h2>
  </div>
</div>
