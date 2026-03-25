<template>
  <section class="row-05">
    <!-- 新增：標題區 -->
    <div class="section-header">
      <div class="sub">PRODUCTS</div>
      <h2 class="main-title">商品目錄</h2>
      <div class="divider"></div>
    </div>

    <!-- 原本卡片 -->
    <div v-for="item in products" :key="item.title" class="card">
      <div class="card-frame">
        <img :src="item.image" :alt="item.title" />

        <div class="card-overlay"></div>
        <div class="card-glow"></div>

        <div class="title" v-html="item.title"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { publicUrl } from "../utils/publicUrl";

const products = [
  {
    title: "中音薩克斯風 <br />(Alto Saxophone)",
    image: publicUrl("images/row5/IMG_0640.jpg"),
  },
  {
    title: "次中音薩克斯風 <br />(Tenor Saxophone)",
    image: publicUrl("images/row5/IMG_0639.jpg"),
  },
  {
    title: "薩克斯風配件",
    image: publicUrl("images/bg/IMG_1907.jpg"),
  },
];
</script>

<style lang="scss">
// ========================================
// row-05（完整整合版）
// ========================================
.row-05 {
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 48px;
  padding: 32px 32px;
  overflow: hidden;

  background:
    radial-gradient(circle at top, rgba(255, 210, 120, 0.08), transparent 30%),
    linear-gradient(180deg, #4a0c05 0%, #551007 45%, #2f0703 100%);

  // ========================================
  // header
  // ========================================
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
      font-size: 36px;
      font-weight: 900;
      letter-spacing: 0.08em;
      color: $color-white;
      position: relative;
      display: inline-block;

      &::before {
        right: 100%;
        margin-right: 16px;
      }

      &::after {
        left: 100%;
        margin-left: 16px;
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

  // ========================================
  // 卡片
  // ========================================
  .card {
    position: relative;
    width: 26%;
    min-width: 280px;
    max-width: 360px;
    aspect-ratio: 3 / 5;
    cursor: pointer;
    border-radius: 24px;
    transition: transform 0.5s ease, filter 0.5s ease;

    .card-frame {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.04);
      box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.35),
        inset 0 0 0 1px rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(4px);

      // 內框線
      &::before {
        content: "";
        position: absolute;
        inset: 12px;
        border: 1px solid rgba(255, 215, 140, 0.22);
        border-radius: 18px;
        z-index: 3;
        pointer-events: none;
      }

      // 掃光
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -120%;
        width: 60%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent 0%,
          rgba(255, 255, 255, 0.16) 50%,
          transparent 100%
        );
        transform: skewX(-20deg);
        z-index: 4;
        pointer-events: none;
        transition: left 0.8s ease;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transform: scale(1);
      filter: brightness(0.48) saturate(0.75);
      transition: transform 0.8s ease, filter 0.6s ease;
    }

    // 遮罩
    .card-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.08) 0%,
          rgba(0, 0, 0, 0.12) 38%,
          rgba(54, 8, 3, 0.3) 60%,
          rgba(26, 5, 2, 0.88) 100%
        );
    }

    // 光暈
    .card-glow {
      position: absolute;
      inset: auto 0 0 0;
      height: 42%;
      z-index: 2;
      background: radial-gradient(
        circle at 50% 100%,
        rgba(255, 206, 122, 0.22) 0%,
        rgba(255, 180, 90, 0.08) 35%,
        transparent 72%
      );
      pointer-events: none;
      transition: opacity 0.5s ease;
      opacity: 0.7;
    }

    // 標題
    .title {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 5;
      padding: 18px 18px 16px;
      color: $color-white;
      font-size: 18px;
      font-weight: 800;
      line-height: 1.45;
      text-align: center;
      letter-spacing: 0.04em;

      background: linear-gradient(
        180deg,
        rgba(92, 19, 9, 0.4) 0%,
        rgba(58, 10, 5, 0.2) 100%
      );

      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 220, 160, 0.2);
      border-radius: 0 0 18px 18px ;

      box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);

      &::before {
        content: "";
        position: absolute;
        top: -1px;
        left: 16px;
        right: 16px;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 225, 170, 0.7) 50%,
          transparent 100%
        );
      }

      :deep(br) {
        display: block;
        margin-bottom: 4px;
      }
    }

    // hover
    &:hover {
      transform: translateY(-4px);

      .card-frame {
        box-shadow:
          0 24px 50px rgba(0, 0, 0, 0.45),
          0 0 0 1px rgba(255, 220, 150, 0.2),
          0 0 28px rgba(255, 187, 94, 0.18);

        &::after {
          left: 150%;
        }
      }

      img {
        transform: scale(1.06);
        filter: brightness(0.94) saturate(1.05);
      }

      .card-glow {
        opacity: 1;
      }

      .title {
        color: $color-gold;
        border-color: rgba(255, 220, 160, 0.38);
      }
    }
  }

  // ========================================
  // 背景裝飾
  // ========================================
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        120deg,
        transparent 0%,
        rgba(255, 255, 255, 0.03) 25%,
        transparent 50%,
        rgba(255, 215, 120, 0.03) 75%,
        transparent 100%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60%;
    height: 200px;
    transform: translateX(-50%);
    background: radial-gradient(
      circle,
      rgba(255, 200, 120, 0.08),
      transparent 70%
    );
    pointer-events: none;
  }
}

// ========================================
// RWD
// ========================================
@media (max-width: 992px) {
  .row-05 {
    gap: 24px;
    padding: 96px 24px;

    .card {
      width: calc(50% - 12px);

      .title {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 640px) {
  .row-05 {
    padding: 72px 20px;

    .card {
      width: 100%;
      max-width: 420px;
      aspect-ratio: 4 / 5;

      .title {
        left: 16px;
        right: 16px;
        bottom: 16px;
        padding: 16px 14px;
        font-size: 18px;
      }
    }
  }
}
</style>