# string2object.js
Convert to Object for the string like object.
This library use `new Function`. So, to validate the input value . for XSS countermeasures.

## Usage
```
import s2o from 'object2string';
s2o('{ key: "value" }'); // => return Object: { key: 'value' }
s2o('alert("xss!")'); // => return String: 'alert("xss!")'
```
