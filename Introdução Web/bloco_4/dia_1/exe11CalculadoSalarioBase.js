//Exercício 11

//declaração das variáveis:
let salarioBruto = 4200;
let salarioBase;
let salarioFinal;
let aliquotaInss;
let aliquotaInssMaxima;
let aliquotaIR;
let parcelaIR;
 

// Tabela INSS

if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08; //8%
    aliquotaInssMaxima = aliquotaInss * salarioBruto;
    salarioBase = salarioBruto - aliquotaInssMaxima;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = 0.09; //9%
    aliquotaInssMaxima = aliquotaInss * salarioBruto;
    salarioBase = salarioBruto - aliquotaInssMaxima;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = 0.11; //11%
    aliquotaInssMaxima = aliquotaInss * salarioBruto;
    salarioBase = salarioBruto - aliquotaInssMaxima;
}
else {
    aliquotaInssMaxima = 570.88
    salarioBase = salarioBruto - aliquotaInssMaxima;
}

// Tabela IR

if(salarioBase <= 1903.98){
    parcelaIR = 0;
    salarioFinal = salarioBase - parcelaIR;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaIR = 0.075 * salarioBase; // 7,5%
    parcelaIR = aliquotaIR - 142.80;
    salarioFinal = salarioBase - parcelaIR;

}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaIR = 0.15 * salarioBase; // 15%
    parcelaIR = aliquotaIR - 354.80;
    salarioFinal = salarioBase - parcelaIR;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaIR = 0.225 * salarioBase; // 22,5%
    parcelaIR = aliquotaIR - 636.13;
    salarioFinal = salarioBase - parcelaIR;
}
else {
    aliquotaIR = 0.275 * salarioBase; // 27,5%
    parcelaIR = aliquotaIR - 869.36;
    salarioFinal = salarioBase - parcelaIR;
}
// Corpo do exercício preparado
// Vamos para a apresentação do salário final

console.log(salarioFinal);
