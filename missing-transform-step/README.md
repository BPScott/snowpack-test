# Missing transform step

I've found a case where the `transform` step is never triggered for a package from node_modules. It seems the transform hook is triggered for some packages  (e.g. `@shopify/react-html`), but not for other packages. In this case transform isn't being triggered for `react-cookie`. 

Firing a transform step for `react-cookie` would be very useful as it currently ships invalid code that i'd like to manipuate to fix.

### To test

Open this folder and `npm install` and run `npm start`.

In the console see that there are several "transform" log lines when the transform hook is triggered for modules, thanks to the plugin in in `plugin-fix-broken-modules.js`.

However there is no transform step triggered for the `react-cookie` package.

### Expected result

The transform hook is triggered for files in the `react-cookie` package.
