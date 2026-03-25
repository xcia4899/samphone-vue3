<template>
  <section class="row-05">
    <div v-for="item in products" :key="item.title" class="card">
      <img :src="item.image" :alt="item.title" />
      <div class="title" v-html="item.title" ></div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    title: "中音薩克斯風 <br />(Alto Saxophone)",
    image: "/images/row5/IMG_0640.jpg",
  },
  {
    title: "次中音薩克斯風 <br />(Tenor Saxophone)",
    image: "/images/row5/IMG_0639.jpg",
  },
  {
    title: "薩克斯風配件",
    image: "/images/bg/IMG_1907.jpg",
  },
];
</script>

<style lang="scss">
// ========================================
// row-05
// ========================================
.row-05 {
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: space-around;
  align-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 80px 32px;
  white-space: normal;
  background: #551007;
  .card {
    width: 25%;
    min-width: 280px;
    padding: 0;
    aspect-ratio: 3 / 5;
    color: $color-white;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.6s ease-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 20px;
      filter: brightness(0.6);
    }

    .title {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 8px 20px;
      font-size: 20px;
      font-weight: 800;
      line-height: 1.5;
      text-align: center;
      background-color: rgba($color-darkred, 0.8);
      backdrop-filter: blur(2px);
      border-radius: 20px;

      &:hover {
        color: $color-gold;
      }
    }

    &:hover {
      box-shadow: 0 0 0 8px rgba($color-white, 1);

      img {
        filter: brightness(0.8);
      }
    }
  }
}
</style>
