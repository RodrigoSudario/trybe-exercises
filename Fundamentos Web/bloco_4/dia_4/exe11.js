//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.
function somando(numero){
    let valorTotal = 0;
    for(let i = 0; i <= numero; i+= 1){
        valorTotal = valorTotal + i;
    }
    return valorTotal;
}

console.log(somando(5));