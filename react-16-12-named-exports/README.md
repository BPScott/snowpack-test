# React 16.12.0 named exports

Affects: Snowpack 3.1.1

I've found a case where older versions of `react` appear to be compiled incorrectly. This seems to effect react `16.12.0` and below. However using `16.13.0` and above does not trigger the error. The obvious user-facing step is "update react" but I figured I should report this as this seems like a cjs->esm conversion bug that could bite other packages.

The following code in an App or package:

```
import React, {useState} from 'react';

console.log(useState);
```

Results in the following error at runtime: 

```
Uncaught SyntaxError: The requested module '../_snowpack/pkg/react.v16.12.0.js' does not provide an export named 'useState'
```

the issue goes away if I either:

- Use snowpack 3.1.1 and react >=16.12.0 (keep snowpack version, update react)
- Use snowpack 3.0.13 and react 16.11.0 (downgrade snowpack, keep react version)

### To test

Open this folder and `npm install` and run `npm start`

### Expected result

Page renders
