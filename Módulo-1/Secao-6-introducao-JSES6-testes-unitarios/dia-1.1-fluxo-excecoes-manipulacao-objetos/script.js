const pessoaEstudante = {};

const keyFullName = 'fulName';
const fullNameValue = 'Sandro Lopes Filho';
const keyEmail = 'email';
const emailValue = 'sandrolopesfilho@gmail.com';
const keyPhone = 'phone';
const phoneValue = '(11) 9 59452292';
const keyGitHGub = 'gitHub';
const gitHubValue = 'sandrolopesdev';
 

const adicionaPropriedade = (obj, key, value) => {
    obj[key] = value;
};

adicionaPropriedade(pessoaEstudante, keyFullName, fullNameValue);
adicionaPropriedade(pessoaEstudante, keyEmail, emailValue);
adicionaPropriedade(pessoaEstudante, keyPhone, phoneValue);
adicionaPropriedade(pessoaEstudante, keyGitHGub, gitHubValue);

console.log(pessoaEstudante);
