import s2o from '../../lib/string2object';

function test(name, truth) {
  try {
    if (truth) {
      console.info(`Success test: ${name}`);
    } else {
      throw new Error(`Failed test: ${name}`);
    }
  } catch(err) {
    throw err;
  }
}

let simpleObject = s2o('{ key: 1 }');
test('Convert string of Object.', simpleObject.key === 1);

let singleQuoteObject = s2o('{ \'key\': "1" }');
test('Convert string of single quote Object.', singleQuoteObject.key === '1');

let simpleJSON = s2o('{ "key": 1 }');
test('Convert string of JSON.', simpleObject.key === 1);

let simpleArray = s2o('[1, 2, 3]');
test('Convert string of Array.',
  simpleArray[0] === 1
  && simpleArray[1] === 2
  && simpleArray[2] === 3
  && simpleArray.length === 3
);

let nestedObjectString = `
  {
    total: 3,
    index: 1,
    items: [{
      id: 0,
      name: '001'
    }, {
      id: 1,
      name: '002'
    }],
    user: {
      id: 0,
      name: 'Jhon',
      description: 'I am Jhon.\\n'
    }
  }
`;
let nestedObject = s2o(nestedObjectString);
test('Convert string of nested Object.', nestedObject.items[0].name === '001');

let testString = 'hoge';
let simpleString = s2o(testString);
test('Convert string.', testString === simpleString);

let notSafeString = '(function() { return "hoge" })()';
let notSafeObject = s2o(notSafeString);
test('Can\'t do function.', notSafeObject === notSafeString);

let notSafeString2 = `{} + (function() { return "hoge" })() + {}}`;
let notSafeObject2 = s2o(notSafeString2);
test('Can\'t do function. - take 2', notSafeObject2 === notSafeString2);
