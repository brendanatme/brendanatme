
# Sass-Utils

Collection of handy SCSS utility mixins and classes. Opt in or out of whatever you want.

## Usage

Install the repo:

`npm install --save sass-utils`

### Import the full minified css

(in your sass file)

```scss
@import "~sass-utils/css/all.css";
```

### Import sass variables and mixins

Import everything:

```scss
@import "~sass-utils/scss/all";
```

Import individual component mixins:

```scss
@import "~sass-utils/scss/animations";
@import "~sass-utils/scss/bg";
@import "~sass-utils/scss/breakpoints";
@import "~sass-utils/scss/container";
@import "~sass-utils/scss/general";
@import "~sass-utils/scss/grid";
@import "~sass-utils/scss/layout";
@import "~sass-utils/scss/resets";
@import "~sass-utils/scss/type";
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
