
const bodyContent = document.body;
const spanColor = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');
buttonChange.addEventListener('click', () => {  
  
  spanColor.textContent = getRandomHexColor();
  bodyContent.style.backgroundColor = spanColor.textContent;

  });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


