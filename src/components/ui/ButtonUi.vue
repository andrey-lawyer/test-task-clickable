<template>
  <button type="button" class="btn_mobile" @click="handleClick">Become a vip-player</button>
</template>

<script setup lang="ts" name="ButtonUi">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
defineProps({
  handleClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: true
  }
})
</script>

<style scoped>
.btn_mobile {
  cursor: pointer;
  font-family: 'Gotham';
  font-size: 14rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.71;
  text-transform: uppercase;

  background-color: var(--button-color);

  backdrop-filter: blur(10px);
  border-radius: 56px;
  padding: 17px 56px;

  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: 1920px) {
    font-size: 20rem;
    line-height: 1.2;
  }
}
.btn_mobile:hover,
.btn_mobile:hover:focus {
  background-color: var(--font-color);
}
</style>
