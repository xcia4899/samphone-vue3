<template>
  <footer class="site-footer">
    <div class="footer-top">
      <img :src="logoSrc" alt="Samphone logo" />
    </div>

    <hr />

    <div class="footer-container">
      <div class="footer-section footer-content">
        <p>地址：台中市太平區</p>
        <p>電話：04-1234-5678</p>
        <p>Email：service@shengfengmusic.com</p>
        <p>營業時間：週一至週五 09:00–18:00</p>
      </div>

      <div class="footer-section">
        <a href="/about">關於勝風</a>
        <a href="/products">產品介紹</a>
        <a href="/events">品牌活動</a>
        <a href="/support">技術支援</a>
        <a href="/contact">聯絡我們</a>
      </div>

      <div class="footer-section">
        <a href="https://www.facebook.com/shengfengmusic" target="_blank"
          >Facebook</a
        >
        <a href="https://www.instagram.com/shengfengmusic" target="_blank"
          >Instagram</a
        >
        <a href="https://www.youtube.com/@shengfengmusic" target="_blank"
          >YouTube</a
        >
      </div>

      <div class="footer-section">
        <a href="#">服務條款</a>
        <a href="#">隱私政策</a>
        <a href="#">網站地圖</a>
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

<style lang="scss">
// ========================================
// footer
// ========================================
.site-footer {
  background-color: $color-red;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  img {
    max-width: 300px;
  }

  p,
  a {
    color: $color-white;
    margin: 0;
    text-decoration: none;
  }

  a:hover {
    color: $color-gold;
  }

  h3 {
    font-size: 24px;
  }

  hr {
    margin: 8px 0;
  }

  .footer-top {
    display: flex;
    align-items: center;
  }

  .footer-container {
    display: flex;
    justify-content: space-evenly;
    gap: 24px;

    .footer-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .footer-content {
      flex: 2;
    }
  }

  .footer-bottom {
    width: 100%;

    p {
      font-size: 14px;
    }
  }
}
</style>
