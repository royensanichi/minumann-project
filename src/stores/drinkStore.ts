import { defineStore } from 'pinia'

export const useDrinkStore = defineStore('drink', {
  state: () => ({
    selectedDrink: '' as string,
  }),
  actions: {
    selectDrink(drink: string) {
      this.selectedDrink = drink
      // Optional: persist in localStorage
      localStorage.setItem('selectedDrink', drink)
    },
    loadDrink() {
      const saved = localStorage.getItem('selectedDrink')
      if (saved) {
        this.selectedDrink = saved
      }
    },
  },
})
