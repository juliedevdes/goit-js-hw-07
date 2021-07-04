const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arrayOfLi = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  return newLi;
});

document.querySelector('#ingredients').append(...arrayOfLi);
console.log(document.querySelector('#ingredients'));
