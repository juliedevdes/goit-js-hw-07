const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  document.querySelector('#ingredients').appendChild(newLi);
});

console.log(document.querySelector('#ingredients'));
