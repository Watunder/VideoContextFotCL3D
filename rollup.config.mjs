import glslLoader from "rollup-plugin-glsl-loader";

export default {
	input: {
        'videocontext': './src/main.js',
    },
	output: {
        format: 'esm',
		dir: './dist/',
        entryFileNames: '[name].mjs',
	},
    plugins: [
        glslLoader(),
    ]
};