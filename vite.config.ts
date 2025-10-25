import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            const newPath = path.replace(/^\/api/, "");
            console.log("Proxy rewrite:", path, "→", newPath); // ← для отладки
            console.log(env.VITE_API)
            return newPath;
          },
        },
      },
    },
  };
});
