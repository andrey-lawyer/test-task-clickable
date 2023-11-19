<template>
  <section class="section_registration">
    <div class="section_part_one">
      <InfoDeposit />
    </div>
    <div class="section_part_two"></div>
    <div class="lolipop"></div>
    <div class="ship"></div>
  </section>
</template>

<script setup lang="ts">
import InfoDeposit from './InfoDeposit.vue'
</script>

<style>
.section_registration {
  position: relative;
  z-index: 99999;
  display: grid;
  grid-template-rows: 1fr 1fr;

  background-image: url('/decor-images/star2-1.png'), url('/decor-images/star1.png'),
    url('/decor-images/diamond-1.png'), url('/decor-images/brilliant-1.png');

  background-repeat: no-repeat;

  background-size:
    84rem 50rem,
    74rem 45rem,
    170rem 170rem,
    80rem 80rem;
  background-position:
    103% 6%,
    103% 41%,
    -15% 41%,
    93% 44.5%;

  animation: stars 20s linear infinite;
  @media screen and (min-width: 1920px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;

    background-size:
      104rem 70rem,
      94rem 65rem,
      380rem 380rem,
      180rem 180rem;

    background-position:
      37% 84%,
      43% 17%,
      -10% 44%,
      32% 94.5%;
  }

  background-color: var(--background-color);
}

.lolipop {
  @media screen and (min-width: 1920px) {
    position: absolute;
    background-image: url('/decor-images/lollipop-1.png');
    width: 244rem;
    height: 212rem;
    background-size: 244rem 212rem;
    background-position: 0 0;
    left: 45%;
    top: 35%;
    z-index: 1;
    animation: rotate 5s linear infinite;
  }
}
@media screen and (min-width: 1920px) {
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.ship {
  @media screen and (min-width: 1920px) {
    position: absolute;
    background-image: url('/decor-images/ship-1.png');
    width: 251rem;
    height: 297em;
    background-size: 251rem 297rem;
    background-position: 0 0;
    left: 46%;
    top: -10%;
    z-index: 1;
  }
}
.section_part_one {
  padding-left: 16rem;
  padding-right: 16rem;
  padding-top: 56rem;
  padding-bottom: 127rem;

  @media screen and (min-width: 1920px) {
    padding-left: 222rem;
    padding-right: 222rem;
    padding-top: 148rem;
    padding-bottom: 304rem;
  }
}

.section_part_two {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/decor-images/lollipop-1.png'), url('/decor-images/girl.png'),
    url('/decor-images/ball-1.png'), url('/decor-images/text.png'), url('/decor-images/ship-1.png'),
    url('/images/background.png');
  background-size:
    74rem 64rem,
    280rem 280rem,
    170rem 170rem,
    113rem 56rem,
    77rem 91rem,
    100% 100%;
  background-position:
    0 100%,
    30% 100%,
    135% 20%,
    50% 12%,
    -10% 12%,
    center;
  @media screen and (min-width: 1920px) {
    background-image: url('/decor-images/girl.png'), url('/decor-images/ball-1.png'),
      url('/decor-images/text.png'), url('/images/background.png');
    background-size:
      610rem 610rem,
      545rem 545rem,
      217rem 111rem,
      100% 100%;
    background-position:
      30% 100%,
      148% 20%,
      50% 22%,
      center;
  }
  animation: images 20s linear infinite;
}

@keyframes images {
  0% {
    background-position:
      0 100%,
      30% 100%,
      135% 20%,
      50% 12%,
      -10% 12%,
      center;
  }
  50% {
    background-position:
      100% 100%,
      30% 100%,
      135% 20%,
      50% 28%,
      -10% 12%,
      center;
  }
  100% {
    background-position:
      0 100%,
      30% 100%,
      135% 20%,
      50% 12%,
      -10% 12%,
      center;
  }
}
@keyframes stars {
  0% {
    background-position:
      103% 6%,
      103% 41%,
      -15% 41%,
      93% 44.5%;
  }
  25% {
    background-position:
      10% 31%,
      50% 30%,
      -15% 41%,
      93% 44.5%;
  }
  50% {
    background-position:
      10% 41%,
      70% 50%,
      -15% 41%,
      93% 44.5%;
  }
  75% {
    background-position:
      -15% 41%,
      30% 30%,
      -15% 41%,
      93% 44.5%;
  }
  100% {
    background-position:
      103% 6%,
      103% 41%,
      -15% 41%,
      93% 44.5%;
  }
}
@media screen and (min-width: 1920px) {
  @keyframes stars {
    0% {
      background-position:
        37% 84%,
        43% 17%,
        -10% 44%,
        32% 94.5%;
    }
    25% {
      background-position:
        10% 31%,
        50% 30%,
        -10% 44%,
        32% 94.5%;
    }
    50% {
      background-position:
        10% 41%,
        70% 50%,
        -10% 44%,
        32% 94.5%;
    }
    75% {
      background-position:
        -15% 41%,
        30% 30%,
        -10% 44%,
        32% 94.5%;
    }
    100% {
      background-position:
        37% 84%,
        43% 17%,
        -10% 44%,
        32% 94.5%;
    }
  }
}
</style>
