import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/jet-framework.js'),
            name: 'JetFramework',
            fileName: 'jet-framework',
        },
        minify: true,
        rollupOptions: {
            input: {
                index: "./src/jet-framework.js"
            },
            output: [
                {
                    format: 'cjs',
                    entryFileNames: "jet-framework.[format].js",
                },
                {
                    format: 'es',
                    entryFileNames: "jet-framework.[format].js",
                },
                {
                    /** name is entry of the window object, in this case call this library with window.jet or just jet */
                    name: 'jet',
                    format: 'umd',
                    entryFileNames: "jet-framework.min.js",
                },
            ]
        }
    },
});