<template>
  <div>
    <IntroScreen v-if="!introPlayed" @finished="handleIntroFinished" />

    <div v-else class="bodyback">
      <SiteHeader />
      <BackgroundCarousel />
      <HeroSection />

      <StorySection
        section-class="row-02"
        image-class="r2-img"
        image="/images/bg/IMG_1118.jpg"
        title="勝風樂器｜Samphone"
        :contents="row02Contents"
      />

      <StorySection
        section-class="row-03"
        image-class="r3-img"
        image="/images/bg/IMG_1907.jpg"
        title="工藝與音色的堅持"
        :contents="row03Contents"
        reverse
      />

      <ProcessSection />
      <ProductSection />
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

import IntroScreen from "./components/IntroScreen.vue";
import HeroSection from "./components/HeroSection.vue";
import BackgroundCarousel from "./components/BackgroundCarousel.vue";
import StorySection from "./components/StorySection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ProductSection from "./components/ProductSection.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

import { useGsapAnimations } from "./hooks/gsapAnimations";

const introPlayed = ref(false);

const row02Contents = [
  "勝風樂器有限公司成立於 1995 年，創辦人原本是一位專業的樂器加工師傅，長年專注於薩克斯風零件的焊接與製造。",
  "憑藉多年累積的技術與經驗，逐步建立起自有的製造流程，從零件加工到整體組裝，持續精進每一道工序。",
  "品牌一路走來，始終堅持以工藝為本，將對音色與品質的要求，落實在每一件樂器之中。",
];

const row03Contents = [
  "從鑄造、焊接、研磨、刻花、拋光到上漆與組裝，每一個製程都影響最終的音色表現與手感。",
  "我們重視材料、結構與細節處理，讓樂器不只具備穩定性，也能在演奏時展現細膩而有層次的共鳴。",
  "這不只是製造流程，更是對工藝與聲音的長期累積。",
];

const { setVhUnit, initAnimations, clearAnimations, refreshAnimations } =
  useGsapAnimations();

async function handleIntroFinished() {
  introPlayed.value = true;
  document.body.classList.remove("no-scroll");

  await nextTick();
  setVhUnit();
  initAnimations();

  setTimeout(() => {
    refreshAnimations();
  }, 100);
}

function onResize() {
  setVhUnit();
  clearAnimations();

  if (introPlayed.value) {
    initAnimations();
    refreshAnimations();
  }
}

onMounted(() => {
  document.body.classList.add("no-scroll");
  setVhUnit();
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  document.body.classList.remove("no-scroll");
  window.removeEventListener("resize", onResize);
  clearAnimations();
});
</script>

<style lang="scss">
.bodyback {
  position: relative;
}
</style>
