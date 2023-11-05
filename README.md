<!-- https://github.com/ngryman/badge-size -->
![zoomifyjs.umd.js](https://img.badgesize.io/mrazinshaikh/zoomifyjs/master/dist/zoomifyjs.umd.js?compression=gzip&color=blue&label=zoomifyjs.umd.js%20gzip%20size)
![zoomifyjs.mjs](https://img.badgesize.io/mrazinshaikh/zoomifyjs/master/dist/zoomifyjs.mjs?compression=gzip&color=blue&label=zoomifyjs.mjs%20gzip%20size)


Zoomifyjs is a lightweight (only 1kb gzipped) image zoom plugin with no dependencies and no styling. As Brad Frost once said "do that shit yourself". It is 100% open source and [available on Github](https://github.com/mrazinshaikh/zoomifyjs). It is free to use on personal and commercial projects. Use it with your favourite module bundler or by manually injecting the script into your project.

Full docs: https://mrazinshaikh.github.io/zoomifyjs

1. [Installation](#installation)
2. [Options](#options)
3. [API](#api)
4. [Contributing](#contributing)
5. [Roadmap](#roadmap)

## Installation

Setup is easy. A little bit of markup...

```html
<picture>
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        id="zoomifyJs"
    >
</picture>
```

If you are using a module bundler like Webpack or Vite...

```bash
npm install zoomifyjs
```
Or from yarn
 
```bash
yarn add zoomifyjs # Available soon....
```

```js
import ZoomifyJs from "zoomifyjs";
new ZoomifyJs();
```

...or manually inject the minified script into your website.

```html
<script src="zoomifyjs.umd.js"></script>
<script>
  new ZoomifyJs();
</script>
```

## Options

ZoomifyJs comes with a few (optional) settings that you can change by passing an object as an argument. Default values are presented below.

```js
new ZoomifyJs({
  selector: '.zoomifyJs',
  transitionDuration: 300,
  easing: 'ease-in-out',
  scale: 2,
  clickToZoom: true
});
```

**`selector`** (string)  
The selector to use as a carousel. Make sure to set proper sizing on image element (which will be used on parent element as max sizing to prevent image overflowing on scale)

**`transitionDuration`** (number)  
Zoom transition duration in milliseconds.

**`easing`** (string)  
It is like a CSS `transition-timing-function` — describes acceleration curve.

**`scale`** (number)  
The number of zoom scale amount.

**`clickToZoom`** (boolean)  
Enable zoom after click on the image.

## Api

**`destroy`** (function)  
Remove zoom instance from the element

## Contributing

```
Coming soon...
```

## Roadmap

1. [x] Register on npm package registry 
2. [] Register on yarn package registry 
3. [] Register for cdn.
4. [] Enable zoom on multiple image with single instance  
5. [] Allow DOMElement for selector value
6. [] Image parent element styling improvement (needs basic styling on instance initialization, before clickToZoom)
7. [] Change image source bug fix
8. [] Allow customizing click to zoom button stylings
9. [] Codepen collection for more examples