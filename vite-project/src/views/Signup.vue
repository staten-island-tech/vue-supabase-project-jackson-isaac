<template>
  <div>
    <form>
      <input name="email" type="email" required placeholder="Email" class="signup-form" v-model="email"><br>
      
      <input name="user" type="text" required placeholder="Username" minlength="4" maxlength="20" class="signup-form" v-model="username"><br>
      
      <input name="password" type="password" required placeholder="Password" class="signup-form" v-model="password"><br>
      <input type="submit" value="Sign Up" class="signup-form" @click.prevent="signUpNewUser()">
    </form>
    <RouterLink to="/" class="link">I have an account.</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { supabase } from '../supabase';

const email = ref('')
const password = ref('')
const username = ref('')

async function signUpNewUser() {
	const { data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		options: {
			data: {
				username: username.value
			}
		}
	})
	if (error) {
    alert(error.message)
    console.log(error)
	} else {
    alert("You have successfully created an account.")
    router.push('/')
    console.log(data)
	}
}
</script>

<style scoped>

.signup-form {
  margin-top: 20px;
}
</style>