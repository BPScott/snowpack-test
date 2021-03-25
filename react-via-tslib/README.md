# React Via library using tslib

Affects: Snowpack 3.1.2

More react import failure fun. This time around it's importing react exports
from a package that exposes cjs content compiled from from `tsc`.

This worked with Snowpack v3.0.13.

The error raised is the following when attemping to import from react [when packaging this file](https://unpkg.com/browse/@shopify/react-i18n@5.0.0/dist/src/context.js).

```
@shopify.react-i18n.v5.0.0.js:275 
Uncaught TypeError: Cannot read property 'createContext' of undefined
    at @shopify.react-i18n.v5.0.0.js:275
```

The compiled output of react-i18n includes:

```js
import require$$0 from '/_snowpack/pkg/react.v16.14.0.js';

//
// lots of other stuff
//

var react_1 = tslib_es6.__importDefault(require$$0);
exports.I18nContext = react_1.default.createContext(null);
```

Inspecting the `react_1` variable contains a `createContext` key but lacks a `default`.

Gut feel - I think in this file the import should be a namespace import rather than a default import.

### To test

Open this folder and `npm install` and run `npm start`

See error

### Expected result

Page should render
