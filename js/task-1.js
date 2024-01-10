const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((elem) => {
  const title = elem.firstElementChild.textContent;
  const length = elem.lastElementChild.children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${length}`);
});
