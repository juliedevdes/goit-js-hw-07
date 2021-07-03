let counterValue = Number(document.querySelector('#value').textContent);

const increment = () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
};

const deBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const inBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

deBtn.addEventListener('click', decrement);
inBtn.addEventListener('click', increment);
