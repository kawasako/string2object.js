/*!
 * @license string2object.js v0.0.1
 * Copyright (c) 2016 Kohei Kawasaki
 * License: MIT
 */

const stringsRegExp = /("[^"]*?"|'[^']*?')/gm;
const numbersRegExp = /\d/gm;
const keysRegExp = /([{,])[\w\d]*?(\:)/gm;
const validTestRegExp = /^[\{\}\[\]\,]*$/;

const removeWhiteSpaces = function(str) {
   return (str + '').replace(/\s*/gm, '');
};

const trim = function(str) {
   return (str + '').replace(/^\s*(\S*?)\s*$/m, '$1');
};

export default function string2Object(input) {
   if (!input) {
      return input;
   }
   let memo = removeWhiteSpaces(input + '')
      .replace(stringsRegExp, '')
      .replace(numbersRegExp, '')
      .replace(keysRegExp, '$1');
   let isValid = validTestRegExp.test(memo);
   if (isValid) {
      return (new Function(`return ${trim(input)}`))();
   }
   return input;
};
