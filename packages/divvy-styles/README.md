
# Divvy Styles

A collection of sweet sweet SCSS utility mixins and classes to pump up your divs.

## Usage

Install the repo:

`npm install --save divvy-styles`

### Import the full minified css

(in your sass file)

```scss
@import "~divvy-styles/css/all.css";
```

### Import sass variables and mixins

Import everything:

```scss
@import "~divvy-styles/scss/all";
```

Import individual component mixins:

```scss
@import "~divvy-styles/scss/animations";
@import "~divvy-styles/scss/bg";
@import "~divvy-styles/scss/breakpoints";
@import "~divvy-styles/scss/container";
@import "~divvy-styles/scss/general";
@import "~divvy-styles/scss/grid";
@import "~divvy-styles/scss/layout";
@import "~divvy-styles/scss/resets";
@import "~divvy-styles/scss/type";
```

## Development

### Requirements

- Node.js v10.6+

### Installation

- run `npm install`

### Build

- run `npm run build`

### Publish to NPM

1. commit and push to Git
1. run `npm run release [major | minor | patch]`
