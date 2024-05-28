<template>
  <input type="text" placeholder="Search Pokémon" id="search-bar" v-model="pokemonStore.searchInput">
  <div id="pokemon">
    <PokemonCard v-for="pokemon in pokemonStore.searched" :key="pokemon.number" :pokemon="pokemon" v-if="!loading"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'
import { supabase } from '@/supabase'
import PokemonCard from './PokemonCard.vue'

const pokemonStore = usePokemonStore()
const loading = ref<boolean>(true)

onMounted(async () => {  
  async function getUserId() {
    const { data: { user } } = await supabase.auth.getUser()
    return user?.id
  }
  const userId = await getUserId()
  if (userId) {
    await pokemonStore.fetchInventory(userId)
    loading.value = false
  }
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
  margin: 2vmax 10vmin 8vmax 10vmin;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>