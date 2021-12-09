module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'babel'],
  globals: {
    fetch: 'readonly',
    window: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    // Разрешить анонимные функции
    'func-names': 'off',
    // Разрешить JSX в файлах .js
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // Eslint Import Alias
    'import/no-unresolved': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    // Поддержка Absolute Imports
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
