<template>
  <section :class="sectionClass">
    <div class="section-inner" :class="{ reverse }">
      <div class="text-area">
        <h2 class="title">{{ title }}</h2>

        <p
          v-for="(text, index) in contents"
          :key="index"
          class="text-content"
        >
          {{ text }}
        </p>
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

<style lang="scss" scoped>
.row-02,
.row-03 {
  width: 100%;
  min-height: 100vh;
  background: #2b0702;
  color: #fff;
  padding: 0;
}

.section-inner {
  width: 100%;
  min-height: 100vh;
  display: flex;
}

.section-inner.reverse {
  flex-direction: row-reverse;
}

.text-area {
  width: 42%;
  min-height: 100vh;
  padding: 80px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.title {
  margin: 0 0 32px;
  font-size: clamp(2rem, 3vw, 3.5rem);
  font-weight: 700;
  line-height: 1.3;
}

.text-content {
  margin: 0 0 24px;
  font-size: 18px;
  line-height: 1.9;
  max-width: 42rem;
}

.img-control {
  width: 58%;
  min-height: 100vh;
}

.img-control img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    padding: 48px 24px;
  }

  .img-control {
    height: 50vh;
  }

  .title {
    margin-bottom: 24px;
    font-size: 32px;
  }

  .text-content {
    font-size: 16px;
    line-height: 1.8;
  }
}
</style>