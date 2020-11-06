let n = 5;
let i;
let j;
let posicaoN = n;
let estrela ='*';
let line ='';

for(i = 0; i < n; i += 1){
    for(j = 0; j <= n; j += 1){
        if(j < posicaoN){
            line = line + '';

        }
        else {
            line = line + estrela;
        }
    }
console.log(line);
line = '';
posicaoN -= 1;

}