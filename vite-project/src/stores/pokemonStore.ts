import { defineStore } from 'pinia'
import { supabase } from '@/supabase'
import { common, uncommon, rare, legendary } from '@/stores/pokemon'

let pokemon = common.concat(uncommon, rare, legendary)
pokemon.sort((a, b) => a.number - b.number)

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    searchInput: '',
    inventory: [] as string[],
  }),
  actions: {
    async fetchInventory(userId: string) {
      const { data, error } = await supabase
        .from('pokemon')
        .select('name')
        .eq('owner_id', userId)
      if (error) {
        console.error(error)
      } else {
        this.inventory = data.map(pokemon => pokemon.name)
        return this.inventory
      }
    }
  },
  getters: {
    searched: (state) => {
      if (/\d/.test(state.searchInput)) {
        return pokemon.filter(pokemon => pokemon.number === parseInt(state.searchInput, 10))
      } else if (String(state.searchInput)) {
        return pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(state.searchInput.toLowerCase()))
      } else {
        return pokemon
      }
    },
    owned: (state) => (species: string) => {
      const result = state.inventory.includes(species)
      return result
    },
  },
})