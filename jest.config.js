module.exports = {
    testEnvironment: 'jsdom',

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

    transform: {
        '^.+\\.(ts|tsx)?$': [
            '@swc-node/jest',
            {
                sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )

                module: {
                    type: 'commonjs', // 出力するファイルをcommonjsとする
                },

                jsc: {
                    parser: {
                        syntax: 'typescript', // ソースコードをtypescriptとしてパースする
                        tsx: true, // jsx記法を許可する
                    },

                    transform: {
                        react: {
                            // 必須。省略すると "ReferenceError: React is not defined" が発生します
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },

    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/jest.setup.ts',
    ],

    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],

    collectCoverageFrom: ['src/**/*.{js,ts,tsx}'],
    //pagesにtestableなものを入れたくないという主張
};
