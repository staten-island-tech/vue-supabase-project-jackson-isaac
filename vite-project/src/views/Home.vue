<template>
  <Heading/>
  <img :src="image" :alt="imageAlt" id="hatching-sequence"><br>
  <p id="message">{{ message }}</p>
  <p id="rarity">{{ rarity }}</p>
  <button id="hatch-button" @click="hatch" :disabled="wait" :class="{ 'cooldown': wait }">Hatch Egg</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Heading from '@/components/Heading.vue'
import { common, uncommon, rare, legendary } from '@/stores/pokemon'

const image = ref<string>('/pokemon_egg.jpg')
const imageAlt = ref<string>("Pokemon Egg")
const message = ref<string>("")
const rarity = ref<string>("")
const wait = ref<boolean>(false)

function hatch() {
  if (image.value !== '/pokemon_hatching.gif') {
    image.value = '/pokemon_hatching.gif'
    imageAlt.value = "Pokemon Hatching"
    message.value = ""
    rarity.value = ""
    if (wait.value) return
    wait.value = true
    setTimeout(() => {
      wait.value = false
      const random = Math.random()
      let pokemon
      if (random >= 0 && random < 0.6) {
        pokemon = common[Math.floor(Math.random() * common.length)]
      } else if (random >= 0.6 && random < 0.9) {
        pokemon = uncommon[Math.floor(Math.random() * uncommon.length)]
      } else if (random >= 0.9 && random < 0.99) {
        pokemon = rare[Math.floor(Math.random() * rare.length)]
      } else if (random >= 0.99 && random < 1) {
        pokemon = legendary[Math.floor(Math.random() * legendary.length)]
      }
      console.log(pokemon)
      image.value = pokemon?.sprite ?? '/pokemon_egg/jpg'
      imageAlt.value = pokemon?.name ?? 'Pokemon Egg'
      message.value = "You hatched " + pokemon?.name + "!"
      rarity.value = pokemon?.rarity ?? ""
      return pokemon
    }, 5600)
  }
}
</script>

<style>
#hatching-sequence {
  margin-top: 4vmax;
  height: 20vmax;
}
#message {
  font-size: 4vmax;
}
#rarity {
  margin: 10px 0px 20px 0px;
  font-size: 2vmax;
}
#hatch-button {
  margin: 2vmax 0px 4vmax 0px;
  padding: 10px 20px;
  background-color: #1b53ba;
  border-radius: 3px;
  border-style: none;
  color: white;
  font-size: 2vmax;
  font-family: "Exo", sans-serif;
}
button {
  cursor: pointer;
}
button.cooldown {
  cursor: not-allowed;
}
</style>