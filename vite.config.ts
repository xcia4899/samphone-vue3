import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

export default defineConfig({
  base: (import.meta as any).env.VITE_BASE_PATH || "/",
  plugins: [vue()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 這段會自動注入到每個 <style lang="scss"> 與 .scss 檔案
        additionalData: `
          @use "@/assets/styles/variables" as *;
          @use "@/assets/styles/mixins" as *;
        `
      }
    }
  }
});
