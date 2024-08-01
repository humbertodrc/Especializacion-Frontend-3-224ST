import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/font/google': path.resolve(__dirname, '__mocks__/next-font-google.ts'),
    }
  }
});
