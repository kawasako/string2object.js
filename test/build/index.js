(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../../lib/string2object'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../../lib/string2object'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.string2object);
    global.index = mod.exports;
  }
})(this, function (_string2object) {
  'use strict';

  var _string2object2 = _interopRequireDefault(_string2object);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function test(name, truth) {
    try {
      if (truth) {
        console.info('Success test: ' + name);
      } else {
        throw new Error('Failed test: ' + name);
      }
    } catch (err) {
      throw err;
    }
  }

  var simpleObject = (0, _string2object2.default)('{ key: 1 }');
  test('Convert string of Object.', simpleObject.key === 1);

  var singleQuoteObject = (0, _string2object2.default)('{ \'key\': "1" }');
  test('Convert string of single quote Object.', singleQuoteObject.key === '1');

  var simpleJSON = (0, _string2object2.default)('{ "key": 1 }');
  test('Convert string of JSON.', simpleObject.key === 1);

  var simpleArray = (0, _string2object2.default)('[1, 2, 3]');
  test('Convert string of Array.', simpleArray[0] === 1 && simpleArray[1] === 2 && simpleArray[2] === 3 && simpleArray.length === 3);

  var nestedObjectString = '\n  {\n    total: 3,\n    index: 1,\n    items: [{\n      id: 0,\n      name: \'001\'\n    }, {\n      id: 1,\n      name: \'002\'\n    }],\n    user: {\n      id: 0,\n      name: \'Jhon\',\n      description: \'I am Jhon.\\n\'\n    }\n  }\n';
  var nestedObject = (0, _string2object2.default)(nestedObjectString);
  test('Convert string of nested Object.', nestedObject.items[0].name === '001');

  var testString = 'hoge';
  var simpleString = (0, _string2object2.default)(testString);
  test('Convert string.', testString === simpleString);

  var notSafeString = '(function() { return "hoge" })()';
  var notSafeObject = (0, _string2object2.default)(notSafeString);
  test('Can\'t do function.', notSafeObject === notSafeString);

  var notSafeString2 = '{} + (function() { return "hoge" })() + {}}';
  var notSafeObject2 = (0, _string2object2.default)(notSafeString2);
  test('Can\'t do function. - take 2', notSafeObject2 === notSafeString2);
});