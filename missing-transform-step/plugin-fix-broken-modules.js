// @ts-check

/**
 * A plugin to fix bugs in packages, until fixes can be applied upstream.
 */

/** @type {import("snowpack").SnowpackPluginFactory } */
module.exports = function pluginFixBrokenPackages() {
  return {
    name: 'snowpack-fix-broken-modules',
    async transform({id, contents}) {
      console.log("transform", id);
      // react-cookie claims it ships CJS code but it's got a require()
      // statement in it. That's not great, so I was hoping I'd be able to write
      // transform plugin to rewrite that file into some thing that's valid by
      // removing the `var hoistStatics = require('hoist-non-react-statics');`
      // line and adding a `import hoistStatics from 'hoist-non-react-statics';`
      // at the top of the file
      //
      // However it seems that the transform hook is never triggered for this file
      // other, even though it gets triggered for other files from node_modules
      if (id.includes('react-cookie')) {
        console.log("Now can now transform react-cookie", id, contents);
      }
    },
  };
};
