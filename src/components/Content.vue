<script setup lang="ts">
import { useDrinkStore } from '@/stores/drinkStore'

const Tea = [
  {
    name: 'S-Tea',
    description: 'A soothing beverage made from the leaves of the Camellia sinensis plant.',
    price: 8000,
    image: 'https://example.com/tea.jpg',
  },
  {
    name: 'Herbal Tea',
    description: 'A caffeine-free infusion made from a variety of herbs and spices.',
    price: 38000,
    image: 'https://example.com/herbal-tea.jpg',
  },
  {
    name: 'Green Tea',
    description: 'A refreshing beverage made from unoxidized tea leaves.',
    price: 9000,
    image: 'https://example.com/green-tea.jpg',
  },
  {
    name: 'Mango-Green Tea',
    description: 'A chilled beverage made from brewed tea, served over ice.',
    price: 45000,
    image: 'https://example.com/iced-tea.jpg',
  },
]

// Access store
const drinkStore = useDrinkStore()
</script>

<template>
  <div class="p-8">
    <div class="rounded">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        "{{ drinkStore.selectedDrink }}" Menu
      </h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- the menu items -->
        <div v-for="item in Tea" :key="item.name" class="group relative">
          <img
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt="Front of men&#039;s Basic Tee in black."
            class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
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
            <p class="text-sm font-medium text-gray-900">Rp. {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
