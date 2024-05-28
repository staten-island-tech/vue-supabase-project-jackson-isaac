<template>
  <div class="pokemon">
    <button class="release" @click="release(pokemon)">🗙</button><br>
    <img :src="pokemon.sprite" :alt="'Sprite of ' + pokemon.name + '.'" class="image">
    <p class="number">{{ pokemon.number }}</p>
    <h3 class="name">{{ pokemon.name }}</h3>
    <p class="rarity">{{ pokemon.rarity }}</p>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'

interface Pokemon {
  id: string;
  number: number;
  name: string;
  sprite: string;
  rarity: string;
}

const emit = defineEmits(['released'])
async function release(pokemon: Pokemon) {
  if (confirm(`Are you sure you want to release ${pokemon.name}? This action can't be undone.`)) {
    const { error } = await supabase
      .from('pokemon')
      .delete()
      .eq('id', pokemon.id)
    if (error) {
      alert(`Failed to release ${pokemon.name}.\n` + error.message)
    } else {
      alert(`You've released ${pokemon.name}.`)
      emit('released', pokemon.id)
    }
  }
}

const props = defineProps<{
  pokemon: Pokemon;
}>()
</script>

<style scoped>
.pokemon {
  margin: 2vmax 2vmax 0px 2vmax;
  width: 20%;
  background-color: #313131;
  border-radius: 3px;
  color: white;
}
.release {
  margin-right: 100%;
  padding: 0.5vmin 1vmin;
  background-color: #e3350d;
  border-radius: 3px;
  border-style: none;
  color: white;
  font-size: 2vmin;
  cursor: pointer;
  transition: 0.25s;
}
  .release:hover {
    background-color: #b32a0a;
  }
.image {
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