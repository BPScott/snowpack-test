# React Router Proptypes

Affects: Snowpack 3.1.1

Using react-router-dom fails in Snowpack 3.1.1 when used in conjunction with 
React 16.14.0. This previously worked in Snowpack 3.0.13.

Attempting to use the router results in the following error:

```
Uncaught TypeError: checkPropTypes is not a function
    at validatePropTypes (react.v16.14.0.js:1729)
```

I suspect this is because react's compiled output expects checkPropTypes to be a
function however it is imported using a namespace definition which is not callable.

```
// At the top of /_snowpack/pkg/react.v16.14.0.js
import * as checkPropTypes from '/_snowpack/pkg/prop-types.checkPropTypes.v15.7.2.js';
```

The issue goes away if I either:

- Use snowpack 3.1.1 and react >=17.0.0 (keep snowpack version, update react)
- Use snowpack 3.0.13 and react 16.14.0 (downgrade snowpack, keep react version)

### To test

Open this folder and `npm install` and run `npm start`

See error

### Expected result

Page should render
