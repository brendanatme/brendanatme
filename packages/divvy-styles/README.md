
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

OR

### Import sass variables and mixins

Import everything:

```scss
@import "~divvy-styles/scss/abstract/all";
```

Import individual component mixins:

```scss
@import "~divvy-styles/scss/abstract/animations";
@import "~divvy-styles/scss/abstract/bg";
@import "~divvy-styles/scss/abstract/breakpoints";
@import "~divvy-styles/scss/abstract/container";
@import "~divvy-styles/scss/abstract/general";
@import "~divvy-styles/scss/abstract/grid";
@import "~divvy-styles/scss/abstract/layout";
@import "~divvy-styles/scss/abstract/resets";
@import "~divvy-styles/scss/abstract/type";
```

OR

### Make and prefix your own stylesheet

```scss
@import "~divvy-styles/scss/global/make-all";

@include make-all('my-prefix-');
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
