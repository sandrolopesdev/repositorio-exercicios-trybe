const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const emails = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(emails);

// Caso você realize uma verificação com o find que não encontre nenhum elemento, o 
// retorno será undefined. Observe e execute o exemplo abaixo para verificar se 
// existem pessoas com idade igual a 33 anos:

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade === 33); // undefined

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((element) => element % 3 === 0 && element % 5 === 0);

console.log(verifyNumbers);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verifyNames = names.find((element) => element.length === 5);

console.log(verifyNames);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const verifyMusic = musicas.find((element) => element.id === '31031685');

console.log(verifyMusic);
