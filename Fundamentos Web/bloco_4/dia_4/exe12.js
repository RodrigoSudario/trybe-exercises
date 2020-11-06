//Crie uma função que receba uma string word e outra string ending. 
//Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.

function verificadorDePalavras(stringWord,stringEnding){
    let verificador;
    if(stringWord.length > stringEnding.length){
        verificador = true;

    }
    else{
        verificador = false;
    }
    return verificador;
}
console.log(verificadorDePalavras('Trybe','Be'));
console.log(verificadorDePalavras('Maçã','Abacaxi'));