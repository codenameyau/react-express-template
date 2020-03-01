# react-express-template

### Features
- CRA watch mode and hot module reloading for React application.
- Watch mode for our node Express server.
- Styled components (zero css files).
- Storybook component development.
- Express server comes with proxy, middleware, logging.
- Git Workflow: Prettier, eslint, imagemin is run on every commit.
- Isomorphic ES6 import statements on both client app and server.

## CLI Commands

#### Getting Started

```bash
# Copy env file then copy paste env variables.
cp env/local.env .env

# install dependencies
yarn install

# Spin up dev server.
yarn start
```

#### Other Commands
```bash
# Run unit tests with Jest and Enzyme.
yarn test

# Analyze bundle size.
yarn analyze

# Run storybook.
yarn storybook

# Build and run production app.
yarn production
```

## Resources
- Create react app config: https://create-react-app.dev/docs/advanced-configuration

### Analyzing node modules size
Having too many node modules can increase the disk space requirement and memory
usage on your development machine and servers. Use this command to analyze the
size of individual dependencies in your node modules.

```bash
du -h -d1 node_modules/ | sort -hr | less
```

### Recommended Storybook addons
By default this template does not come with storybook addons although I highly
recommend using them for development. You can find a full list of add-ons here:
https://github.com/storybookjs/storybook/tree/master/addons

```bash
yarn add -D @storybook/addon-viewport @storybook/addon-docs
```

Then edit `.storybook/main.js`

```
addons: [
  '@storybook/addon-viewport',
  '@storybook/addon-docs'
],
```
