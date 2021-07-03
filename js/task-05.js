const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const nameInputChangeHandler = () => (nameOutput.textContent = nameInput.value);

nameInput.addEventListener('input', nameInputChangeHandler);
