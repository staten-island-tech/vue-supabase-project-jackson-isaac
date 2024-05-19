<template>
  <Heading/>
  <button id="hatch-button" @click="hatch" :disabled="wait" :class="{ 'cooldown': wait }">Hatch Egg</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Heading from '@/components/Heading.vue'
import { common, uncommon, rare, legendary } from '@/stores/pokemon'

const wait = ref(false)

function hatch() {
  if (wait.value) return

  const rarity = Math.random()
  let pokemon
  if (rarity >= 0 && rarity < 0.6) {
    pokemon = common[Math.floor(Math.random() * common.length)]
  } else if (rarity >= 0.6 && rarity < 0.9) {
    pokemon = uncommon[Math.floor(Math.random() * uncommon.length)]
  } else if (rarity >= 0.9 && rarity < 0.99) {
    pokemon = rare[Math.floor(Math.random() * rare.length)]
  } else if (rarity >= 0.99 && rarity < 1) {
    pokemon = legendary[Math.floor(Math.random() * legendary.length)]
  }
  console.log(pokemon)
  
  wait.value = true
  setTimeout(() => {
    wait.value = false
  }, 5000)
  return pokemon
}
</script>

<style>
button {
  cursor: pointer;
}
button.cooldown {
  cursor: not-allowed;
}
</style>
