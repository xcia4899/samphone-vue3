<template>
  <header>
    <nav class="my-navbar navbar navbar-dark bg-dark fixed-top">
      <div class="my-catainer container-fluid">
        <a class="navbar-brand" href="#">勝風樂器</a>

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
          class="my-offcanvas offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasDarkNavbarLabel" class="offcanvas-title">
              <img
                :src="logoSrc"
                alt="Samphone logo"
              />
            </h5>

            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" href="#">關於我們</a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  商品
                </a>

                <ul class="my-dropdown-menu dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="#"
                      >中音薩克斯風<br />(Alto Saxophone)</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                      >次中音薩克斯風<br />(Tenor Saxophone)</a
                    >
                  </li>
                  <li><a class="dropdown-item" href="#">薩克斯風配件</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">品牌活動</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">技術支援</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">聯絡我們</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { publicUrl } from "../utils/publicUrl";

const logoSrc = publicUrl("images/logo/samphone-logo-02.png");
</script>

<style lang="scss">
// ========================================
// navbar
// ========================================
.my-navbar {
  position: absolute;
  z-index: 11111;
  margin: 32px 32px 0;
  padding: 8px 30px;
  border-radius: 30px;
  background-color: rgba($color-red, 0.9) !important;
  backdrop-filter: blur(2px);
  transform: translateY(-200px);
  animation: mynavbarani 1s ease-out forwards;
  transition: all 0.4s ease;

  .my-catainer {
    padding: 4px 12px;
  }

  .my-navbar-toggler {
    border: 2px solid rgba($color-white, 0.4);
  }

  .my-offcanvas {
    right: 0;
    height: calc(var(--vh, 1vh) * 100);
    margin: -32px -64px;
    background-color: $color-red !important;
    border: none;

    .offcanvas-header {
      padding: 16px 32px;

      .offcanvas-title {
        max-width: 200px;

        img {
          width: 100%;
          display: block;
        }
      }
    }

    .offcanvas-body {
      padding: 16px 48px;
    }

    .navbar-nav {
      .nav-item {
        margin: 4px 0;
      }
    }

    .my-dropdown-menu {
      background-color: rgba(255, 255, 255, 0.2);
      border: 0;
      border-radius: 4px;

      li {
        padding: 8px;
      }

      .dropdown-item {
        padding: 8px;
        border-radius: 4px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
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
</style>
