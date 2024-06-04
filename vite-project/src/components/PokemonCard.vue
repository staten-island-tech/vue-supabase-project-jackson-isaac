<template>
  <div :class="['pokemon', { 'greyscale': !owned }]">
    <img :src="pokemon.sprite" :alt="'Sprite of ' + pokemon.name + '.'" class="image">
    <p class="number">{{ pokemon.number }}</p>
    <h3 class="name">{{ pokemon.name }}</h3>
    <p class="rarity">{{ pokemon.rarity }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  }
})

const pokemonStore = usePokemonStore()
const owned = computed(() => {
  const result = pokemonStore.owned(props.pokemon.name)
  return result
})
</script>

<style scoped>
.pokemon {
  margin: 2vmax 2vmax 0px 2vmax;
  width: 20%;
  background-color: #f2f2f2;
  border: solid thin grey;
  border-radius: 3px;
  color: black;
}
.image {
  margin-top: 2vmax;
  width: 10vw;
  height: 10vw;
}
  .greyscale .image {
    filter: grayscale(1);
  }
.number {
  margin-bottom: 1vmin;
  font-size: 2vmin;
}
.name {
  font-size: 2vw;
}
.rarity {
  margin-bottom: 2vmax;
  font-size: 2vmin;
}
</style>