/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  // 你可以在這裡定義其他自定義變數的類型，增加開發時的提示
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}