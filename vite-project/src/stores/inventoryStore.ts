import { defineStore } from 'pinia'
import { supabase } from '@/supabase'

export const useInventoryStore = defineStore({
  id: 'inventory',
  state: () => ({
    searchInput: '',
    inventory: [] as Array<{ id: string, number: number, name: string, sprite: string, rarity: string }>,
  }),
  actions: {
    async fetchInventory(userId: any) {
      const { data, error } = await supabase
        .from('pokemon')
        .select()
        .eq('owner_id', userId)
      if (error) {
        console.error(error)
      } else {
        this.inventory = data
        return this.inventory
      }
    }
  },
  getters: {
    searched: (state) => {
      if (/\d/.test(state.searchInput)) {
        return state.inventory.filter(pokemon => pokemon.number === parseInt(state.searchInput, 10))
      } else if (String(state.searchInput)) {
        return state.inventory.filter(pokemon => pokemon.name.toLowerCase().includes(state.searchInput.toLowerCase()))
      } else {
        return state.inventory
      }
    },
  }
})