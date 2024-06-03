<template>
  <img src="https://static.pokemon.com/images/pokemon_logo.png" alt="Pokemon Logo" id="pokemon-logo">
  <header id="navigation">
    <button class="button" id="back" @click="back()">🡐 Back</button>
    <h2 id="title">Settings</h2>
    <button class="button" id="logout" @click="logOut()">Logout</button>
  </header>
  <div id="update-form">
    <form>
      <label for="username">
        <p class="label">Change Username</p>
      </label>
      <input id="username" type="text" required placeholder="New Username" minlength="5" maxlength="20" class="input" v-model="newUsername">
      <input type="submit" value="Update" class="update" @click.prevent="changeUsername()">
    </form>
    <form>
      <label for="email">
        <p class="label">Change Email</p>
      </label>
      <input id="email" type="email" required placeholder="New Email" class="input" v-model="newEmail">
      <input type="submit" value="Update" class="update" @click.prevent="changeEmail()">
    </form>
    <form>
      <label for="password">
        <p class="label">Change Password</p>
      </label>
      <input id="password" type="password" required placeholder="New Password" minlength="6" class="input" v-model="newPassword">
      <input type="submit" value="Update" class="update" @click.prevent="changePassword()">
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { supabase } from '@/supabase'

const newUsername = ref('');
const newEmail = ref<string>('');
const newPassword = ref<string>('');

function back() {
  router.go(-1)
}

async function logOut() {
  if (confirm("Are you sure you want to log out?")) {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Log out unsucessful.\n" + error.message)
      console.log(error)
    }
    else {
      alert("Log out successful.")
      router.push('/')
    }
  }
}

async function changeUsername() {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id
    const { error } = await supabase
      .from('profiles')
      .update({ username: newUsername.value })
      .eq('id', userId)
    if (error) {
      alert("Unable to change your username.\n" + error.message)
      newUsername.value = ''
    } else if (!error) {
      alert("Username updated sucessfully.")
      const { error } = await supabase.auth.updateUser({
        data: { username: newUsername.value }
      })
      newUsername.value = ''
    }
  } catch (error) {
    console.log(error)
  }
}

async function changeEmail() {
  const { error } = await supabase.auth.updateUser({
    email: newEmail.value,
  })
  if (error) {
    alert("Unable to change your email.\n" + error.message)
    newEmail.value = ''
  } else {
    alert("Email updated sucessfully. Please check your email for a confirmation message.")
    newEmail.value = ''
  }
}

async function changePassword() {
  const { error } = await supabase.auth.updateUser({
    password: newPassword.value,
  })
  if (error) {
    alert("Unable to change your password.\n" + error.message)
    newPassword.value = ''
  } else {
    alert("Password updated sucessfully.")
    newPassword.value = ''
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
  background-image: url(https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png);
  background-repeat: repeat;
  font-size: 2vmax;
}
  #title {
    padding: 2.5vmin;
    color: white;
  }
  .button {
    margin: auto 0px auto 0px;
    padding: 1vmin;
    border-radius: 3px;
    border-style: none;
    color: black;
    font-size: 2vmax;
    font-family: "Exo", sans-serif;
    text-decoration: none;
    cursor: pointer;
    transition: 0.25s;
  }
  #back {
    background-color: #e3350d;
    color: white;
  }
  #back:hover {
    background-color: #b32a0a;
  }
  #logout {
    background-color: #ffcc06;
  }
    #logout:hover {
      background-color: #daa31c;
    }
#update-form {
  margin: 4vmax auto 2vmax auto;
  width: fit-content;
}
  .label {
    text-align: left;
    font-size: larger;
  }
  .input {
    margin-bottom: 2vmax;
    padding: 10px;
    width: 50vmin;
    text-align: left;
    font-size: larger;
    font-family: "Exo", sans-serif;
  }
  .update {
    margin-left: 2vmax;
    padding: 12px;
    background-color: #4dad5b;
    border-radius: 3px;
    border-style: none;
    color: white;
    font-size: larger;
    font-family: "Exo", sans-serif;
    cursor: pointer;
    transition: 0.25s;
  }
    .update:hover {
      background-color: #369143;
    }
</style>