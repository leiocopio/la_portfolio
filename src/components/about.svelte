<script>
  import Technologies from "./tech.svelte";
</script>

<div class="flex items-center justify-center flex-col max-md:px-3">
  <span class="bg-pink-700 p-5 rounded-md">
    <h1 class="text-[2rem] font-bold text-center">About Me</h1>
    <br />
    <br />

    <p class="text-2xl text-center leading-loose">
      A software developer and graphic artist based in Manila, Philippines. I am
      passionate about technology, design, and the intersection of the two. I am
      a graduate from the University of Caloocan City - North Campus with a
      degree in Computer Science.
    </p>
  </span>

  <br />
  <br />
  <div class="text-center">
    <h1 class="text-[2rem] font-bold">Technologies I Use</h1>
    <br />
    <!-- Programming Languages -->
    <Technologies />
  </div>
</div>

<style>
</style>
