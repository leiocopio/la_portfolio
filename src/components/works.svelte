<script>
  import Gab from "../lib/images/gabai.png";
  import UlamAI from "../lib/images/ulam_ai.png";
</script>

<div class="flex items-center flex-col h-screen my-[3rem] max-md:mx-3">
  <h1>Here are my works</h1>
  <br />
  <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5">
    <div
      class="bg-sky_blue-700 p-3 rounded-md
  
    "
    >
      <img src={Gab} alt="Gabai Screenshot" style="width:500px; " />
      <h1 class="font-bold">GabAi</h1>

      <p>
        GabAi is a chatbot that fights workplace discrimination in the
        Philippines.
      </p>
    </div>

    <div
      class="bg-sky_blue-700 p-3 rounded-md

    "
    >
      <img src={UlamAI} alt="Gabai Screenshot" style="width:500px;" />
      <h1 class="font-bold">Ulam</h1>

      <p>Ulam is an AI Meal Planner powered by Google's PaLM API.</p>
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
