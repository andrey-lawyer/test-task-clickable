<template>
  <div class="modal-content">
    <div class="content">
      <LogoCompany variant="mob-modal" />
      <h2 class="title">Deposit 500, <span class="title-span">get 500 USDT as a gift</span></h2>
      <p class="text">100% cashback for VIPs only</p>
    </div>
    <div class="form"><FormRegister :closeModal="closeModal" /></div>
  </div>
</template>

<script setup lang="ts" name="ModalContent">
import LogoCompany from './ui/LogoCompany.vue'
import FormRegister from './FormRegister.vue'
import { defineProps, type PropType } from 'vue'
defineProps({
  closeModal: {
    type: Function as PropType<() => void>,
    required: true
  }
})
</script>

<style scoped>
.modal-content {
  width: 318rem;
  @media screen and (min-width: 1920px) {
    width: 720rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 58px;
  padding-bottom: 180rem;
  text-align: center;
  @media screen and (min-width: 1920px) {
    padding-top: 56px;
  }
}

.content:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/decor-images/lollipop-1.png'), url('/decor-images/lollipop-2.png'),
    url('/decor-images/girl.png'), url('/decor-images/ball-2.png');

  background-size:
    90rem 86rem,
    85rem 74rem,
    184rem 169rem,
    112rem 112rem;
  background-position:
    -9% 70%,
    5% 108%,
    50% 110%,
    120% 77%;
}
@media screen and (min-width: 1920px) {
  .content:before {
    background-size:
      90rem 86rem,
      85rem 74rem,
      365rem 400rem,
      112rem 112rem;
    background-position:
      12% 45%,
      5% 103%,
      50% 100%,
      115% 37%;
  }
}

.content:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
  background: linear-gradient(180deg, #130625 0%, #1b0929 100%);
}

.title {
  color: var(--font-color);

  font-family: 'Stolzl';
  font-size: 16rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  margin-top: 24px;
  margin-bottom: 8px;
  @media screen and (min-width: 1920px) {
    padding-top: 47px;
  }
}

.title-span {
  display: block;
}
.text {
  color: var(--span-color);
  font-family: Stolzl;
  font-size: 16rem;
  line-height: 1;
  letter-spacing: 0.32px;
  text-transform: uppercase;
}
</style>
