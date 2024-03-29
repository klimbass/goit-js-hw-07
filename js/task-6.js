function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const divBox = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  divBox.innerHTML = "";
  if (input.value > 0 && input.value <= 100) {
    createBoxes(input.value);
  }
  input.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const inputNum = Number(amount); //an obvious transformation
  let size = 30;
  let divElementsHtml = "";
  for (let i = 1; i <= inputNum; i++, size += 10) {
    divElementsHtml += `<div class = "box" style = "background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px;" ></div>`;
  }
  divBox.insertAdjacentHTML("beforeend", divElementsHtml);
}

function destroyBoxes() {
  divBox.innerHTML = "";
}
