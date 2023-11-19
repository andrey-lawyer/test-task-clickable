<script setup lang="ts">
import { useHead } from '@vueuse/head'
import StartSection from './components/StartSection.vue'

useHead({
  title: 'test task clickable',
  meta: [
    {
      name: 'description',
      content: 'test task clickable'
    }
  ]
})
</script>

<template>
  <main>
    <StartSection />
  </main>
</template>

<style>
@import url('./assets/main.css');
html {
  font-size: calc(100vw / 375);
}

@media (min-width: 768px) {
  html {
    font-size: calc(100vw / 600);
  }
}

@media (min-width: 1920px) {
  html {
    font-size: calc(100vw / 1920);
  }
}
</style>
