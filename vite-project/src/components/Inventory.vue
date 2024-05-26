<template>
  <input type="text" placeholder="Search Pokémon" id="search-bar">
  <div id="inventory">
    
  </div>
</template>

<script setup lang="ts">

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
  display: flex;
  justify-content: start;
}
</style>