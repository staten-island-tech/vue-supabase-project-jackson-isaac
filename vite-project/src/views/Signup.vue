<template>
  <body>
    <div id="signup-form">
      <header>
        <img src="https://static.pokemon.com/images/pokemon_logo.png" alt="Pokemon Logo" id="logo">
        <h1 id="title">Egg Hatching Simulator</h1>
      </header>
      <form>
        <input name="email" type="email" required placeholder="Email" class="input" v-model="email"><br>
        <input name="user" type="text" required placeholder="Username" minlength="5" maxlength="20" class="input" v-model="username"><br>
        <input name="password" type="password" required placeholder="Password" minlength="6" class="input" v-model="password"><br>
        <input type="submit" value="Sign Up" class="button" id="signup" @click.prevent="signUpNewUser()">
      </form>
      <RouterLink to="/" class="button" id="link">I have an account.</RouterLink>
    </div>
  </body>
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
    alert(error.message + '.')
    console.log(error)
	} else {
    alert("You have successfully created an account. Please check your email for a confirmation message.")
    router.push('/')
    console.log(data)
	}
}
</script>

<style scoped>
#signup-form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 0px 40px 0px;
  max-width: 40vmax;
  background-color: white;
  border: solid;
  border-radius: 10px;
  border-width: 2px;
  border-color: #6a6a6a;
}
#logo{
  margin: auto auto;
  height: 10vmax;
  justify-content: center;
}
.input {
  margin-top: 20px;
  padding: 10px;
  text-align: left;
  min-width: 50%;
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
#signup {
  margin-bottom: 40px;
  background-color: #4dad5b;
  cursor: pointer;
}
#link {
  background-color: #1b53ba;
  text-decoration: none;
}
</style>