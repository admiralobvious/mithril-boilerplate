module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    globals: {
        "m": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:mithril/recommended",
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 9,
    },
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "no-unused-vars": ["warn"],
        "no-console": 0,
        "rest-spread-spacing": ["error", "never"],
    },
};
