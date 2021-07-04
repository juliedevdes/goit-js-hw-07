const input = document.querySelector('#validation-input');
input.addEventListener('blur', focusInputHandler);

function focusInputHandler(event) {
  const inputLength = Number(event.currentTarget.dataset.length);
  //console.log(inputLength);

  const inputValue = event.currentTarget.value.length;
  //console.log(inputValue);

  input.className = 'invalid';

  //console.log(inputLength === inputValue);
  if (inputLength === inputValue) {
    input.className = 'valid';
  }
}
