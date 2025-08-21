<script setup lang="ts">
import { useDrinkStore } from '@/stores/drinkStore'
import { Tea, Coffee, OurSignature, Juice } from '@/components/Product.json'
import { computed } from 'vue'

// Access store
const drinkStore = useDrinkStore()

const productsToShow = computed(() => {
  switch (drinkStore.selectedDrink) {
    case 'Tea':
      return Tea
    case 'Coffee':
      return Coffee
    case 'Our Signature':
      return OurSignature
    case 'Juice':
      return Juice
    default:
      return []
  }
})
</script>

<template>
  <div class="p-12">
    <div class="rounded">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900">
        "{{ drinkStore.selectedDrink }}" Menu
      </h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- the menu items -->
        <div v-for="item in productsToShow" :key="item.name" class="group relative bg-gray-800">
          <img
            :src="item.image"
            alt="Front of men's Basic Tee in black."
            class="aspect-square w-full rounded-md bg-gray-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-90"
          />
          <div class="mt-2 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
            </div>
            <p class="text-sm font-medium text-black-900">Rp. {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
