<template>
  <section :class="sectionClass">
    <div class="section-inner" :class="{ reverse }">
      <div class="text-area">
        <div class="title">{{ title }}</div>

        <div
          v-for="(text, index) in contents"
          :key="index"
          class="text-content"
          :class="`content-0${index + 1}`"
        >
          {{ text }}
        </div>
      </div>

      <div class="img-control" :class="imageClass">
        <img :src="image" :alt="title" />
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

<style lang="scss">
// ========================================
// row-02 / row-03
// ========================================
.row-02,
.row-03 {
  height:  100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: $color-white;
  padding: 0 48px;

  .section-inner {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 0;
  }

  .section-inner.reverse {
    flex-direction: row-reverse;
  }

  .text-area {
    width: 0%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    cursor: ns-resize;
    scrollbar-width: none;
    -ms-overflow-style: none;
    @include textset;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .title,
  .text-content {
    opacity: 0;
    transform: translateY(32px);
  }

  .title {
    margin: 0 0 24px;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 900;

    &:hover {
      color: $color-gold;
    }
  }

  .text-content {
    max-width: 42rem;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 1.9;
  }

  .img-control {
    padding: 0;
  }
}
</style>
