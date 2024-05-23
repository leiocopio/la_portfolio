<script context="module">
  import Home from "../components/home.svelte";
  import About from "../components/about.svelte";
  import Works from "../components/works.svelte";
</script>

<div class="mx-auto max-w-screen-lg max-md:max-w-screen-sm">
  <section id="home">
    <Home />
  </section>

  <section id="about" class="pt-10">
    <About />
  </section>

  <section id="works" class="pt-10">
    <Works />
  </section>
</div>
