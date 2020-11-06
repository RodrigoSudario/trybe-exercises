const sum = require('./sum')

test('se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toBe(9);
});
test('se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toBe(0);
});
test('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
  expect(sum(4, '5')).toBe(9);
});
