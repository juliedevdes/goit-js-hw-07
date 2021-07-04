const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const nameInputChangeHandler = () => {
  nameOutput.textContent = nameInput.value;
  if (nameOutput.textContent === '') {
    nameOutput.textContent = nameOutput.textContent = 'незнакомец';
  }
};

nameInput.addEventListener('input', nameInputChangeHandler);
