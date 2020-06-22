module.exports = {
    extends: 'eslint-config-egg',
    // for experimental features support
    parser: 'babel-eslint',
    parserOptions: {
        // for es6 module
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        // for variables in jsx
        // see https://github.com/eslint/eslint/issues/6274
        'generator-star-spacing': 'off',
        'babel/generator-star-spacing': 'off',
        "no-mixed-spaces-and-tabs": [0],
        "no-multiple-empty-lines": [0, {
            "max": 100
        }],
        "semi": [0],
        "no-unused-vars": [1, {
            "vars": "local",
            "args": "none"
        }],
        "no-undef": [1]
    },
};