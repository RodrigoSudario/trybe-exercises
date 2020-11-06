//Exercício 10
//Calculado custos e lucro

//Foram vendidos 1000 produtos
let custoDoProd = 10 * 1000;
let valorVenda = 15 * 1000;

//Variável do imposto de renda
let imposto = custoDoProd * (0.2);

//Declaração das últimas variáveis
let custoFinal;
let lucro;

//Resolução do problema
if (custoDoProd < 0 || valorVenda < 0) {
    console.log("Erro na contagem: Valores abaixo de zero!")
}
else {
    custoFinal = custoDoProd + imposto;
    lucro = (valorVenda - custoFinal);
    console.log(lucro);
}
