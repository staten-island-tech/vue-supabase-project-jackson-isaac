<template>
  <Heading/>
  <div id="trading-nav">
    <button @click="" class="nav-button">Create Request</button>
    <button @click="" class="nav-button">View Requests</button>
  </div>
  <component :is="currentTab"></component>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import Heading from '@/components/Heading.vue'

const currentTab = shallowRef()
</script>

<style scoped>
#trading-nav {
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