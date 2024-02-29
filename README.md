# Micro Demo

## Setup
1. run `yarn`
2. run `docker compose up -d`
3. run yarn dev

>Your dev server is on the defualt port `5173` your local DEPLOYMENT server (nginx) is set up on port `8000`
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
