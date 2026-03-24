<template>
  <div class="background-fixed">
    <Swiper
      :modules="[EffectFade, Autoplay]"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :loop="true"
      :speed="3000"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      class="bg-swiper"
    >
      <SwiperSlide v-for="item in images" :key="item">
        <div class="slide-inner">
          <img :src="item" class="bg-image" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/bg/IMG_1891.jpg",
  "/images/bg/IMG_1907.jpg",
  "/images/bg/J_03795.jpg",
];
</script>

<style scoped lang="scss">
.background-fixed {
  // position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.bg-swiper {
  width: 100%;
  height: 100%;
}

.slide-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.35);

  transform: scale(1);
  animation: bgZoom 7s ease forwards;

  will-change: transform, opacity;
  backface-visibility: hidden;
}

:deep(.swiper-slide-active .bg-image) {
  animation: bgZoom 7s ease forwards;
}

@keyframes bgZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.12);
  }
}
</style>