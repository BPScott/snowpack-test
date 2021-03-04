# Bare relative imports

Snowpack 3.0.12 and 3.1.0-pre.11 fail when importing from `.` and `..` as they are not transformed to full filenames.

Importing from `./` and `../` both work as expected - transforming to './index.js' and '../index.js'.

I would expect the following two code samples to produce identical compiled code:

```
import {BLAH} from '.';
import {BLAH} from '..';
```

and 

```
import {BLAH} from './';
import {BLAH} from '../';
```


### To test

Open this folder and `npm install` and run `npm start`

Note that the page fails to load because iit can't resolve module specifers.

Note that http://localhost:8080/dist/subfolder/subsubfolder/value.js contains the following code, containing untransformed paths

```
import {value as value1} from ".";
import {value as value2} from "./index.js";
import {value as value3} from "..";
import {value as value4} from "../index.js";
export {value1, value2, value3, value4};
```

### Expected result

Importing '.' works in the same manner as importing './'

Importing '..' works in the same manner as importing '../'

And thus the optput of value.js should be

```
import {value as value1} from "./index.js";
import {value as value2} from "./index.js";
import {value as value3} from "../index.js";
import {value as value4} from "../index.js";
export {value1, value2, value3, value4};
```
