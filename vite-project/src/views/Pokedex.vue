<template>
  <Heading/>
  <div id="pokedex-navigation">
    <button @click="currentTab = Inventory" class="nav-button">Your Inventory</button>
    <button @click="currentTab = Collectibles" class="nav-button">All Pokémon</button>
  </div>
  <component :is="currentTab"></component>
</template>

<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Inventory from '@/components/Inventory.vue'
import Collectibles from '@/components/Collectibles.vue'
import { shallowRef } from 'vue'

const currentTab = shallowRef(Inventory)
</script>
  
<style scoped>
#pokedex-navigation {
  margin: 2vmax 20vmin;
  display: flex;
  justify-content: space-evenly;
}
.nav-button {
  padding: 10px 2vmax;
  background-color: transparent;
  border-style: none;
  border-bottom: solid thin #313131;
  font-size: 3vmin;
  font-family: "Exo", sans-serif;
  cursor: pointer;
  transition: 0.5s;
}
  .nav-button:hover {
    background-color: #313131;
    color: white;
  }
</style>