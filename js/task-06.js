
const controls = document.getElementById('controls');
const containerDivs = document.getElementById('boxes');
const inputValue = document.querySelector('input[type="number"]');
const dataCreate = document.querySelector('button[data-create]');
const dataDestroy = controls.querySelector('button[data-destroy]');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const minValue = parseInt(inputValue.min);
const maxValue = parseInt(inputValue.max);

dataCreate.addEventListener('click', () => {

  const validValue = (value) => {
      return value >= minValue && value <= maxValue; 
  };


  const createBoxes = (amount) => { 

    if (!validValue(amount)) { 
      alert(`Неправильна кількість, значення повинно бути від ${minValue} до ${maxValue} `);
      return;}
    
    containerDivs.innerHTML = '';

    let sizeBox = 30;
   
    for (let i = 1; i <= amount; i++) {
   
      const divs = document.createElement('div');
      const boxColor = getRandomHexColor();
      divs.style.width = `${sizeBox}px`;
      divs.style.height = `${sizeBox}px`;
      divs.style.backgroundColor = boxColor;

      sizeBox += 10;

      containerDivs.appendChild(divs);
      
    } 
  
 }; 

  
  const amount = parseInt(inputValue.value);
  createBoxes(amount);
  inputValue.value = '';

});

dataDestroy.addEventListener('click', () => {

  containerDivs.innerHTML = '';
  inputValue.value = '';

 });





