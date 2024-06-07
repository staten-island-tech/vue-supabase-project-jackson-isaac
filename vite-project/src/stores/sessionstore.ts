import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const session = defineStore('auth', () => {
  const auth = ref({
    loggedIn: false,
  })

  return { auth }
})