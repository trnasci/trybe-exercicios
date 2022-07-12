function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();
function createDaysOfTheMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let getUl = document.querySelector('#days');
    for (let i of decemberDaysList) {
        let dia = i;
        let createDL = document.createElement('li');
        createDL.innerText = dia;   
    
        if (dia === 24 || dia === 31) {
            createDL.className = 'day holiday'; 
            getUl.appendChild(createDL); 
          }
        else if (dia === 4 || dia === 11 || dia === 18) {
            createDL.className = 'day friday'; 
            getUl.appendChild(createDL); 
          }
        else if (dia === 25 ) {
            createDL.className = 'day holiday friday'; 
            getUl.appendChild(createDL); 
          }else {
            createDL.className = 'day '; 
            getUl.appendChild(createDL); 
          }  
    }
}
createDaysOfTheMonth();

function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    
    buttonContainer.appendChild(newButton);
  }
  
  createHolidayButton('Feriados');

  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
  function displayHolidays() {

  };

  displayHolidays();
  function createFrydayButton (frydayName){
    let getBC = document.querySelector('.buttons-container');
    let buttonFryday = document.createElement('button');
    buttonFryday.innerText = frydayName;
    buttonFryday.id = 'btn-friday';
    getBC.appendChild(buttonFryday);

  }
  createFrydayButton ('Sexta');