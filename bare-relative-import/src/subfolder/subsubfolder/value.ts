// Importing `.` fails as it doesn't get transformed to ./index.js
import {value as value1} from '.';
// however `./` works
import {value as value2} from './';

// Importing `..` fails as it doesn't get transformed to ./index.js
import {value as value3} from '..';
// however `../` works
import {value as value4} from '../';

export {value1, value2, value3, value4};
