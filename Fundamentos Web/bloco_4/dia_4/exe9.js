//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

function nomesLength(nomes){
    let maiorPalavra = nomes[0];
    for(let indice in nomes){
        if(maiorPalavra.length < nomes[indice].length){
        maiorPalavra = nomes[indice];
        }
    
    }
    return maiorPalavra;
}
console.log(nomesLength(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
