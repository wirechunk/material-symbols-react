# [@wirechunk/material-symbols-react-400](https://github.com/marella/material-symbols/tree/main/svg/400)

Latest optimized SVGs with weight 400 for Material Symbols.

> This package is automatically updated, so it will always have the latest icons from Google.

> For variable icon fonts, see [`@material-symbols/font-400`](https://www.npmjs.com/package/@material-symbols/font-400)

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Installation

Install the [latest version][releases] using:

```sh
npm install @wirechunk/material-symbols-react-400@latest
```

The package `@wirechunk/material-symbols-react-400` includes only SVGs with weight 400. To use a different weight, replace `400` in the package name with the desired weight.

<details>
<summary><strong>Show all packages</strong></summary><br>

| Package                                                                                | Weight |
| :------------------------------------------------------------------------------------- | :----- |
| [`@wirechunk/material-symbols-react-100`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-100) | 100    |
| [`@wirechunk/material-symbols-react-200`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-200) | 200    |
| [`@wirechunk/material-symbols-react-300`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-300) | 300    |
| [`@wirechunk/material-symbols-react-400`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-400) | 400    |
| [`@wirechunk/material-symbols-react-500`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-500) | 500    |
| [`@wirechunk/material-symbols-react-600`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-600) | 600    |
| [`@wirechunk/material-symbols-react-700`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-700) | 700    |

</details>

## Usage

Material Symbols are available in three styles&mdash;`outlined`, `rounded`, and `sharp`. SVGs are available for both unfilled (`FILL` 0) and filled (`FILL` 1) states with grade (`GRAD`) 0 and size (`opsz`) 48px. Other variations of grade and size are not included to keep the package size small. SVGs for each icon are located in the corresponding style directory:

```js
@wirechunk/material-symbols-react-400/{style}/{icon}.svg      /* Fill 0 */
@wirechunk/material-symbols-react-400/{style}/{icon}-fill.svg /* Fill 1 */
```

For example, SVGs for `face` icon are located at:

```js
@wirechunk/material-symbols-react-400/outlined/face.svg      /* Fill 0 */
@wirechunk/material-symbols-react-400/outlined/face-fill.svg /* Fill 1 */
@wirechunk/material-symbols-react-400/rounded/face.svg       /* Fill 0 */
@wirechunk/material-symbols-react-400/rounded/face-fill.svg  /* Fill 1 */
@wirechunk/material-symbols-react-400/sharp/face.svg         /* Fill 0 */
@wirechunk/material-symbols-react-400/sharp/face-fill.svg    /* Fill 1 */
```

### React

```js
import { Face } from '@wirechunk/material-symbols-react-400/20/outlined/face.svg';

function App() {
  return (
    <div className="app">
      <Face />
    </div>
  );
}
```

### Styling

SVGs can be styled using CSS. Setting `width` and `height` to `1em` allows changing size via `font-size`. Setting `fill` to `currentColor` allows changing color via `color`.

```css
.App svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
```

## Available Icons

See [demo].

## License

Material Symbols are created by [Google](https://github.com/google/material-design-icons#license).

> We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0][license]. Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's *about* screen, but it's not required.

[releases]: https://github.com/marella/material-symbols/releases
[license]: https://github.com/marella/material-symbols/blob/main/svg/400/LICENSE
[demo]: https://marella.github.io/material-symbols/demo/
