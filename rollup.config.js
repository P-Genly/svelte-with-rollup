import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";

function createConfig(file) {
    return {
        input: `src/components/${file}.svelte`,
        output: [
            { file: `dist/${file}.js`, format: 'es' }
        ],
        plugins: [
            svelte({
                preprocess: vitePreprocess()
            }),
            resolve(),
            commonjs(),
            terser(),
        ]
    };
}
export default [
    createConfig('Button'),
    //  Add you other components here
];