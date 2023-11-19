<template>
  <a
    class="link"
    :aria-label="aria_label"
    :href="link"
    rel="noopener noreferrer nofollow"
    target="_blank"
  >
    <slot></slot
  ></a>
</template>

<script setup lang="ts">
import { defineProps  } from 'vue'
defineProps({
  link: String,
  aria_label: String
})
</script>

<style scoped>
.link {
  display: inline-block;
  padding: 8rem;
  border-radius: 8px;
  background-color: var(--border-input-color);
}
</style>
