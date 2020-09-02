function maisRepetido(numeros) {
    let contRepetido = 0; // aqui será salvo o maior contador de nº repetidos no segundo IF e assim, resetar o contNumero;
    let contNumero = 0; // aqui será salvo quantas vezes o nº repetiu dentro do primeiro IF, depois será resetado;
    let indexNumeroRepetido = 0; //aqui será salvo o índice do nº que mais repetiu ;
    for (let index in numeros) {
      let verificaNumero = numeros[index]; // essa variável assume o nº do index para ser comparado no primeiro IF;
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) { //aqui o verificaNumero é comparado com os números do array;
          contNumero++; //sempre que o número for igual, será acrescentado +1;
        }
      }
      if (contNumero > contRepetido) { //comparando o contador de número para assim registrar os valores;
        contRepetido = contNumero; //o contNumero será resetado para continuar a verificação nos index seguinte;
        indexNumeroRepetido = index; //para salvar a posição do index, e assim, sabermos o número que mais repetiu no array;
      }
      contNumero = 0; //será resetado para reaproveitação dentro do index, o primeiro FOR.
    }
    return numeros[indexNumeroRepetido];
  }
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2