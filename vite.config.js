import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      app: "/src/app",
      services: "/src/services",
      features: "/src/features",
      config: "/src/features/config",
      product: "/src/features/product",
      edit: "/src/features/edit",
      404: "/src/features/404",
    },
  },
});
