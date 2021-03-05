# Incorrect transitive dependency deduping

When buildiing packages, incorrect transitive dependencies are used. It seems to use the top-level version of a package instead of the version specified by the dependency.

In this example we depend up on:

- `uuid@8.3.2`
- `uuidv4@6.0.1`, which has a transitive dependency on `uuid@3.4.0`.

`uuid@3.4.0` exposed `uuid/v4` and `uuid/v5` entrypoints that are not available in `uuid@8.3.2`.

I would expect the compilation of `uuidv4` to reference files built from `uuid@3.4.0`.

### To test

Open this folder and `npm install` and run `npm start`

See that the console errors with:

```
[14:02:58] [snowpack] + uuidv4@6.0.1
[14:02:58] [snowpack] └── uuid/v4@3.4.0
[14:02:58] [snowpack] └── uuid/v5@3.4.0 (dedupe)
[14:02:58] [snowpack] + uuid@8.3.2
[14:02:58] [snowpack] Package(s) failed to build: Package "uuid" exists but package.json "exports" does not include entry for "./v4".
```

This is because uuidv4 tries to load `uuid@8.3.2`- which does not expose the /v4 and /v5 entrypoints, instead of loading `uuid/v4@3.4.0` which does


### Expected result

Server can start sucessfully. When viewing generated output for `uuidv4` in the browser it references `uuid@3.4.0`.
