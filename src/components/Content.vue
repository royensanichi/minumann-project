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
  <div class="p-4">
    <div class="p-4 rounded-xl bg-gray-200">
      <h2 class="p-2 text-3xl tracking-tight text-gray-900">
        <b> "{{ drinkStore.selectedDrink }}" Menu</b>
      </h2>
      <hr class="my-4 border-gray-300 h-2" />
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- the menu items -->
        <div v-for="item in productsToShow" :key="item.name" class="group relative">
          <img
            :src="item.image"
            alt="Front of men's Basic Tee in black."
            class="aspect-square w-full rounded-md object-cover lg:aspect-auto lg:h-90 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]"
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
