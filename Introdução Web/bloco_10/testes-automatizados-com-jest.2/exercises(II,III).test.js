const { findUserById, getUserName } = require('./exercises(II,III)');

describe('Testando o retorno da função getUserName', () => {
  it('retorna usuário bucando com o ID 4', () => {
    return expect(getUserName(4)).resolves.not.toBeNull();
  });
  it('retorna erro buscando usuário com o ID 3', ()=> {
    return expect(getUserName(3)).rejects.toEqual({ error: 'User with ' + 3 + ' not found.' });
  })
});
// Agora com .then
describe('Testando o retorno da função getUserName', () => {
  it('retorna usuário bucando com o ID 4', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).not.toBeNull());
  });
  it('retorna erro buscando usuário com o ID 3', ()=> {
    expect.assertions(1);
    return getUserName(3).catch(data => expect(data).toEqual({ error: 'User with 3 not found.' }));
  });
});