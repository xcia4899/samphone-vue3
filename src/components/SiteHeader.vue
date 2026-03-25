<template>
  <header>
    <nav class="my-navbar navbar navbar-dark bg-dark fixed-top">
      <div class="my-catainer container-fluid">
        <a
          class="navbar-brand"
          href="#"
          @click.prevent="scrollToSection('top')"
        >
          勝風樂器
        </a>

        <button
          class="my-navbar-toggler navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="offcanvasDarkNavbar"
          ref="offcanvasRef"
          class="my-offcanvas offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasDarkNavbarLabel" class="offcanvas-title">
              <img :src="logoSrc" alt="Samphone logo" />
            </h5>

            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#products"
                >
                  商品
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#support"
                >
                  技術支援
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#contact"
                >
                  聯絡我們
                </a>
              </li>
            </ul>

            <div class="nav-footer">
              <div class="nav-footer-line"></div>
              <p class="nav-footer-text">Samphone Instrument Workshop</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { publicUrl } from "../utils/publicUrl";

const logoSrc = publicUrl("images/logo/samphone-logo-02.png");
const offcanvasRef = ref(null);

function closeOffcanvas() {
  const el = offcanvasRef.value;
  if (!el) return;

  const instance = window.bootstrap?.Offcanvas.getInstance(el);
  if (instance) instance.hide();
}

function scrollToSection(id) {
  closeOffcanvas();

  if (id === "top") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const navbarOffset = 100;
  const top =
    target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
</script>

<style lang="scss">
// ========================================
// navbar
// ========================================
.my-navbar {
  position: absolute;
  z-index: 11111;
  margin: 32px 32px 0;
  padding: 10px 28px;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba($color-red, 0.92) 0%,
    rgba(darken($color-red, 8%), 0.9) 100%
  ) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: translateY(-200px);
  animation: mynavbarani 1s ease-out forwards;
  transition: all 0.4s ease;

  .my-catainer {
    padding: 4px 12px;
  }

  .navbar-brand {
    position: relative;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: $color-white;
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0)
      );
      opacity: 0.7;
    }
  }

  .my-navbar-toggler {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba($color-white, 0.32);
    background: rgba(255, 255, 255, 0.08);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 4px 12px rgba(0, 0, 0, 0.14);
    transition: all 0.35s ease;

    &:focus {
      box-shadow:
        0 0 0 0.2rem rgba(255, 255, 255, 0.12),
        0 4px 12px rgba(0, 0, 0, 0.14);
    }

    &:hover {
      transform: rotate(12deg);
      background: rgba(255, 255, 255, 0.14);
      border-color: rgba($color-white, 0.45);
    }
  }

  .my-offcanvas {
    right: 0;
    height: calc(var(--vh, 1vh) * 100);
    margin: -32px -64px;
    padding: 0;
    background:
      radial-gradient(
        circle at top left,
        rgba(255, 255, 255, 0.08),
        transparent 30%
      ),
      linear-gradient(
        160deg,
        rgba($color-red, 0.98) 0%,
        rgba(darken($color-red, 12%), 0.98) 100%
      ) !important;
    border: none;
    box-shadow: -20px 0 60px rgba(0, 0, 0, 0.28);

    .offcanvas-header {
      padding: 28px 32px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      .offcanvas-title {
        max-width: 210px;

        img {
          width: 100%;
          display: block;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.18));
        }
      }

      .btn-close {
        opacity: 0.9;
        transition: transform 0.3s ease, opacity 0.3s ease;

        &:hover {
          opacity: 1;
          transform: rotate(90deg);
        }
      }
    }

    .offcanvas-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 28px 40px 36px;
    }

    .navbar-nav {
      gap: 6px;

      .nav-item {
        margin: 0;
      }

      .nav-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        width: 100%;
        padding: 14px 18px;
        border-radius: 16px;
        color: rgba(255, 255, 255, 0.92);
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        transition:
          background 0.3s ease,
          transform 0.3s ease,
          color 0.3s ease;

        &::before {
          content: "";
          width: 6px;
          height: 6px;
          margin-right: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }

        &:hover,
        &:focus,
        &.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(4px);
        }
      }
    }

    .dropdown-toggle::after {
      margin-left: auto;
    }

    .my-dropdown-menu {
      margin-top: 8px;
      padding: 8px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

      li {
        padding: 0;
      }

      .dropdown-item {
        padding: 12px 14px;
        border-radius: 12px;
        color: rgba(255, 255, 255, 0.92);
        font-size: 0.95rem;
        line-height: 1.6;
        transition:
          background 0.3s ease,
          transform 0.3s ease;

        &:hover,
        &:focus {
          background: rgba(255, 255, 255, 0.14);
          transform: translateX(4px);
        }
      }
    }

    .nav-footer {
      padding-top: 28px;

      .nav-footer-line {
        width: 100%;
        height: 1px;
        margin-bottom: 14px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.45),
          rgba(255, 255, 255, 0)
        );
      }

      .nav-footer-text {
        margin: 0;
        color: rgba(255, 255, 255, 0.65);
        font-size: 0.78rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }
    }
  }
}

@keyframes mynavbarani {
  0% {
    transform: translateY(-200px);
  }

  100% {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .my-navbar {
    margin: 20px 16px 0;
    padding: 8px 18px;

    .navbar-brand {
      font-size: 0.95rem;
      letter-spacing: 0.12em;
    }

    .my-navbar-toggler {
      width: 46px;
      height: 46px;
    }

    .my-offcanvas {
      margin: -20px -32px;

      .offcanvas-header {
        padding: 24px 24px 18px;
      }

      .offcanvas-body {
        padding: 24px 24px 32px;
      }

      .navbar-nav .nav-link {
        padding: 12px 14px;
      }
    }
  }
}
</style>