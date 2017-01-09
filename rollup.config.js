import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    dest: 'index.js',
    format: 'umd',
    moduleName: 'ifEmoji',
    plugins: [
        babel({
            presets: [['es2015', { "modules": false }]],
            plugins: ["external-helpers"]
        })
    ]
}
