# Introduction

Welcome to base5-UI, 5app's library of reusable React components. base5-UI's focus lies on providing easy-to-use base & layout components for building highly themeable pages.

## Installation

base5-UI is built on styled-components, so if you're not using it already, install it along with base5-UI.

```
npm i base5-ui styled-components
```

## Running the component library

base5-UI comes with its own documentation tool & development playground powered by [docz](https://www.docz.site/). To check it out, clone this repo to your local machine, install all needed dependencies using `yarn` (Docz is currently [buggy when using plain old npm](https://github.com/pedronauck/docz/issues/276)) and then run:

```
yarn docz:dev
```

The documentation environment will then be available at http://localhost:3000, letting you browse all available components to inspect their API and see usage examples.

## Usage

To use the components of base5-UI, your app needs to be wrapped in a `<ThemeSection>` that provides each component with global and local theme information.

A basic app setup using the default base5-UI theme looks like this:

```jsx
import React from "react";
import ReactDOM from "react-dom";

import ThemeSection from 'base5-icons/ThemeSection';
import Button from 'base5-icons/Button';

import theme from 'base5-icons/theme';

function App() {
  return (
    <ThemeSection name="page" baseTheme={theme}>
    	<Button>Hello world!</Button>
    </ThemeSection>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

## Updating the repo

Want to add/edit icons? Please follow the steps outlined in the [icons README](/src/icons/README.mdx) before continuing here.

To publish changes to the components in this repo, please follow these steps:

1. Bump the version number using `npm version [patch|minor|major]`
2. Run `npm run compile` to compile all code within `src` to the `dist` folder
3. Run `npm run dist` to publish the `dist` folder to NPM
