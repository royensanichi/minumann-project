<script setup lang="ts">
import { useDrinkStore } from '@/stores/drinkStore'

// Access store
const drinkStore = useDrinkStore()
</script>

<template>
  <div class="p-8">
    <h2 v-if="drinkStore.selectedDrink">You selected: {{ drinkStore.selectedDrink }}</h2>
    <p v-else>Please select a drink above.</p>

    <div v-if="drinkStore.selectedDrink === 'Our Signature'">
      <p>Special signature drinks menu...</p>
    </div>
    <div v-else-if="drinkStore.selectedDrink === 'Coffee'">
      <p>Our coffee selection...</p>
    </div>
    <div v-else-if="drinkStore.selectedDrink === 'Tea'">
      <p>Our tea selection...</p>
    </div>
    <div v-else-if="drinkStore.selectedDrink === 'Juice'">
      <p>Our juice selection...</p>
    </div>
    <div class="border rounded">
      <p class="p-4">Content goes here...</p>
    </div>
  </div>
</template>
