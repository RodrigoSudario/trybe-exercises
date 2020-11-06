const uppercase = require('./uppercase');

test('Testando o retorno da callback', (done) => {
  uppercase('TESTE', str => {
    expect(str).toBe('TESTE');
    done();
  });
});