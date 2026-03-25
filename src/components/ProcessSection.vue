<template>
  <section class="row-04">
    <div class="section-header">
      <div class="sub">HOW IT'S MADE</div>
      <h1 class="main-title">製作流程</h1>
      <div class="divider"></div>
    </div>
    <div class="process-inner">
      <Swiper
        class="process-swiper"
        :modules="[Navigation]"
        :slides-per-view="'auto'"
        :space-between="60"
        :centered-slides="false"
        :grab-cursor="true"
        :navigation="true"
        :scrollbar="{ draggable: true }"
      >
        <SwiperSlide
          v-for="(item, index) in carddata"
          :key="index"
          class="process-slide"
        >
          <article class="card cardani" @click="openCard(item)">
            <div class="pic">
              <img :src="item.image" :alt="item.title" />
              <div class="undertext">click Open</div>
            </div>

            <h3 class="title">{{ item.title }}</h3>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- 彈出內容 -->
    <transition name="fade">
      <div v-if="selectedCard" class="process-modal" @click.self="closeCard">
        <div class="process-modal-box">
          <button class="close-btn" @click="closeCard">✕</button>

          <div class="modal-left">
            <img
              class="modal-main-image"
              :src="selectedCard.image"
              :alt="selectedCard.title"
            />
          </div>

          <div class="modal-right">
            <h3 class="modal-title">{{ selectedCard.title }}</h3>
            <p class="modal-content">{{ selectedCard.content }}</p>

            <img
              v-if="selectedCard.imagedetal"
              class="modal-detail-image"
              :src="selectedCard.imagedetal"
              :alt="selectedCard.title"
            />
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { processCards } from "../data/processCards";

import "swiper/css";
import "swiper/css/navigation";

type ProcessCard = {
  title: string;
  image: string;
  content: string;
  imagedetal?: string;
};

const carddata = processCards as ProcessCard[];

const selectedCard = ref<ProcessCard | null>(null);

function openCard(item: ProcessCard) {
  selectedCard.value = item;
  document.body.style.overflow = "hidden";
}

function closeCard() {
  selectedCard.value = null;
  document.body.style.overflow = "";
}
</script>

<style lang="scss">
.row-04 {
  min-height: 100vh;
  padding: 32px;
  background: $color-darkred;
  background: linear-gradient(#2b0702, #551007);
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // place-items: center;
  .process-inner {
    height: 100%;
    display: grid;
    place-items: center;
  }
  .row-04-title {
    padding: 16px;
    margin: 0;
  }
  .process-swiper {
    height: 100%;
    width: 100%;
    padding: 0 40px;
  }

  .process-slide {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 96%; // 往下
    transform: translateY(-50%);
  }

  .card {
    position: relative;
    width: 300px;
    height: 520px;
    border-radius: 20px;
    // overflow: hidden;
    cursor: pointer;
    color: $color-white;
    transition:
      transform 0.35s ease,
      box-shadow 0.35s ease;

    &:hover {
      .pic img {
        transform: scale(1.05);
        filter: brightness(0.8);
      }

      .undertext {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .pic {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.45);
        transition:
          transform 0.4s ease,
          filter 0.4s ease;
      }
    }

    .title {
      position: absolute;
      left: 50%;
      top: 18%;
      transform: translateX(-50%);
      z-index: 2;
      white-space: nowrap;
      font-size: 34px;
      font-weight: 900;
      letter-spacing: 3px;
      color: $color-white;
      text-shadow:
        -1px -1px 0 $color-darkred,
        1px -1px 0 $color-darkred,
        -1px 1px 0 $color-darkred,
        1px 1px 0 $color-darkred;
    }

    .undertext {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 2;
      padding: 6px 12px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 600;
      color: $color-white;
      background-color: rgba($color-lightkred, 0.45);
      backdrop-filter: blur(2px);
      opacity: 0;
      transform: translateY(-12px);
      transition: all 0.3s ease;
    }
  }
}

/* modal */
.process-modal {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
}

.process-modal-box {
  position: relative;
  width: min(1100px, 92vw);
  max-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(20, 20, 20, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.14);
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
}

.modal-left {
  min-height: 580px;

  .modal-main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.modal-right {
  padding: 72px 32px 32px;
  // overflow-y: auto;
  color: $color-white;

  .modal-title {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .modal-content {
    margin-bottom: 24px;
    line-height: 1.8;
    text-align: justify;
    white-space: pre-line;
  }

  .modal-detail-image {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    display: block;
  }
}

/* 動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 手機版 */
@media (max-width: 768px) {
  .row-04 {
    .process-swiper {
      padding: 0 12px;
    }

    .process-slide {
      width: 78vw;
    }

    .card {
      width: 60vw;
      height: 420px;

      .title {
        font-size: 26px;
      }
    }
  }

  .process-modal-box {
    grid-template-columns: 1fr;
    width: 94vw;
    max-height: 88vh;
  }

  .modal-left {
    min-height: 240px;
    max-height: 280px;
  }

  .modal-right {
    padding: 56px 20px 20px;

    .modal-title {
      font-size: 24px;
    }
  }
}

/* 你原本的外框動畫可保留 */
.cardani {
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    pointer-events: none;
    box-sizing: border-box;
  }

  &::before {
    top: -20px;
    left: -20px;
    border-top: 2px solid #79352c;
    border-left: 2px solid #79352c;
    animation: cardborderauto 2s ease-out infinite;
  }

  &::after {
    right: -20px;
    bottom: -20px;
    border-right: 2px solid #79352c;
    border-bottom: 2px solid #79352c;
    animation: cardborderauto 2s ease-out infinite;
  }

  &:hover::before,
  &:hover::after {
    animation: cardborderani 1s ease-out forwards;
  }
}

@keyframes cardborderauto {
  0% {
    width: 20px;
    height: 20px;
    border-width: 4px;
  }
  50% {
    width: 12px;
    height: 12px;
  }
  100% {
    width: 20px;
    height: 20px;
    border-width: 4px;
  }
}

@keyframes cardborderani {
  0% {
    width: 20px;
    height: 20px;
    border-radius: 0;
  }
  70% {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 0;
  }
  100% {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 30px;
  }
}


// =========================
// header（只影響 title）
// =========================
.section-header {
  width: 100%;
  text-align: center;
  margin-bottom: 48px;
  position: relative;

  .sub {
    font-size: 12px;
    letter-spacing: 0.4em;
    color: rgba($color-gold, 0.6);
    margin-bottom: 12px;
  }

  .main-title {
    font-size: clamp(34px, 5vw, 64px);
    font-weight: 900;
    letter-spacing: 0.12em;
    color: $color-white;
    position: relative;
    display: inline-block;

    &::before {
      right: 100%;
      margin-right: 20px;
    }

    &::after {
      left: 100%;
      margin-left: 20px;
    }
  }

  .divider {
    width: 120px;
    height: 2px;
    margin: 20px auto 0;
    background: linear-gradient(
      90deg,
      transparent,
      $color-gold,
      transparent
    );
    opacity: 0.8;
  }
}

/* 卡片標題下短裝飾線 */
.row-04 .card .title::after {
  content: "";
  display: block;
  width: 54px;
  height: 2px;
  margin: 10px auto 0;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 223, 210, 0.95),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 0 10px rgba(255, 190, 160, 0.28);
}

/* swiper 按鈕加一點質感 */
.row-04 .swiper-button-prev,
.row-04 .swiper-button-next {
  width: 46px;
  height: 46px;
  padding: 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.row-04 .swiper-button-prev::after,
.row-04 .swiper-button-next::after {
  font-size: 18px;
  font-weight: 800;
}

/* 手機版避免裝飾太擠 */
@media (max-width: 768px) {
  .row-04::before {
    top: 20px;
    left: 10px;
    width: 140px;
    height: 140px;
  }

  .row-04::after {
    right: 0;
    bottom: 20px;
    width: 180px;
    height: 180px;
  }

  .row-04 .row-04-title {
    padding: 14px 18px 20px;
    letter-spacing: 4px;
  }
}
</style>
