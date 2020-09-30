const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// Compare dois objetos (JSON) para verificar se são idênticos ou não
assert.deepStrictEqual(obj1, obj2); // são idênticos;
assert.notDeepStrictEqual(obj1, obj3); // não são idênticos;
assert.notDeepStrictEqual(obj2, obj3); // não são idênticos;
