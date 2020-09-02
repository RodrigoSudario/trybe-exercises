//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function maxValor(numeros) {
    let bigIndice = 0; // acolhe o maior índice
    
    for(let i in numeros){
        if(numeros[bigIndice] < numeros[i]){
            bigIndice = i;
        }
    }
    return bigIndice;
}

console.log(maxValor([2, 3, 6, 7, 10, 1]));