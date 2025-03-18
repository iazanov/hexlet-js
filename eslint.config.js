import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier'; // Импортируем плагин Prettier

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser, // Настройка глобальных переменных (например, для браузерных API)
    },
  },
  pluginJs.configs.recommended, // Используем рекомендованные настройки для JS
  {
    plugins: {
      prettier, // Прямое подключение плагина Prettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'es5' },
      ],
    },
  },
];
