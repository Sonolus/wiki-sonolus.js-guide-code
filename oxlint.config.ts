import { defineConfig } from 'oxlint'

export default defineConfig({
    plugins: ['eslint'],
    categories: {
        correctness: 'error',
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
