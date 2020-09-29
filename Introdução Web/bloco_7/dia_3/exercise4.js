const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
console.log(myFizzBuzz(15));
// R: fizzbuzz
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
console.log(myFizzBuzz(6));
// R: fizz
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
console.log(myFizzBuzz(10));
// R: buzz
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
console.log(myFizzBuzz(4));
// R: 4
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
console.log(myFizzBuzz('4'));
// R: false
