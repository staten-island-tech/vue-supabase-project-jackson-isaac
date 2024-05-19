<template>
  <body>
    <div id="loginfrom">
      <header>
        <div id="logo">
        <img src="https://static.pokemon.com/images/pokemon_logo.png" alt="POKEMON LOGO">
        </div>
      </header>
      <form>
        <input name="email" type="email" required placeholder="Email" class="login-form" v-model="email"><br>
        <input name="password" type="password" required placeholder="Password" class="login-form" v-model="password"><br>
        <input type="submit" value="Login" class="login-form" @click.prevent="signInWithEmail()">
      </form>
      <RouterLink to="/signup" class="link">Create an Account!</RouterLink>
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
    alert(error.message)
    console.log(error)
  } else {
    router.push('/home')
    console.log(data)
  }
}
</script>

<style scoped>
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
