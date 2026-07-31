# Samphone｜品牌形象網站

## 專案介紹

此作品為以薩克斯風製造品牌為主題的形象網站，透過大幅影像、品牌故事、製作流程與產品展示，呈現樂器製造的工藝感與品牌氛圍。

專案由原本的靜態網頁重構為 Vue 3，將不同頁面區塊拆分為獨立元件，並使用 GSAP 與 Swiper 製作滾動動畫、背景輪播及畫面轉場效果。

網站整體著重於視覺呈現、動畫節奏、元件化結構與響應式版型設計。

* **專案類型：** 品牌形象網站
* **開發期間：** 2025 / 06 ～ 2025 / 07
* **開發方式：** 個人專案
* **前端框架：** Vue 3

---

## 網站內容

網站主要包含以下區塊：

* 品牌 Logo 開場動畫
* 首頁主視覺
* 全螢幕背景圖片輪播
* 品牌故事介紹
* 薩克斯風製作流程
* 產品展示區塊
* 網站導覽列
* Footer 聯絡資訊
* 滾動觸發動畫
* RWD 響應式版型

---

## 使用技術

* Vue 3
* Vite
* JavaScript
* TypeScript
* SCSS
* GSAP
* GSAP ScrollTrigger
* Swiper
* Bootstrap 5
* CSS Animation
* Flexbox
* CSS Grid

---

## 專案特色

### Vue 3 元件化架構

將網站不同功能與版面拆分為獨立 Vue 元件，例如：

* `IntroScreen.vue`
* `SiteHeader.vue`
* `HeroSection.vue`
* `BackgroundCarousel.vue`
* `StorySection.vue`
* `ProcessSection.vue`
* `ProductSection.vue`
* `SiteFooter.vue`

透過元件化方式降低單一頁面的複雜度，讓各區塊可以獨立維護與重複使用。

### 品牌開場動畫

網站載入時會先顯示品牌 Logo 動畫，並暫時鎖定頁面捲動。

動畫結束後，元件透過自訂事件通知主要頁面，再顯示網站內容並初始化 GSAP 動畫。

開場效果主要使用：

* Vue 條件渲染
* CSS Keyframes
* `animationend` 事件
* Vue `emit`
* Body 捲動狀態控制

### Swiper 背景輪播

使用 Swiper 建立全螢幕背景圖片輪播，並搭配：

* Fade 淡入淡出效果
* Cross Fade 圖片交疊轉場
* 自動播放
* 循環播放
* 圖片緩慢放大動畫
* 圖片亮度調整

透過背景圖片的淡入淡出與縮放效果，提升網站整體的品牌氛圍與視覺層次。

### GSAP 滾動動畫

使用 GSAP 與 ScrollTrigger 製作滾動觸發效果。

當使用者向下瀏覽頁面時，不同區塊會依照畫面位置觸發：

* 文字淡入
* 圖片位移
* 圖文交錯動畫
* 區塊進場效果
* 視差與滾動轉場

並將動畫初始化、清除與重新整理邏輯集中管理，避免動畫程式分散在不同元件中。

### 響應式動畫重建

監聽瀏覽器視窗尺寸變化，當畫面寬度改變時：

1. 清除原本建立的動畫
2. 重新取得元素尺寸與位置
3. 再次初始化 GSAP 動畫
4. 更新 ScrollTrigger

避免桌面版與手機版切換時，因元素尺寸改變而造成動畫位置錯誤。

### 可重複使用的故事元件

品牌故事區塊使用同一個 `StorySection` 元件，透過 Props 傳入：

* 區塊 Class
* 圖片位置
* 圖片路徑
* 區塊標題
* 文字內容

讓相同版型可以使用不同資料重複建立，減少重複撰寫 HTML 結構。

### RWD 響應式設計

針對不同裝置尺寸調整：

* 主視覺高度
* 圖文排列方式
* 字體大小
* 圖片比例
* 導覽列顯示方式
* 產品卡片排列
* 區塊間距
* 動畫移動距離

讓網站在桌面、平板與手機裝置上都能保持完整的閱讀體驗。

---

## 專案結構

```text
samphone-vue3/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   └── scss/
│   ├── components/
│   │   ├── BackgroundCarousel.vue
│   │   ├── HeroSection.vue
│   │   ├── IntroScreen.vue
│   │   ├── ProcessSection.vue
│   │   ├── ProductSection.vue
│   │   ├── SiteFooter.vue
│   │   ├── SiteHeader.vue
│   │   └── StorySection.vue
│   ├── hooks/
│   │   └── gsapAnimations
│   ├── utils/
│   │   └── publicUrl
│   ├── App.vue
│   └── main
├── index.html
├── package.json
└── vite.config
```

---

## 學習重點

透過此專案練習並加強以下能力：

* 將靜態網站重構為 Vue 3 專案
* 使用 Vue 單檔元件拆分頁面結構
* 使用 Props 建立可重複使用的元件
* 使用 Emit 處理元件之間的事件通知
* 管理 Vue 元件生命週期
* 使用 GSAP 與 ScrollTrigger 製作滾動動畫
* 管理動畫初始化、清除與重新整理
* 使用 Swiper 建立背景輪播
* 使用 SCSS 管理大型網站樣式
* 建立 RWD 響應式版型
* 使用 Vite 建立與打包 Vue 專案
* 處理 GitHub Pages 靜態資源路徑

---

## 安裝與執行

```bash
# 安裝套件
npm install

# 啟動開發環境
npm run dev

# 建立正式版本
npm run build

# 預覽正式版本
npm run preview
```

---

## 專案連結

* **GitHub：** [xcia4899/samphone-vue3](https://github.com/xcia4899/samphone-vue3)
* **Live Demo：** [Samphone 品牌形象網站](https://xcia4899.github.io/samphone-vue3/)

---

## 備註

本專案主要作為 Vue 3、響應式切版與互動動畫練習使用，網站內容以品牌形象展示為目的。
