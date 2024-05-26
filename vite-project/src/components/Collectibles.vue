<template>
  <input type="text" placeholder="Search Pokémon" id="search-bar" v-model="pokemonStore.searchInput">
  <div id="pokemon">
    <PokemonCard v-for="pokemon in pokemonStore.searched" :key="pokemon.number" :pokemon="pokemon"/>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'
import PokemonCard from './PokemonCard.vue'

const pokemonStore = usePokemonStore()

watch(() => pokemonStore.searchInput, (newInput) => {
  console.log(pokemonStore.searched)
})
onMounted(() => {
  console.log(pokemonStore.searched)
})
</script>

<style scoped>
#search-bar {
  padding: 10px;
  width: 50vmax;
  text-align: left;
  font-size: 3vmin;
  font-family: "Exo", sans-serif;
}
#pokemon {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>