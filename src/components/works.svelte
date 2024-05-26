<script>
  import Gab from "../lib/images/gabai.png";
  import UlamAI from "../lib/images/ulam_ai.png";
</script>

<div class="flex items-center flex-col h-screen my-[3rem] max-md:mx-3">
  <div class=" flex items-center flex-col max-md:px-3">
    <h1 class="font-bold text-pink-400">Here are my works</h1>
    <br />
    <p class="text-[2rem] font-bold">
      Here are some of my personal and group projects that I have worked on.
    </p>
  </div>

  <br />
  <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5">
    <div class="bg-sky_blue-700 p-3 rounded-md">
      <a href="https://gabai.vercel.app" target="_blank">
        <img src={Gab} alt="Gabai Screenshot" style="width:500px; " />

        <h1 class="font-bold">GabAi</h1>

        <p>
          GabAi is a chatbot that fights workplace discrimination in the
          Philippines.
        </p>
      </a>
    </div>

    <div class="bg-sky_blue-700 p-3 rounded-md">
      <a href="https://ulamai.vercel.app" target="_blank">
        <img src={UlamAI} alt="Gabai Screenshot" style="width:500px;" />
        <h1 class="font-bold">Ulam</h1>

        <p>Ulam is an AI Meal Planner powered by Google's PaLM API.</p>
      </a>
    </div>
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
