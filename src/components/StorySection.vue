<template>
  <section :class="sectionClass">
    <div class="section-inner" :class="{ reverse }">
      <div class="text-area">
        <span class="section-kicker">Samphone Story</span>

        <h2 class="title">{{ title }}</h2>

        <div class="title-line"></div>

        <p
          v-for="(text, index) in contents"
          :key="index"
          class="text-content"
        >
          {{ text }}
        </p>
      </div>

      <div class="img-control" :class="imageClass">
        <div class="img-frame">
          <img :src="image" :alt="title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  sectionClass: { type: String, required: true },
  imageClass: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  contents: { type: Array, required: true },
  reverse: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped>
.row-02,
.row-03 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(255, 140, 80, 0.12), transparent 35%),
    radial-gradient(circle at bottom right, rgba(255, 180, 120, 0.08), transparent 30%),
    linear-gradient(135deg, #551007 0%, #2b0702 45%, #140403 100%);
}

.section-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
}

.section-inner.reverse {
  flex-direction: row-reverse;
}

.text-area {
  width: 42%;
  min-height: 100vh;
  padding: 100px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.section-kicker {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 13px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #f3c7a7;
  opacity: 0.9;
}

.title {
  margin: 0;
  font-size: clamp(2rem, 2.4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-wrap: balance;
}

.title-line {
  width: 72px;
  height: 3px;
  margin: 28px 0 32px;
  border-radius: 999px;
  background: linear-gradient(90deg, #ffb27a, #ffd7b8);
  box-shadow: 0 0 16px rgba(255, 178, 122, 0.3);
}

.text-content {
  margin: 0 0 20px;
  max-width: 40rem;
  font-size: 17px;
  line-height: 2;
  color: rgba(255, 245, 240, 0.9);
  letter-spacing: 0.02em;
}

.text-content:last-child {
  margin-bottom: 0;
}

.img-control {
  width: 58%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px;
  box-sizing: border-box;
}

.img-frame {
  position: relative;
  width: 100%;
  height: min(78vh, 860px);
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 220, 200, 0.14);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.img-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(20, 4, 3, 0.22),
    rgba(20, 4, 3, 0.02) 35%,
    rgba(255, 255, 255, 0.04)
  );
}

.img-frame::after {
  content: "";
  position: absolute;
  inset: 14px;
  z-index: 2;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.img-control img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 0.8s ease;
}

@media (hover: hover) {
  .img-frame:hover img {
    transform: scale(1.06);
  }
}

.img-frame:active img {
  transform: scale(1.06);
}

/* 平板 */
@media (max-width: 1024px) {
  .text-area {
    width: 46%;
    padding: 80px 40px;
  }

  .img-control {
    width: 54%;
    padding: 40px;
  }

  .img-frame {
    height: 70vh;
  }
}

/* 手機版 */
@media (max-width: 768px) {
  .section-inner,
  .section-inner.reverse {
    flex-direction: column;
  }

  .text-area,
  .img-control {
    width: 100%;
    min-height: auto;
  }

  .text-area {
    padding: 24px 24px 0px;
  }

  .img-control {
    padding: 0 24px ;
    // position: relative;
    align-items: flex-start;
  }

  .img-frame {
    // top: 0px;
    height: 44vh;
    min-height: 280px;
    border-radius: 20px;
  }

  .title {
    font-size: 32px;
  }

  .title-line {
    width: 56px;
    margin: 20px 0 24px;
  }

  .text-content {
    font-size: 16px;
    line-height: 1.9;
  }

  .section-kicker {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
}
</style>
