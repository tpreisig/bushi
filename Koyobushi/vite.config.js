import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',                     // project root
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './index.html',
            },
        },
    },
    server: {
        open: true,
    },
});