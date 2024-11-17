// vite.config.js
import { defineConfig } from "file:///E:/xampp/htdocs/vipertecpro/laravel-react-dashboard/node_modules/vite/dist/node/index.js";
import laravel from "file:///E:/xampp/htdocs/vipertecpro/laravel-react-dashboard/node_modules/laravel-vite-plugin/dist/index.mjs";
import react from "file:///E:/xampp/htdocs/vipertecpro/laravel-react-dashboard/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            ssr: "resources/js/ssr.jsx",
            refresh: true,
        }),
        react(),
    ],
});
export { vite_config_default as default };
