import { defineStore } from 'pinia'
import { common, uncommon, rare, legendary } from '@/stores/pokemon'

let pokemon = common.concat(uncommon, rare, legendary)
pokemon.sort((a, b) => a.number - b.number)

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    searchInput: ''
  }),
  getters: {
    searched: (state) => {
      if (/\d/.test(state.searchInput)) {
        return pokemon.filter(pokemon => pokemon.number === parseInt(state.searchInput, 10))
      } else if (String(state.searchInput)) {
        return pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(state.searchInput.toLowerCase()))
      } else {
        return pokemon
      }
    }
  },
})