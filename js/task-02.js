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

document
  .querySelector('#ingredients')
  .append(
    arrayOfLi[0],
    arrayOfLi[1],
    arrayOfLi[2],
    arrayOfLi[3],
    arrayOfLi[4],
    arrayOfLi[5]
  );

console.log(document.querySelector('#ingredients'));
