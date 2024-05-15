<template>
<div>
  <form>
    <label for="email" class="login-form">Email: </label>
      <input name="email" type="email" class="login-form" v-model="email"><br>
    <label for="password" class="login-form">Password: </label>
      <input name="password" type="password" class="login-form" v-model="password"><br>
    <input type="submit" value="Login" class="login-form" @click.prevent="signInWithEmail()">
  </form>
  <RouterLink to="/signup" class="link">Create an Account!</RouterLink>
</div>
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
  .login-form {
    margin-top: 20px;
  }
</style>
