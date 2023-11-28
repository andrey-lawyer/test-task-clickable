<template>
  <div class="info">
    <template v-if="isMobile">
      <LogoCompany />
    </template>
    <template v-if="isDesk">
      <LogoCompany :variant="'desk'" />
    </template>

    <h1 class="title">Deposit 500, Get 500 USDT <span class="title_span">AS A GIFT</span></h1>
    <p class="text">100% Cashback FOR VIPS Only</p>
    <ButtonUi :handle-click="showModal" />
  </div>
  <ModalUi v-model:isShown="modelVisible">
    <ModalContent :closeModal="closeModal" />
  </ModalUi>
</template>

<script setup lang="ts" name="InfoDeposit">
import useMediaScreen from '@/hooks/useMediaScreen'
import useModal from '@/hooks/useModal'

import ButtonUi from './ui/ButtonUi.vue'
import LogoCompany from './ui/LogoCompany.vue'
import ModalUi from './ui/ModalUi.vue'
import ModalContent from './ModalContent.vue'

const { isMobile, isDesk } = useMediaScreen()
const { modelVisible, showModal, closeModal } = useModal()
</script>

<style scoped>
.info {
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: start;
  }
}

.title {
  font-family: 'Gotham';
  font-size: 24rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.15;
  text-transform: uppercase;
  color: var(--font-title-color);
  margin: 0;
  padding-top: 44rem;
  padding-bottom: 24rem;

  @media screen and (min-width: 1024px) {
    font-size: 60rem;
    line-height: 1.2;
    padding-top: 54rem;
    padding-bottom: 54rem;
    text-align: start;
  }
}

.title_span {
  font-weight: 700;
  color: var(--button-color);
}

.text {
  font-family: 'Gotham';
  font-size: 16rem;
  line-height: 1.63;
  text-transform: uppercase;
  color: var(--placeholder-color);
  padding-bottom: 48rem;

  @media screen and (min-width: 1024px) {
    font-size: 24rem;
    line-height: 1.333;
    padding-bottom: 101rem;
  }
}
</style>
