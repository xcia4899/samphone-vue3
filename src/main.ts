//第三方套件樣式（最底層）
import 'bootstrap/dist/css/bootstrap.min.css'

//全域自訂樣式（用來覆蓋或擴充 Bootstrap）
import './assets/styles/main.scss'

// 第三方 JS 套件

import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Vue 實例
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')