<template>
  <section class="row-01">
    <div class="bg-layer"></div>

    <div class="block-control">
      <div v-for="n in 12" :key="n" class="block" :class="`block${n}`" ></div>
    </div>

    <div class="aniarea textani-LT">
      <img
        class="ani anitlogo"
        src="/images/logo/samphone-logo-02.png"
        alt=""
      />
    </div>

    <div class="aniarea textani-LT-02">
      <span class="ani anitsol">「音色與工藝的結晶」</span>
    </div>

    <div class="aniarea textani-LB">
      <span class="ani aniwe">We</span>
      <span class="ani aniare">are</span>
      <span class="ani anitech">technical</span>
      <span class="ani aniImp">Implement</span>
    </div>

    <div class="aniarea textani-RT">
      <img
        class="ani anitlogo"
        src="/images/logo/samphone-logo-02.png"
        alt=""
      />
    </div>

    <div class="aniarea textani-RB">
      <span class="ani anitpro">professionals</span>
    </div>

    <div class="aniarea textani-RM">
      <div class="circle mask-container">
        <img src="/images/bg/IMG_1118.jpg" class="masked-image" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// ========================================
// row-01
// ========================================
.row-01 {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: $color-white;
  background-color: $color-darkred;

  .bg-layer {
    position: absolute;
    inset: 0;
    background-image: url("/images/bg/IMG_0634.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: -1;
  }

  .block-control {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 100vw;
    height: 100vh;
  }

  .block {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-darkred;
    transform: scaleY(1);
    transform-origin: left bottom;
    
  }

  .aniarea {
    position: absolute;
    display: flex;
    align-items: center;
    height: 160px;
    overflow: hidden;
    z-index: 2;
  }

  .ani {
    display: inline-block;
    display: flex;
    align-items: center;
    height: 100%;
    color: $color-white;
    font-weight: bold;
    cursor: default;
    user-select: none;
    transition: all 0.3s ease;

    &:hover {
      color: $color-gold;
      font-weight: bolder;
    }
  }

  .textani-LB {
    left: 0;
    bottom: 0;
    width: calc(100% / 2);
    margin: 0 0 16px 16px;
    font-size: clamp(2rem, 8vw, 6rem);
  }

  .textani-LT {
    left: 0;
    top: 4%;
    width: calc(100% / 4);
    margin-left: 16px;

    .anitlogo {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  .textani-LT-02 {
    left: 25%;
    top: 12%;
    width: calc(100% / 4);
    height: 80px;
    margin-left: 16px;
    font-size: clamp(2rem, 2vw, 6rem);
    justify-content: center;
    align-items: end;
  }

  .textani-RT {
    right: 0;
    top: 4%;
    width: calc(100% / 4);
    margin-right: 16px;
    justify-content: flex-end;
  }

  .textani-RB {
    right: 0;
    bottom: 4%;
    width: calc(100% / 3);
    height: 100px;
    margin: 0 16px 16px 0;
    justify-content: flex-end;
  }

  .textani-RM {
    right: calc(12% + 50px);
    bottom: calc(12% + 70px);
    width: calc(100% / 4);
    height: calc(100% / 2.5 - 60px);
    overflow: visible;
  }

  .aniwe {
    font-size: clamp(2rem, 8vw, 8rem);
  }

  .aniare {
    margin-left: 24px;
    font-size: clamp(2rem, 8vw, 8rem);
  }

  .anitech {
    position: absolute;
    left: 0;
    font-size: clamp(2rem, 6vw, 7rem);
  }

  .aniImp {
    position: absolute;
    left: 0;
    font-size: clamp(2rem, 5vw, 6rem);
  }

  .anitpro {
    font-size: clamp(2rem, 4vw, 4rem);
  }

  .anitlogo {
    width: 90%;
    opacity: 0;
    object-fit: contain;
  }

  .anitsol {
    opacity: 0;
    font-size: clamp(12px, 2vw, 6rem);
  }

  .circle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border: 1px solid;
    border-radius: 50%;
    opacity: 0;
    clip-path: circle(80% at 50% 50%);
    transition: clip-path 0.3s ease;

    &:hover {
      clip-path: circle(100% at 50% 50%);
    }

    .masked-image {
      position: fixed;
      right: 0;
      bottom: 0;
      display: block;
      width: calc(100% / 2);
      height: calc(100% / 2 + 100px);
      object-fit: cover;
      object-position: right bottom;
    }
  }
}
</style>
