import { defineConfig } from 'oxlint'

export default defineConfig({
    plugins: ['eslint', 'typescript'],
    categories: {
        correctness: 'error',
    },
    options: {
        typeAware: true,
    },
    env: {
        builtin: true,
    },
    ignorePatterns: [
        '**/*.*',

        '!shared/src/**/*.*',

        '!play/src/**/*.*',

        '!watch/src/**/*.*',

        '!preview/src/**/*.*',

        '!tutorial/src/**/*.*',
    ],
    rules: {
        'no-eval': 'off',
        'no-restricted-properties': [
            'error',
            {
                object: 'debug',
                message: 'Debug calls should be removed from production.',
            },
        ],
    },
})
