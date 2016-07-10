# string2object.js
Convert to Object for the string like object.
This library use `new Function`. So, to validate the input value, for XSS countermeasures.

## Usage
```
import s2o from 'object2string';
s2o('{ key: "value" }'); // => return Object: { key: 'value' }
s2o('alert("xss!")'); // => return String: 'alert("xss!")'
```

## Develop
```
npm run build # => only build main-script.
npm run test-build # => only build test-script.
npm run test # => run test after `build` & `test-build`.
```