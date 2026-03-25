<!-- IntroScreen.vue -->
<template>
  <div class="intro" @animationend="onAnimationEnd">
    <div class="intro-logo">
      <img :src="logoSrc" alt="" />
    </div>
  </div>
</template>

<script setup>
import { publicUrl } from "../utils/publicUrl";

const logoSrc = publicUrl("images/logo/samphone-logo.png");

const emit = defineEmits(["finished"]);

function onAnimationEnd(event) {
  if (event.animationName === "fadeOut") {
    emit("finished");
  }
}
</script>

<style lang="scss">

body.no-scroll {
  overflow: hidden;
  background-image: $color-darkred;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}

.intro {
  position: fixed;
  inset: 0;
  background-color: $color-darkred;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeOut 3s ease 0.5s forwards;

  .intro-logo {
    position: absolute;
    animation: fadeIn 3.5s ease forwards;
    max-width: 200px;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);

    img {
      width: 100%;
      max-width: 200px;
      display: block;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }

  60% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(3);
  }

  100% {
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(60);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
