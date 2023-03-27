// Verifica se pelo menos uma pessoa possui um cargo de gerência;

// .SOME
const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

  // a HOF .some, retorna true se apenas um dos elementos satifizer a condição de cargo de gerência;
  
  console.log(verificaCargo); // true

// Verifica se passa em todas as matérias;

// .EVERY
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  //                   busca os valores do obj                valores do obj
  const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
  //                                         HOF                         condição

  // a HOF .every retorna true somente se todos os elementos satisfizer a condição 'Aprovado';
  
console.log(verifyGrades);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((element) => element === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));