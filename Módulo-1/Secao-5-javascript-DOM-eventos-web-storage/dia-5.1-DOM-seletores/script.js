const description = () => {
  const element = document.querySelectorAll('p')[1];
  element.innerHTML = 'Me vejo como um desenvolvedor Sênior, desenvolvendo aplicações complexas e ajudando desenvolvedores júniors.';
};
description();

const changeColor = (element, color) => { 
  const mainElement = document.querySelector(element);
  mainElement.style.backgroundColor = color;
};
changeColor('.main-content', 'rgb(76,164,109'); // altera o backgroudColor da main
changeColor('.center-content', '#fff'); // altera o backgroundColor da section

const correctTitle = () => {
  const title = document.querySelector('.title');
  title.innerHTML = 'Desafio - JavaScript';
};
correctTitle();

const capitalLetters = () => {
  const paragraph = document.querySelectorAll('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase(); // Faz todas as letras ficarem maiúsculas
};
capitalLetters();

const print = () => {
  const printP = document.querySelectorAll('p');
  for (let index = 0; index < printP.length; index += 1) { 
    // como querySelectorAll retorna uma NodeList e podemos considerá-la um objeto, é necessário iterar esse objeto para depois imprimir
    console.log(printP[index]);
  }
};
print();
