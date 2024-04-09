import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

function createConfig(file) {
    return {
        input: `src/components/${file}.svelte`,
        output: [
            { file: `dist/${file}.js`, format: 'es' }
        ],
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            svelte({ preprocess: vitePreprocess() }),
            postcss({
                plugins: [postcssImport()],
                extract: false,
                inject: true,
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
