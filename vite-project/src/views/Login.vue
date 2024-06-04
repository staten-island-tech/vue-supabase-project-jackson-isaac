<template>
  <body>
    <div id="login-form">
      <header>
        <img src="https://static.pokemon.com/images/pokemon_logo.png" alt="Pokemon Logo" id="logo">
        <h1 id="title">Egg Hatching Simulator</h1>
      </header>
      <form>
        <input name="email" type="email" required placeholder="Email" class="input" v-model="email"><br>
        <input name="password" type="password" required placeholder="Password" class="input" v-model="password"><br>
        <input type="submit" value="Login" class="button" id="login" @click.prevent="signInWithEmail()">
      </form>
      <RouterLink to="/signup" class="button" id="link">Create an account!</RouterLink>
    </div>
  </body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { supabase } from '../supabase';

const email = ref<string>('')
const password = ref<string>('')

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    alert(error.message + '.')
    console.log(error)
  } else {
    router.push('/home')
    console.log(data)
  }
}
</script>

<style scoped>
body {
  position: relative;
}
#login-form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 25%);
  padding: 20px 0px 40px 0px;
  max-width: 40vmax;
  background-color: white;
  border: solid 2px #6a6a6a;
  border-radius: 10px;
}
#logo{
  margin: auto auto;
  height: 10vmax;
  justify-content: center;
}
.input {
  margin-top: 20px;
  padding: 10px;
  min-width: 50%;
  text-align: left;
  font-size: large;
  font-family: "Exo", sans-serif;
}
.button {
  margin-top: 20px;
  padding: 10px 5%;
  border-radius: 3px;
  border-style: none;
  color: white;
  font-size: large;
  font-family: "Exo", sans-serif;
}
#login {
  margin-bottom: 40px;
  background-color: #4dad5b;
  cursor: pointer;
  transition: .25s;
}
  #login:hover {
    background-color: #369143;
  }
#link {
  background-color: #1b53ba;
  text-decoration: none;
  transition: 0.25s;
}
  #link:hover {
    background-color: #1847d7;
  }
</style>