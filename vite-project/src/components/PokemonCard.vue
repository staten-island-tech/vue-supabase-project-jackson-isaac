<template>
  <div class="pokemon">
    <img :src="pokemon.sprite" class="image">
    <p class="number">{{ pokemon.number }}</p>
    <h3 class="species">{{ pokemon.name }}</h3>
    <p class="rarity">{{ pokemon.rarity }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>