function rangeInputHandler(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}

const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');
range.addEventListener('input', rangeInputHandler);
