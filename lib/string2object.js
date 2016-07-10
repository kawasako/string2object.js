(function (global, factory) {
   if (typeof define === "function" && define.amd) {
      define(['exports'], factory);
   } else if (typeof exports !== "undefined") {
      factory(exports);
   } else {
      var mod = {
         exports: {}
      };
      factory(mod.exports);
      global.string2object = mod.exports;
   }
})(this, function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = string2Object;

   var stringsRegExp = /("[^"]*?"|'[^']*?')/gm;
   var numbersRegExp = /\d/gm;
   var keysRegExp = /([{,])[\w\d]*?(\:)/gm;
   var validTestRegExp = /^[\{\}\[\]\,]*$/;

   var removeWhiteSpaces = function removeWhiteSpaces(str) {
      return (str + '').replace(/\s*/gm, '');
   };

   var trim = function trim(str) {
      return (str + '').replace(/^\s*(\S*?)\s*$/m, '$1');
   };

   function string2Object(input) {
      if (!input) {
         return input;
      }
      var memo = removeWhiteSpaces(input + '').replace(stringsRegExp, '').replace(numbersRegExp, '').replace(keysRegExp, '$1');
      var isValid = validTestRegExp.test(memo);
      if (isValid) {
         return new Function('return ' + trim(input))();
      }
      return input;
   };
});