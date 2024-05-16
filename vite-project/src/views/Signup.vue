<template>
  <body>
    

  <div>
    <form>
      <label for="email" class="signup-form">Email: </label>
        <input name="email" type="email" class="signup-form"><br>
      <label for="password" class="signup-form">Password: </label>
        <input name="password" type="password" class="signup-form"><br>
      <input type="submit" value="Sign Up" class="signup-form" @click.prevent="signUpNewUser()">
    </form>
    <RouterLink to="/" class="link">I have an account.</RouterLink>
  </div>
</body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../supabase'
import router from '@/router'

const email = ref('')
const password = ref('')

async function signUpNewUser() {
	const { data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		// options: {
		// 	data: {
		// 		first_name: firstName.value
		// 	}
		// }
	})
	if (error) {
    alert(error.message)
    console.log(error);
	} else {
    alert("You have successfully created an account.")
    router.push("/");
    console.log(data);
	}
}
</script>

<style scoped>
body{
  background-image: url(https://static.prod.pokemon.com/images/pikachu_pattern.png);
    background-repeat: repeat;
}
  .signup-form {
    margin-top: 20px;
  }
</style>