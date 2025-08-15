<script setup lang="ts">
import { useDrinkStore } from '@/stores/drinkStore'

// Access store
const drinkStore = useDrinkStore()

// Example drinks
const drinks = ['Our Signature', 'Coffee', 'Tea', 'Juice']

// Load saved drink on mount
drinkStore.loadDrink()
</script>
<template>
  <div class="sticky top-0 z-50 bg-white shadow-md">
    <div class="topbar background flex flex-row gap-4 items-center justify-center p-2">
      <div class="flex items-center flex-shrink-0 box-border border-white">
        <img src="../assets/icons/minumanyokk_logo.png" alt="Logo" class="logo" />
        <h3 class="menu-title">Menu</h3>
      </div>
      <ul
        class="flex gap-2 items-center justify-center w-full overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <li v-for="drink in drinks" :key="drink">
          <button
            class="bg-indigo-300 hover:bg-indigo-600 w-32 py-2 text-black hover:text-white transition disabled:opacity-70 disabled:bg-indigo-300 disabled:text-black"
            :disabled="drinkStore.selectedDrink === drink"
            @click="drinkStore.selectDrink(drink)"
          >
            {{ drink }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  /* padding: 0.5rem; */
  border-right: 1px solid var(--color-border);
  background-color: brown;
}

.topbar h3 {
  font-size: 1.5rem;
  font-style: bold;
  font-family: 'Courier New', Courier, monospace;
}

.topbar ul {
  list-style: none;
  padding: 0;
}

.topbar li {
  margin-bottom: 1rem;
}

.topbar a {
  color: var(--color-text);
  text-decoration: none;
}

.topbar a:hover {
  text-decoration: underline;
}

.topbar .addtocart {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  /* background-color: var(--color-primary); */
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 100%;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}
</style>
