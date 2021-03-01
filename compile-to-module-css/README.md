# Compile to module-css

Snowpack has an default convention that when using the scss plugin:

- `*.scss` files are compilied as plain css
- `*.module.scss` files are compiled with css modules

That's great for greenfield projects, however I'm trying to leverage snowpack in
an existing codebase where the convention is that `*.scss` files are always 
passed through css modules.

Rather than renaming 1600+ files scss files, it would be very useful if I could
write a plugin that would consume `.scss` files and output `.module.css` files
in the hope that I can leverage snowpack's built-in CSS modules support rather
than having to roll my own.

This folder contains a plugin-scss-to-modulecss.js file that is a duplicate of
 the official Sass plugin, except that the resolve output config is changed from
 ".css" to ".module.css".

I would expect that this would result in snowpack being able to serve the content
from App.scss, passed through css modules, however it crashes.


### To test

Open this folder and `npm install` and run `npm start`

Note that the page fails to load because of a 500 error when loading
`http://localhost:8080/dist/App.module.css.proxy.js` The error is;

```
[16:21:46] [snowpack] Build Result Error: There was a problem with a file build result.
[16:21:46] [snowpack] TypeError: Cannot read property 'code' of undefined
    at FileBuilder.getProxy (/Users/ben/src/github.com/BPScott/snowpack-test/compile-to-module-css/node_modules/snowpack/lib/index.js:111801:48)
    at loadUrl (/Users/ben/src/github.com/BPScott/snowpack-test/compile-to-module-css/node_modules/snowpack/lib/index.js:130547:57)
    at processTicksAndRejections (node:internal/process/task_queues:94:5)
    at async handleRequest (/Users/ben/src/github.com/BPScott/snowpack-test/compile-to-module-css/node_modules/snowpack/lib/index.js:130627:28)
[16:21:46] [snowpack] TypeError: Cannot read property 'code' of undefined
[16:21:46] [snowpack] [500] /dist/App.module.css.proxy.js
```

### Expected result

File and page load correctly. The content of App.scss is passed through
Snowpack's CSS modules implementation, as though the source file was named
"App.module.scss" and the plugin resolved ".css" instead of ".module.css".
