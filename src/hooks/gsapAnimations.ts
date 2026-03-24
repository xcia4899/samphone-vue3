// src/hooks/useGsapAnimations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollConfig = {
  trigger?: string;
  start: string;
  end: string;
  pin?: boolean;
};

type RowAnimationStep = {
  animation: gsap.TweenVars;
  scroll: ScrollConfig;
  markers?: boolean;
};

type RowAnimationItem = {
  selector: string;
  trigger?: string;
  steps: RowAnimationStep[];
};

type TimelineItem = {
  selector: string;
  initial?: gsap.TweenVars | null;
  steps: gsap.TweenVars[];
  scrollTrigger: {
    trigger?: string;
    start: string;
    end: string;
  };
  markers?: boolean;
};

export function useGsapAnimations() {
  function setVhUnit() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  function scrollAnimation(
    selector: string,
    animation: gsap.TweenVars,
    scroll: ScrollConfig,
    trigger?: string,
    markers = false,
  ) {
    gsap.to(selector, {
      ...animation,
      scrollTrigger: {
        trigger: trigger || scroll.trigger || selector,
        start: scroll.start,
        end: scroll.end,
        scrub: true,
        pin: scroll.pin || false,
        markers,
      },
    });
  }

  function scrollTimeline(
    selector: string,
    initial: gsap.TweenVars | null | undefined,
    steps: gsap.TweenVars[],
    scroll: {
      trigger?: string;
      start: string;
      end: string;
    },
    markers = false,
  ) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scroll.trigger || selector,
        start: scroll.start,
        end: scroll.end,
        scrub: true,
        markers,
      },
    });

    if (initial) {
      tl.set(selector, initial);
    }

    steps.forEach((step) => {
      tl.to(selector, { ...step });
    });
  }

  function rowSetAni() {
    let rows: RowAnimationItem[] = [];

    if (window.innerWidth <= 670) {
      rows = [
        {
          selector: ".background-fixed",
          steps: [
            {
              animation: { top: 300 },
              scroll: { start: "top top", end: "+=1000" },
            },
          ],
        },
        {
          selector: ".row-01",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=6400", pin: true },
            },
          ],
        },
        {
          selector: ".row-01 .bg-layer",
          steps: [
            {
              animation: { opacity: 1 },
              scroll: { start: "top top", end: "+=500" },
            },
          ],
        },

        {
          selector: ".row-02",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=4000", pin: true },
            },
          ],
        },
        {
          selector: ".row-02 .r2-img",
          steps: [
            {
              animation: { height: "50%", width: "100%", padding: 16 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area",
          steps: [
            {
              animation: { height: "50%", width: "100%", padding: 48 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=600 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-01",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1000 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-02",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1400 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-03",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1800 top", end: "+=600" },
            },
          ],
        },

        {
          selector: ".row-03",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=4000", pin: true },
            },
          ],
        },
        {
          selector: ".row-03 .r3-img",
          steps: [
            {
              animation: { height: "50%", width: "100%", padding: 16 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area",
          steps: [
            {
              animation: { height: "50%", width: "100%", padding: 48 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=600 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-01",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1000 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-02",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1400 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-03",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1800 top", end: "+=600" },
            },
          ],
        },

        {
          selector: ".row-04",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=4600", pin: true },
            },
          ],
        },
        {
          selector: ".row-04 .horizontal-area",
          steps: [
            {
              animation: { x: "-96%" },
              scroll: { start: "top 20%", end: "+=4600" },
            },
          ],
        },

        {
          selector: ".row-05",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=1000", pin: true },
            },
          ],
        },
      ];
    } else {
      rows = [
        {
          selector: ".background-fixed",
          steps: [
            {
              animation: { top: 200 },
              scroll: { start: "top top", end: "+=1000" },
            },
          ],
        },
        {
          selector: ".row-01",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=7000", pin: true },
            },
          ],
        },
        {
          selector: ".row-01 .bg-layer",
          steps: [
            {
              animation: { opacity: 1 },
              scroll: { start: "top top", end: "+=500" },
            },
          ],
        },

        {
          selector: ".row-02",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=3500", pin: true },
            },
          ],
        },
        {
          selector: ".row-02 .r2-img",
          steps: [
            {
              animation: { width: "60%", padding: 16 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area",
          steps: [
            {
              animation: { width: "40%", padding: 48 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=600 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-01",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1000 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-02",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1400 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-03",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1800 top", end: "+=600" },
            },
          ],
        },

        {
          selector: ".row-03",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=3500", pin: true },
            },
          ],
        },
        {
          selector: ".row-03 .r3-img",
          steps: [
            {
              animation: { width: "60%", padding: 16 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area",
          steps: [
            {
              animation: { width: "40%", padding: 48 },
              scroll: { start: "top+=200 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=600 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-01",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1000 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-02",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1400 top", end: "+=600" },
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-03",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1 },
              scroll: { start: "top+=1800 top", end: "+=600" },
            },
          ],
        },

        {
          selector: ".row-04",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=4600", pin: true },
            },
          ],
        },
        {
          selector: ".row-04 .horizontal-area",
          steps: [
            {
              animation: { x: "-72%" },
              scroll: { start: "top 20%", end: "+=4600" },
            },
          ],
        },

        {
          selector: ".row-05",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=1200", pin: true },
            },
          ],
        },
      ];
    }

    rows.forEach(({ selector, steps, trigger }) => {
      steps.forEach(({ animation, scroll, markers }) => {
        scrollAnimation(selector, animation, scroll, trigger, markers);
      });
    });
  }

  function row01BlockTimeline() {
    const blocks: TimelineItem[] = [
      {
        selector: ".circle",
        initial: { opacity: 0, left: "0%", top: "100%" },
        steps: [
          { opacity: 1, left: "0%", top: "0%", duration: 16 },
          { opacity: 1, left: "0%", top: "0%", duration: 6 },
          { opacity: 1, left: "100%", top: "0%", duration: 20 },
          { opacity: 1, left: "100%", top: "0%", duration: 6 },
          { opacity: 1, left: "100%", top: "100%", duration: 16 },
          { opacity: 1, left: "100%", top: "100%", duration: 6 },
          { opacity: 0, left: "100%", top: "120%", duration: 6 },
          { opacity: 0, left: "100%", top: "120%", duration: 16 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=200 20%",
          end: "top+=6000 top",
        },
      },
      {
        selector: ".anitsol",
        initial: { opacity: 0, y: "100%" },
        steps: [
          { opacity: 0, y: "100%", duration: 6 },
          { opacity: 1, y: "0%", duration: 10 },
          { opacity: 1, y: "0%", duration: 8 },
          { opacity: 0, y: "100%", duration: 26 },
          { opacity: 0, y: "100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=3000 30%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".textani-LT .anitlogo",
        initial: { opacity: 0, x: "-100%" },
        steps: [
          { opacity: 0, x: "-100%", duration: 2 },
          { opacity: 1, x: "-100%", duration: 12 },
          { opacity: 1, x: "0%", duration: 8 },
          { opacity: 1, x: "0%", duration: 16 },
          { opacity: 1, x: "0%", duration: 0 },
          { opacity: 1, x: "0%", duration: 6 },
          { opacity: 0, x: "-100%", duration: 10 },
          { opacity: 0, x: "-100%", duration: 4 },
          { opacity: 0, x: "-100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=200 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".textani-RT .anitlogo",
        initial: { opacity: 0, x: "0%" },
        steps: [
          { opacity: 0, x: "0%", duration: 2 },
          { opacity: 1, x: "0%", duration: 14 },
          { opacity: 1, x: "0%", duration: 6 },
          { opacity: 1, x: "100%", duration: 12 },
          { opacity: 1, x: "100%", duration: 4 },
          { opacity: 0, x: "100%", duration: 10 },
          { opacity: 0, x: "100%", duration: 4 },
          { opacity: 0, x: "100%", duration: 4 },
          { opacity: 0, x: "100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=200 20%",
          end: "top+=4000 top",
        },
      },
      {
        selector: ".aniwe",
        initial: { y: "100%" },
        steps: [
          { y: "100%", duration: 2 },
          { y: "0%", duration: 14 },
          { y: "0%", duration: 6 },
          { y: "100%", duration: 10 },
          { y: "100%", duration: 6 },
          { y: "100%", duration: 10 },
          { y: "100%", duration: 4 },
          { y: "100%", duration: 4 },
          { y: "100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=0 20%",
          end: "top+=4000 top",
        },
      },
      {
        selector: ".aniare",
        initial: { y: "100%" },
        steps: [
          { y: "100%", duration: 2 },
          { y: "0%", duration: 14 },
          { y: "0%", duration: 6 },
          { y: "100%", duration: 10 },
          { y: "100%", duration: 6 },
          { y: "100%", duration: 10 },
          { y: "100%", duration: 4 },
          { y: "100%", duration: 4 },
          { y: "100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=100 20%",
          end: "top+=4000 top",
        },
      },
      {
        selector: ".aniImp",
        initial: { y: "100%" },
        steps: [
          { y: "100%", duration: 10 },
          { y: "100%", duration: 6 },
          { y: "100%", duration: 8 },
          { y: "100%", duration: 6 },
          { y: "0%", duration: 10 },
          { y: "0%", duration: 6 },
          { y: "100%", duration: 10 },
          { y: "100%", duration: 4 },
          { y: "100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=300 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".anitech",
        initial: { y: "-100%" },
        steps: [
          { y: "-100%", duration: 10 },
          { y: "-100%", duration: 6 },
          { y: "-100%", duration: 8 },
          { y: "-100%", duration: 6 },
          { y: "0%", duration: 10 },
          { y: "0%", duration: 6 },
          { y: "-100%", duration: 10 },
          { y: "-100%", duration: 4 },
          { y: "-100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=300 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".anitpro",
        initial: { x: "100%" },
        steps: [
          { x: "100%", duration: 10 },
          { x: "100%", duration: 6 },
          { x: "0%", duration: 8 },
          { x: "0%", duration: 14 },
          { x: "0%", duration: 6 },
          { x: "100%", duration: 10 },
          { x: "100%", duration: 4 },
          { x: "100%", duration: 4 },
          { x: "100%", duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=800 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block1",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-300 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block2",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-200 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block3",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-100 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block4",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=0 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block5",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=100 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block6",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=200 20%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block7",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-300 40%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block8",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-200 40%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block9",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-100 40%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block10",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-200 40%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block11",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=-100 40%",
          end: "top+=7000 top",
        },
      },
      {
        selector: ".block12",
        initial: { scaleY: 1 },
        steps: [
          { scaleY: 0, duration: 10 },
          { scaleY: 0, duration: 6 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 1, duration: 6 },
          { scaleY: 1, duration: 10 },
          { scaleY: 0, duration: 4 },
          { scaleY: 0, duration: 4 },
          { scaleY: 1, duration: 10 },
        ],
        scrollTrigger: {
          trigger: ".block1",
          start: "top+=0 40%",
          end: "top+=7000 top",
        },
      },
    ];

    blocks.forEach(({ selector, initial, steps, scrollTrigger, markers }) => {
      scrollTimeline(selector, initial, steps, scrollTrigger, markers);
    });
  }

  function startBgTextLoop() {
    gsap.to(".bgText-t01", {
      x: "-200vw",
      duration: 30,
      repeat: -1,
      ease: "linear",
      delay: 1,
    });

    gsap.to(".bgText-t02", {
      x: "-200vw",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(".bgText-t03", {
      x: "-200vw",
      duration: 32,
      repeat: -1,
      ease: "linear",
      delay: 3,
    });
  }

  function initAnimations() {
    gsap.from(".my-navbar", {
      y: -120,
      duration: 0.8,
      ease: "power2.out",
    });

    rowSetAni();
    row01BlockTimeline();
    startBgTextLoop();

    ScrollTrigger.refresh();
  }

  function clearAnimations() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf("*");
  }

  function refreshAnimations() {
    ScrollTrigger.refresh();
  }

  return {
    setVhUnit,
    initAnimations,
    clearAnimations,
    refreshAnimations,
  };
}