import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Конфиг Vite: подключаем плагин React (JSX, fast refresh)
// и плагин Tailwind CSS v4 (стили собираются на этапе сборки).
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
