const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Teste se o retorno de sum(4, 5) é 9
// assert.strictEqual((sum(4, 5)), 9); ok

// Teste se o retorno de sum(0, 0) é 0
// assert.strictEqual((sum(0, 0)), 0); ok

// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
// assert.strictEqual((sum(4, '5')), 9) ok
// throw new Error('parameters must be numbers');