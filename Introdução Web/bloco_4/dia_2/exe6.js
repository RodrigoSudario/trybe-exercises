let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for(let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 != 0){
        impar.push(numbers[1]);
    }
}
if(impar.length -1 == -1){
    console.log("Não existe números ímpares");
}
else{
    console.log(`Existem ${impar.length} ímpares`);
}