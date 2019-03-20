
# Divvy

A collection of sweet sweet SCSS utility mixins and classes to pump up your divs.

## Usage

Install the repo:

`npm install --save divvy`

### Import the full minified css

(in your sass file)

```scss
@import "~divvy/css/all.css";
```

### Import sass variables and mixins

Import everything:

```scss
@import "~divvy/scss/all";
```

Import individual component mixins:

```scss
@import "~divvy/scss/animations";
@import "~divvy/scss/bg";
@import "~divvy/scss/breakpoints";
@import "~divvy/scss/container";
@import "~divvy/scss/general";
@import "~divvy/scss/grid";
@import "~divvy/scss/layout";
@import "~divvy/scss/resets";
@import "~divvy/scss/type";
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
