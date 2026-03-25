<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <img :src="logoSrc" alt="Samphone logo" />
        <div class="brand-text">
          <p class="brand-subtitle">Samphone Music</p>
          <h2>勝風樂器</h2>
          <span class="brand-line"></span>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-container">
      <div class="footer-section footer-content">
        <h3 class="footer-title">聯絡資訊</h3>
        <p>地址：台中市太平區</p>
        <p>電話：04-1234-5678</p>
        <p>Email：service@shengfengmusic.com</p>
        <p>營業時間：週一至週五 09:00–18:00</p>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">網站導覽</h3>
        <a href="/about" @click.prevent>關於勝風</a>
        <a href="/products" @click.prevent>產品介紹</a>
        <a href="/events" @click.prevent>品牌活動</a>
        <a href="/support" @click.prevent>技術支援</a>
        <a href="/contact" @click.prevent>聯絡我們</a>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">社群平台</h3>
        <a
          href="https://www.facebook.com/shengfengmusic"
          target="_blank"
          rel="noopener noreferrer"
          @click.prevent
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/shengfengmusic"
          target="_blank"
          rel="noopener noreferrer"
          @click.prevent
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@shengfengmusic"
          target="_blank"
          rel="noopener noreferrer"
          @click.prevent
        >
          YouTube
        </a>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">網站資訊</h3>
        <a href="#" @click.prevent>服務條款</a>
        <a href="#" @click.prevent>隱私政策</a>
        <a href="#" @click.prevent>網站地圖</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 ShengFeng Music Co. Ltd. All rights reserved.</p>
      <p>本網站所有內容與設計版權屬於勝風樂器，未經授權不得擅自使用或轉載。</p>
    </div>
  </footer>
</template>

<script setup>
import { publicUrl } from "../utils/publicUrl";

const logoSrc = publicUrl("images/logo/samphone-logo-02.png");
</script>

<style lang="scss" scoped>
// ========================================
// footer
// ========================================
.site-footer {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 56px 32px 24px;
  background: linear-gradient(
    180deg,
    rgba(120, 20, 20, 0.96) 0%,
    rgba(80, 10, 10, 0.98) 100%
  );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.04) 0%,
      transparent 35%,
      transparent 65%,
      rgba(255, 215, 160, 0.05) 100%
    );
    pointer-events: none;
  }

  .footer-top,
  .footer-divider,
  .footer-container,
  .footer-bottom {
    position: relative;
    z-index: 1;
  }

  p,
  a,
  h2,
  h3,
  span {
    margin: 0;
    color: $color-white;
  }

  a {
    position: relative;
    width: fit-content;
    text-decoration: none;
    opacity: 0.9;
    transition: 0.3s ease;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0;
      height: 1px;
      background-color: $color-gold;
      transition: width 0.3s ease;
    }

    &:hover {
      color: $color-gold;
      opacity: 1;
    }

    &:hover::after {
      width: 100%;
    }
  }

  .footer-top {
    display: flex;
    // align-items: center;
    // justify-content: center;
  }

  .footer-brand {
    display: flex;
    align-items: flex-end;
    
    // justify-content: center;
    gap: 24px; // 間距稍微拉開
    flex-wrap: nowrap;

    img {
      width: clamp(140px, 30%, 240px); // 🔥 放大 LOGO
      height: auto; // 讓比例自然
      flex-shrink: 0;
      object-fit: contain;
      filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.25));
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      gap: 6px;
      white-space: nowrap; 

      .brand-subtitle {
        font-size: 12px;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
      }

      h2 {
        font-size: 32px; // 稍微放大一點
        font-weight: 700;
        letter-spacing: 0.08em;
      }

      .brand-line {
        display: block;
        width: 80px; // 稍微加長
        height: 2px;
        border-radius: 999px;
        background: linear-gradient(
          90deg,
          $color-gold 0%,
          rgba(255, 255, 255, 0.15) 100%
        );
      }
    }
  }

  .footer-divider {
    width: 100%;
    height: 1px;
    margin-top: 8px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 215, 160, 0.6) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
  }

  .footer-container {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 32px;
    align-items: start;

    .footer-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-width: 0;
    }

    .footer-title {
      position: relative;
      margin-bottom: 10px;
      padding-bottom: 10px;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: $color-gold;
    }

    p {
      font-size: 15px;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.88);
    }

    a {
      font-size: 15px;
      line-height: 1.8;
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    p {
      font-size: 13px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.68);
    }
  }
}

// ========================================
// RWD
// ========================================
@media (max-width: 992px) {
  .footer-top{
    justify-content: center;
  }
  .site-footer {
    padding: 48px 24px 24px;

    .footer-container {
      grid-template-columns: 1fr 1fr;
      gap: 28px 20px;
    }
  }
}

@media (max-width: 640px) {
  .site-footer {
    gap: 24px;
    padding: 40px 20px 20px;

    .footer-brand {
      // align-items: flex-start;
      justify-content: center;
      gap: 14px;

      .brand-text {
        h2 {
          font-size: 22px;
        }
      }
    }

    .footer-container {
      grid-template-columns: 1fr;
      gap: 24px;

      .footer-section {
        gap: 8px;
      }

      p,
      a {
        font-size: 14px;
      }
    }

    .footer-bottom {
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
