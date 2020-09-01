let n = 7;
let linha;
let coluna;
let colocarLinha = '';
let estrela = '*';
let midMatrix = ((n+1)/2);
let controleEsq = midMatrix;
let controleDir = midMatrix;

for(linha = 0; linha <= midMatrix; linha +=1){
    for(coluna = 1; coluna <= n; coluna += 1) {
        if(coluna > controleDir && coluna < controleEsq) {
            colocarLinha = colocarLinha + estrela;
        }
        else{
            colocarLinha = colocarLinha + ' ';
        }
    }
    console.log(colocarLinha);
    colocarLinha = '';
    controleEsq += 1;
    controleDir -= 1;
};