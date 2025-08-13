<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
</script>

<template>
  <div class="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex w-screen">
    <aside>
      <SideBar />
    </aside>

    <div class="flex flex-col flex-1">
      <header>
        <Header />
      </header>

      <main class="flex-1">
        <Content />
      </main>
    </div>
  </div>
</template>
