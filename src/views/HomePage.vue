<template>
  <div class="">
    <div class="flex w-full items-center justify-evenly">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
        class="w-110 py-10">

    </div>
    <div class=" flex items-center justify-center gap-4 sm:flex-col md:flex-row">
      <iframe width="420" height="315" src="https://www.youtube-nocookie.com/embed/48hpDU9eCx0"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

      <iframe width="420" height="315" src="https://www.youtube-nocookie.com/embed/KQ9Cgdsa9tc"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

      <iframe width="420" height="315" src="https://www.youtube-nocookie.com/embed/MkekGuqcbwY"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

    </div>
  </div>

</template>
<script>
import { ramService } from '../services/rickAndMorty'

export default {
  data() {
    return {
      characters: [],
    }
  },
  async mounted() {
    this.characters = await ramService.getApiCharacter()
    console.log(this.characters);
  }
}
</script>
