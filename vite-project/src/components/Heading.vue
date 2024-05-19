<template>
  <img src="https://static.pokemon.com/images/pokemon_logo.png" id="pokemon-logo">
  <header id="navigation">
    <u2 id="user">{{username}}</u2>
    <nav id="views">
      <RouterLink to="/home" class="link">Home</RouterLink>
      <RouterLink to="/pokedex" class="link">Pokedex</RouterLink>
      <RouterLink to="/trading" class="link">Trading</RouterLink>
    </nav>
    <button id="sign-out" @click="logOut()">Log out</button>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import { supabase } from '@/supabase';

const username = ref<string>('')

async function getUsername() {
  const { data: { user } } = await supabase.auth.getUser()
  username.value = user?.user_metadata.username
}
onMounted(() => {
  getUsername()
})

async function logOut() {
  if (confirm("Are you sure you want to log out?")) {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Sign out unsucessful.\n" + error.message)
      console.log(error)
    }
    else {
      alert("Sign out successful.")
      const { data: { user } } = await supabase.auth.getUser()
      console.log(user)
      router.push('/')
    }
  } else {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user?.user_metadata.username)
  }
}
</script>

<style scoped>
#pokemon-logo {
  margin: auto auto;
  height: 10vmax;
  justify-content: center;
}
#navigation {
  padding: 0% 2% 0% 2%;
  display: flex;
  justify-content: space-between;
  background-color: #323232;
  font-size: 2vmax;
}
  #user {
    margin: auto 0px auto 0px;
    color: white;
    text-decoration: none;
  }
  #views {
    padding: 2vmax;
  }
  .link {
    padding: 2vmax;
    color: white;
    text-decoration: none;
    transition: 0.5s;
  }
    .link:hover {
      background-color: #ffcc06;
      color: black;
      transform: translateY(-20px);
    }
  #sign-out {
    margin: auto 0px auto 0px;
    padding: 1vmin;
    background-color: #ffcc06;
    border-style: none;
    color: black;
    font-size: 2vmax;
    text-decoration: none;
    cursor: pointer;
  }
</style>