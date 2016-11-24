# js-svg-icons

## Synopsis

Package provide an unified library of [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) icons.
Initially based on [Google Material Icons](https://github.com/google/material-design-icons/)

### Motivation for creating this library

Font-based icons like **font-awesome** have a lot of **limitations**:

* *font-based icons* is a **global dependency**
* *font-based icons* are not extendable. You have no chance to easilly add a new icon
* Different browser have different font render engines *font-based-icons* 

**There are several good articles on this topic:**

[CHRIS COYIER: Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)

### Difference from base library
* Much reduced resulting package size (~60MB vs ~500KB)
* Icon files paths normalized to `[package-name]/lib/[icon-name]`


## Usage

### Using with webpack: 

```js
let svgBuildIcon = require('!!raw-loader!jcatalog-svg-icons/lib/build.svg');
```

If `require` not working, ensure [raw-loader](https://www.npmjs.com/package/raw-loader) installer.
