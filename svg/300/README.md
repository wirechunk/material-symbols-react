# [@wirechunk/material-symbols-react-300](https://github.com/wirechunk/material-symbols-react/tree/main/svg/300)

Latest optimized SVGs with weight 300 for Material Symbols.

> This package is automatically updated, so it will always have the latest icons from Google.

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Installation

Install the [latest version][releases] using:

```sh
npm install @wirechunk/material-symbols-react-300@latest
```

The package `@wirechunk/material-symbols-react-300` includes only SVGs with weight 300. To use a different weight, replace `300` in the package name with the desired weight.

<details>
<summary><strong>Show all packages</strong></summary><br>

| Package                                                                                | Weight |
| :------------------------------------------------------------------------------------- | :----- |
| [`@wirechunk/material-symbols-react-200`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-200) | 200    |
| [`@wirechunk/material-symbols-react-300`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-300) | 300    |
| [`@wirechunk/material-symbols-react-400`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-400) | 400    |
| [`@wirechunk/material-symbols-react-500`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-500) | 500    |
| [`@wirechunk/material-symbols-react-600`](https://www.npmjs.com/package/@wirechunk/material-symbols-react-600) | 600    |

</details>

## Usage

Material Symbols are available in three styles&mdash;`outlined`, `rounded`, and `sharp`. SVGs are available for both unfilled (`FILL` 0) and filled (`FILL` 1) states with grade (`GRAD`) 0 and size (`opsz`) 48px. Other variations of grade and size are not included to keep the package size small. SVGs for each icon are located in the corresponding style directory:

```
@wirechunk/material-symbols-react-300/{optical size}/{style}/{icon}.tsx
@wirechunk/material-symbols-react-300/{optical size}/{style}/{icon}-fill.tsx
```

Optical sizes can be 20, 24, or 48.

For example, SVGs for the `face` icon with weight 300 and optical size 20 are located at:

```
@wirechunk/material-symbols-react-300/20/outlined/face.tsx
@wirechunk/material-symbols-react-300/20/outlined/face-fill.tsx
@wirechunk/material-symbols-react-300/20/rounded/face.tsx
@wirechunk/material-symbols-react-300/20/rounded/face-fill.tsx
@wirechunk/material-symbols-react-300/20/sharp/face.tsx
@wirechunk/material-symbols-react-300/20/sharp/face-fill.tsx
```

```js
import { Face } from '@wirechunk/material-symbols-react-300/20/outlined/face';

function App() {
  return (
    <div>
      <Face className="some-face" />
    </div>
  );
}
```

### Styling

SVGs can be styled using CSS or normal props. All SVGs have the `fill="currentcolor"` prop set, so they inherit their color. You can change the color by setting the `color` CSS property.

Size can also be set with `width` and `height` props. Setting `width` and `height` to `1em` allows changing size via `font-size`.

```css
.some-face {
  width: 1em;
  height: 1em;
}
```

## License

Material Symbols are created by [Google](https://github.com/google/material-design-icons#license).

> We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0][license]. Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's *about* screen, but it's not required.

This project is a fork of [github.com/marella/material-symbols](https://github.com/marella/material-symbols).

[releases]: https://github.com/wirechunk/material-symbols-react/tags
[license]: https://github.com/wirechunk/material-symbols-react/blob/main/svg/300/LICENSE
