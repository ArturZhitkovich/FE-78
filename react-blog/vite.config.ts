// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path"; // 1. Импортируем path для сборки путей

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Прописываем те же алиасы, что и в tsconfig.app.json
      components: path.resolve(import.meta.dirname, "./src/components"),
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
