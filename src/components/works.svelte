<script>
 import Gabai from "./works/gabai.svelte";
 import UlamAi from "./works/ulam_ai.svelte";
</script>

<div class="flex items-center flex-col h-screen my-[3rem] max-md:mx-3">
  <div class=" flex items-center flex-col max-md:px-3">
    <h1 class="font-bold text-pink-100">Here are my works</h1>
    <br />
    <p class="text-[2rem] font-bold">
      Here are some of my personal and group projects that I have worked on.
    </p>
  </div>

  <br />
  <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5">
   <!-- Gabai -->
   <Gabai />

<!-- Ulam AI -->
<UlamAi />
  </div>
</div>

<style>
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }

  img {
    object-fit: cover;
  }
</style>
