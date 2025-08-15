<script setup lang="ts">
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <div class="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
    <div>
      <header>
        <Header />
        <TopBar />
      </header>

      <main class="flex-1">
        <Content />
      </main>
    </div>
  </div>
</template>
