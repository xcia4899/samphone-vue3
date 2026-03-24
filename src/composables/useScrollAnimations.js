// src/composables/useScrollAnimations.js
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimations(enabledRef) {
  function initAnimations() {
    gsap.registerPlugin(ScrollTrigger)

    // 原本 rowSetAni / timeline 邏輯先搬進來
  }

  function cleanupAnimations() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    gsap.killTweensOf('*')
  }

  onMounted(async () => {
    if (!enabledRef.value) return
    await nextTick()
    initAnimations()
    window.addEventListener('resize', ScrollTrigger.refresh)
  })

  onBeforeUnmount(() => {
    cleanupAnimations()
    window.removeEventListener('resize', ScrollTrigger.refresh)
  })

  return { initAnimations, cleanupAnimations }
}