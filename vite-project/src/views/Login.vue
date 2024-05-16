<template>
  <body>
<div id="loginfrom">
  <header>
    <div id="logo">
    <img src="https://static.pokemon.com/images/pokemon_logo.png" alt="POKEMON LOGO">
    </div>
  </header>
  <form>
    <label for="email" class="login-form">Email: </label>
      <input name="email" type="email" class="login-form" v-model="email"><br>
    <label for="password" class="login-form">Password: </label>
      <input name="password" type="password" class="login-form" v-model="password"><br>
    <input type="submit" value="Login" class="login-form" @click.prevent="signInWithEmail()">
  </form>
  <RouterLink to="/signup" class="link">Create an Account!</RouterLink>
</div>
</body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../supabase'

const email = ref<string>('')
const password = ref<string>('')

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    alert(error.message)
    console.log(error)
  } else {
    console.log(data)
  }
}
</script>

<style scoped>
body{
  background-image: url(https://static.prod.pokemon.com/images/pikachu_pattern.png);
    background-repeat: repeat;
}
  .login-form {
    margin-top: 20px;
  }
  #loginfrom{
    position: relative;
left: 50%;transform: translate(-50%);
    border-radius: 10px;
    max-width: 500px;
    border: solid;
    padding: 5px;
    align-self: center;
    background-color: white;
    margin: 20px;
    border-width: 2px;
    border-color: #6a6a6a;
  }
 #logo{
    display: block;
  margin-left: auto;
  margin-right: auto;
transform: scale(.5);
 }
</style>
