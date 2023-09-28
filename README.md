# React + TypeScript + Vite

A shopping cart created in TypeScript+React and Vite, the focus is on the functionality of Shopping cart in TypeScript and NOT the design:



![Screenshot 2023-09-28 124308](https://github.com/mareyam/Typescript-React-Shopping-Cart/assets/63284481/f7cc9c6b-610c-4eaa-8921-84bce0e7a243)
![WhatsApp Image 2023-09-28 at 12 39 51 PM](https://github.com/mareyam/Typescript-React-Shopping-Cart/assets/63284481/d10fe906-c4c8-4bf1-bc31-3cff5a623ca3)![cart](https://github.com/mareyam/Typescript-React-Shopping-Cart/assets/63284481/f5265d6d-c7ca-4d6e-a995-e62ad461acdc)
![WhatsApp Image 2023-09-28 at 12 39 51 PM](https://github.com/mareyam/Typescript-React-Shopping-Cart/assets/63284481/8be8a5fa-e61e-4be0-9680-8f1b8534afbc)

![cart](https://github.com/mareyam/Typescript-React-Shopping-Cart/assets/63284481/d7cfc557-f473-435b-8f03-8c425979ea67)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
