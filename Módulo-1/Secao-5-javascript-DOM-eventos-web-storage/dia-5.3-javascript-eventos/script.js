const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
}
createDaysOfTheWeek();

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday.
const daysOfMonth = () => {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
  const days = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const createDays = document.createElement('li');
    createDays.innerHTML = day;
    createDays.className = 'day';
    days.appendChild(createDays);

    if (day === 24 || day === 25 || day === 31) {
      createDays.className = 'day holiday';
      days.appendChild(createDays);
    } if (day === 4 || day === 11 || day === 18 || day === 25) {
      createDays.className = 'day friday';
      days.appendChild(createDays);
    }
  }

};
daysOfMonth();

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
