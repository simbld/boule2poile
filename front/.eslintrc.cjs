module.exports = {
    root: true,
    env: {browser: true, es2021: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked', // Ajouté selon README
        'plugin:react/recommended', // Ajouté selon README
        'plugin:react/jsx-runtime', // Ajouté selon README
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: { // Ajouté selon README
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react-refresh',
        'react', // Ajouté selon README
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
    },
}
