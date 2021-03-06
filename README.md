# Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/5app/base5-ui.svg)](https://greenkeeper.io/)

Welcome to base5-ui, 5App's library of reusable React components. base5-ui's focus lies on providing easy-to-use base & layout components for building highly themeable pages.

## Installation

base5-ui is built on styled-components, so if you're not using it already, install it along with base5-ui.

```
npm i base5-ui styled-components
```

## Running the component library locally

base5-ui comes with its own documentation tool & development playground powered by [Storybook](https://storybook.js.org/). To check it out locally, clone this repo to your local machine, install its dependencies (`npm i`), and finally run the following command:

```
npm run storybook
```

The documentation environment should then open in your browser at http://localhost:6006, letting you browse all available components to inspect their API, read documentation and see usage examples.

## Using base5-ui

To use the components of base5-ui, your app needs to be wrapped in a `<ThemeSection>` that provides each component with global and local theme information.

A basic app setup using the default base5-ui theme looks like this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import ThemeSection from 'base5-ui/ThemeSection';
import Button from 'base5-ui/Button';

import theme from 'base5-ui/theme';

function App() {
	return (
		<ThemeSection name="page" baseTheme={theme}>
			<Button>Hello world!</Button>
		</ThemeSection>
	);
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
```

## Updating the repo

> Want to add/edit icons? Please follow the steps outlined in the [icons README](/src/icons/README.mdx) before continuing here.

To publish changes to the components in this repo, please follow these steps. The online docs will automatically be updated after the changes were merged to the master branch.

-   Commit your changes using semantic versioning prefixes:
    1. `fix:` or `refactor:` for a patch release (x.x.+1)
    2. `feat:` for a minor release (x.+1.0)
    3. Add `BREAKING CHANGE:` to the beginning of the commit message's body for a major release: +1.0.0)
    4. Use `chore:` or `style:` for housekeeping tasks that don't require a release
-   Submit a PR or push to the `master` branch

## Updating just the docs

If you did not make any changes to components and only want to update the docs in our online [component library](https://5app.github.io/base5-ui), just submit a PR or push to the `master` branch directly using a `docs:` prefix for the commit message.

## Tests

Execute `npm test` or `npm run test` to run the tests

Execute `npm run test:cover` to run the tests with coverage analysis.

-   A summary report such as the following will be available in the terminal:

```
=============================== Coverage summary ===============================
Statements   : 76.38% ( 524/686 )
Branches     : 53.81% ( 120/223 )
Functions    : 87.06% ( 148/170 )
Lines        : 77.04% ( 520/675 )
================================================================================
Test Suites: 12 passed, 12 total
Tests:       3 skipped, 32 passed, 35 total
Snapshots:   0 total
Time:        3.818s
```

-   A detailed html code analysis report will be available at `./test/coverage/index.html`
    The detailed report provides a good insight on what to test and how well the component is tested.
