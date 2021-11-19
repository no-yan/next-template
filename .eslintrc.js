module.exports = {
    env: {
        browser: true,
        es2021: true,
        mocha: true,
        node: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'next/core-web-vitals',
        'prettier',
    ],
    plugins: ['testing-library'],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prefer-const': 'error',
        'import/order': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
    },
};
