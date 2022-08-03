module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never']
    }
}
