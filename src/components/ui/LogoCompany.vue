<template>
  <a class="logo" href="https://clickable.agency" aria-label="Link with company logo">
    <IconLogoPartOne :widthLogo="widthLogo1" :heightLogo="heightLogo1" />
    <IconLogoPartTwo :widthLogo="widthLogo2" :heightLogo="heightLogo2" />
  </a>
</template>

<script setup lang="ts" name="LogoCompany">
import { defineProps } from 'vue'
import IconLogoPartOne from '../icons/IconLogoPartOne.vue'
import IconLogoPartTwo from '../icons/IconLogoPartTwo.vue'

const props = defineProps({
  variant: { type: String, default: 'mob-desk' }
})

const widthLogo1 =
  props.variant === 'mob-modal' ? '31.8rem' : props.variant === 'desk' ? '55.7rem' : '33.65rem'
const heightLogo1 =
  props.variant === 'mob-modal' ? '20rem' : props.variant === 'desk' ? '35rem' : '21rem'

const widthLogo2 =
  props.variant === 'mob-modal' ? '94rem' : props.variant === 'desk' ? '164rem' : '97.7rem'
const heightLogo2 =
  props.variant === 'mob-modal' ? '20rem' : props.variant === 'desk' ? '35rem' : '21rem'
const gap =
  props.variant === 'mob-modal' ? '9rem' : props.variant === 'desk' ? '15.75rem' : '8.6rem'
const justify = props.variant === 'desk' ? 'start' : 'center'
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: v-bind(gap);
  justify-content: v-bind(justify);
}
</style>
