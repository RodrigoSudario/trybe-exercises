function verificador(nome) {
    let arrayLetras = nome.split(""); // o Split transforma separa uma string dentro de um array
    let palidrome = true;
    for (let key in arrayLetras){
        if(arrayLetras[key] != nome[(nome.length -1) - key]) {
            palidrome = false;
        }
    }    
    return palidrome;
    
}
console.log(verificador("gelo"));
