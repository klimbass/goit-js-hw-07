const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((elem) => {
  let title = elem.firstElementChild.textContent;
  let length = elem.lastElementChild.children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${length}`);
});
