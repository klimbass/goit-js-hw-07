function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input')
const createBtn = document.querySelector('#controls button[data-create]')
const destroyBtn = document.querySelector('#controls button[data-destroy]')
const divBox = document.querySelector('#boxes')
let quantityItem 
input.addEventListener('input', event => {
  const num = event.target.value
  if ((num > 0) && (num <= 100)) {
    quantityItem = num 
  } else {
    quantityItem = 0
  }

})
createBtn.addEventListener('click', () => {
  divBox.innerHTML = ''
  createBoxes(quantityItem)
  input.value = ''
  quantityItem = 0
})

destroyBtn.addEventListener('click', () => {
  destroyBoxes()
})

function createBoxes(amount) {
  let size = 30
  for (let i = 1; i <= amount; i++, size += 10){
    const div = `<div class = "box" style = "background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px;" ></div>`
    divBox.insertAdjacentHTML("beforeend", div)
  }
}

function destroyBoxes() {
  divBox.innerHTML = ''
}
