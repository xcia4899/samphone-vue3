<template>
  <section class="row-04">
    <div class="hiddenarea">
      <div class="horizontal-area">
        <div
          v-for="(item, index) in carddata"
          :key="index"
          class="card cardani"
          :class="{ cardopen: openedCard === index }"
          @click="toggleCard(index)"
        >
          <div class="pic">
            <img :src="item.image" :alt="item.title" />

            <div v-if="openedCard !== index" class="undertext open">
              click Open
            </div>

            <div v-else class="undertext close">click Close</div>
          </div>

          <div v-if="openedCard === index" class="content-bg"></div>
          <div class="title">{{ item.title }}</div>

          <div v-if="openedCard === index" class="content">
            <p>{{ item.content }}</p>
            <img class="imagedetal" :src="item.imagedetal" :alt="item.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { processCards } from "../data/processCards";

const openedCard = ref(null);
const carddata = processCards;

function toggleCard(index) {
  openedCard.value = openedCard.value === index ? null : index;
}
</script>

<style lang="scss">
// ========================================
// row-04
// ========================================
.row-04 {
  height: calc(var(--vh, 1vh) * 100);
  padding: 16px;

  .hiddenarea {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .horizontal-area {
    display: flex;
    align-items: center;
    gap: 60px;
    width: 100%;
    min-width: 4000px;
    height: 100%;
    transform: translate(100vw, 0);

    .card {
      width: 300px;
      height: 60%;
      margin: 0 60px;
      padding: 0;
      color: $color-white;
      cursor: pointer;
      background-color: transparent;
      border-radius: 20px;
      box-shadow: 0 0 0 0 rgba($color-white, 1);
      transition: all 0.4s ease;

      .pic {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.4);
          transform: scale(1);
          transition: all 0.4s ease;
        }
      }

      .title {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        white-space: nowrap;
        font-size: 36px;
        font-weight: 900;
        letter-spacing: 3px;
        color: $color-white;
        text-shadow:
          -1px -1px 0 $color-darkred,
          1px -1px 0 $color-darkred,
          -1px 1px 0 $color-darkred,
          1px 1px 0 $color-darkred;
        transition: all 0.4s ease;
      }

      .content {
        position: absolute;
        left: 0;
        top: 72px;
        width: 40%;
        padding: 32px;
        color: $color-white;
        line-height: 1.5;
        letter-spacing: 0.03em;
        word-break: break-word;
        white-space: normal;
        text-align: justify;
        opacity: 0;
        transition: all 0.4s ease 1s;
        animation: contentani 1s ease-in forwards;
      }

      .imagedetal {
        position: absolute;
        left: 10%;
        bottom: 32px;
        width: 80%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 8px;
      }

      .content-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 40%;
        height: 100%;
        background-color: rgba($color-darkred, 0.5);
        backdrop-filter: blur(4px);
      }

      .undertext {
        position: absolute;
        top: 0;
        padding: 8px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
        background-color: rgba($color-lightkred, 0.4);
        backdrop-filter: blur(2px);
        transform: translateY(-100%);
        transition: all 0.3s ease-out;
      }

      .open {
        top: 8px;
        right: 8px;
        width: calc(100% - 16px);
        padding: 4px 16px;
        border-radius: 20px;
        transform: translateY(-130%);

        &:hover {
          background-color: rgba($color-lightkred, 0.8);
        }
      }

      .close {
        top: 16px;
        right: 16px;
        padding: 4px 12px;
        border-radius: 8px;
        transform: translateY(-150%);
        background-color: rgba($color-lightkred, 0.6);

        &:hover {
          background-color: rgba($color-lightkred, 0.8);
        }
      }

      &:hover {
        img {
          filter: brightness(0.6);
          transform: scale(1.1);
        }

        .title {
          top: calc(20% - 8px);
          font-size: 40px;
        }

        .undertext {
          transform: translateY(0%);
        }
      }
    }

    .card.cardopen {
      width: 900px;
      height: 600px;
      margin: 0;
      border-radius: 8px;

      .pic {
        border-radius: 8px;

        img {
          filter: brightness(1);
          border-radius: 8px;
        }
      }

      .title {
        top: 60px;
        left: 30%;
      }

      .content {
        top: 120px;
        width: 40%;
        height: calc(100% - 120px);
        padding: 32px;
      }

      &:hover {
        box-shadow: none;

        img {
          filter: brightness(1);
          transform: scale(1);
        }

        .title {
          top: 60px;
          font-size: 36px;
        }

        .undertext {
          transform: translateY(0%);
        }
      }
    }
  }
}

@keyframes contentani {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

// ========================================
// decorative card border
// ========================================
.cardani {
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }

  &::before {
    top: -20px;
    left: -20px;
    border-top: 2px solid $color-white;
    border-left: 2px solid $color-white;
    transition: all 0.3s linear;
    animation: cardborderauto 2s ease-out infinite;
  }

  &::after {
    right: -20px;
    bottom: -20px;
    border-right: 2px solid $color-white;
    border-bottom: 2px solid $color-white;
    transition: all 0.3s ease;
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
    border-radius: 20px;
  }
}
</style>
