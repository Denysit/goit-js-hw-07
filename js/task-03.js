const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value.trim();
    
    if (inputValue === '')
    { textOutput.textContent = 'Anonymous'; }
    else { textOutput.textContent = inputValue; }


});
