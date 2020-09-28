const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da manhã na lesson2. 
//Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, 
//a chave que deverá ser adicionada e o valor dela.
const part1 = (obj, key, value) => {
  if (obj === 'lesson2') {
    lesson2[key] = value;
  }
};
part1('lesson2', 'turno', 'Manhã');

//Crie uma função para listar as keys de um objeto. 
//Essa função deve receber um objeto como parâmetro.
const part2 = (obj) => {
  if (obj === 'lesson1') {
    console.log(Object.keys(lesson1));
  }
  else if (obj === 'lesson2') {
    console.log(Object.keys(lesson2));
  }
  else if (obj === 'lesson3') {
    console.log(Object.keys(lesson3));
  }
};
part2('lesson3');

//Crie uma função para mostrar o tamanho de um objeto.
const part3 = (obj) => {
  if (obj === 'lesson1') {
    console.log(Object.keys(lesson1).length);
  }
  else if (obj === 'lesson2') {
    console.log(Object.keys(lesson2).length);
  }
  else if (obj === 'lesson3') {
    console.log(Object.keys(lesson3).length);
  }
};
part3('lesson3');

//Crie uma função para listar os valores de um objeto. 
//Essa função deve receber um objeto como parâmetro.
const part4 = (obj) => {
  if (obj === 'lesson1') {
    console.log(Object.values(lesson1));
  }
  else if (obj === 'lesson2') {
    console.log(Object.values(lesson2));
  }
  else if (obj === 'lesson3') {
    console.log(Object.values(lesson3));
  }
};
part4('lesson3');

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
//Cada chave desse novo objeto será uma aula, sendo essas chaves: 
//lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)
const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);