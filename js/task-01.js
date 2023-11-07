const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  // console.log(category)
  // const title = category.querySelector('h2').textContent;
  // const items = category.querySelectorAll('li').length;
  const title = category.firstElementChild.textContent;
  const items = category.lastElementChild.children.length;
// console.log(items)
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
