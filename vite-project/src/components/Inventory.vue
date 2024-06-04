<template>
  <input type="text" placeholder="Search Pokémon" id="search-bar" v-model="inventoryStore.searchInput">
  <div id="inventory">
    <InventoryCard v-for="pokemon in inventoryStore.searched" :key="pokemon.number" :pokemon="pokemon" @released="handleReleased"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useInventoryStore } from '@/stores/inventoryStore'
import { supabase } from '@/supabase'
import InventoryCard from './InventoryCard.vue'

const inventoryStore = useInventoryStore()

onMounted(async () => {  
  async function getUserId() {
    const { data: { user } } = await supabase.auth.getUser()
    return user?.id
  }
  const userId = await getUserId()
  if (userId) {
    await inventoryStore.fetchInventory(userId)
  }
})

function handleReleased(id: string) {
  inventoryStore.inventory = inventoryStore.inventory.filter(pokemon => pokemon.id !== id)
}
</script>

<style scoped>
#search-bar {
  padding: 10px;
  width: 50vmax;
  text-align: left;
  font-size: 3vmin;
  font-family: "Exo", sans-serif;
}
#inventory {
  margin: 2vmax 10vmin 8vmax 10vmin;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>